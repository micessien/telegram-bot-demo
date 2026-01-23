const userSession = {};

const categories = {
  javascript: [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A combination of functions",
        "A function with its lexical scope",
        "A type of loop",
        "An object property",
      ],
      answer: "A function with its lexical scope",
    },
    {
      question: "Explain event delegation",
      options: [
        "A way to handle events at a higher level",
        "A method to create events",
        "A type of callback function",
        "A way to stop event propagation",
      ],
      answer: "A way to handle events at a higher level",
    },
    {
      question: "What are promises?",
      options: [
        "A way to handle asynchronous operations",
        "A type of function",
        "A JavaScript object",
        "A method to create variables",
      ],
      answer: "A way to handle asynchronous operations",
    },
    {
      question: "What is the 'this' keyword?",
      options: [
        "Refers to the current object",
        "Refers to a function",
        "Refers to a variable",
        "Refers to a class",
      ],
      answer: "Refers to the current object",
    },
  ],
  react: [
    {
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A type of function",
        "A JavaScript library",
        "A CSS framework",
      ],
      answer: "A syntax extension for JavaScript",
    },
    {
      question: "What are hooks in React?",
      options: [
        "Functions that let you use state and other React features",
        "A type of component",
        "A way to style components",
        "A method to create elements",
      ],
      answer: "Functions that let you use state and other React features",
    },
    {
      question: " What is a component?",
      options: [
        "A reusable piece of UI",
        "A type of function",
        "A JavaScript object",
        "A method to create variables",
      ],
      answer: "A reusable piece of UI",
    },
    {
      question: "What is Redux?",
      options: [
        "A state management library",
        "A type of component",
        "A JavaScript framework",
        "A method to create elements",
      ],
      answer: "A state management library",
    },
  ],
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Marking Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What is the purpose of the alt attribute in an img tag?",
      options: [
        "To provide alternative text for an image",
        "To define the alignment of the image",
        "To specify the image source",
        "To set the image dimensions",
      ],
      answer: "To provide alternative text for an image",
    },
    {
      question: "What are semantic HTML elements?",
      options: [
        "Elements that clearly describe their meaning in a human- and machine-readable way",
        "Elements used for styling purposes",
        "Elements that are deprecated",
        "Elements that are only used in HTML5",
      ],
      answer:
        "Elements that clearly describe their meaning in a human- and machine-readable way",
    },
    {
      question: "What is an HTML5 doctype?",
      options: [
        "<!DOCTYPE html>",
        "<DOCTYPE HTML5>",
        "<DOCTYPE html5>",
        "<HTML5>",
      ],
      answer: "<!DOCTYPE html>",
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What is the box model in CSS?",
      options: [
        "A way to represent the structure of HTML elements",
        "A method to create layouts",
        "A type of CSS selector",
        "A way to style text",
      ],
      answer: "A way to represent the structure of HTML elements",
    },
    {
      question: " What is Flexbox?",
      options: [
        "A layout model for arranging elements in a one-dimensional space",
        "A type of CSS selector",
        "A method to create animations",
        "A way to style text",
      ],
      answer:
        "A layout model for arranging elements in a one-dimensional space",
    },
    {
      question:
        "What is the difference between class selectors and ID selectors?",
      options: [
        "Class selectors can be used on multiple elements, while ID selectors are unique to a single element",
        "Class selectors are more specific than ID selectors",
        "ID selectors can be used on multiple elements, while class selectors are unique to a single element",
        "There is no difference",
      ],
      answer:
        "Class selectors can be used on multiple elements, while ID selectors are unique to a single element",
    },
  ],
};

// Ask question helper function
const askQuestion = (bot, chatId, questions, index) => {
  const question = questions[index];
  const options = question.options.map((option, i) => [
    { text: option, callback_data: `answer_${index}_${i}` },
  ]);
  bot.sendMessage(chatId, question.question, {
    reply_markup: {
      inline_keyboard: options,
    },
  });
};

const handleButton = (bot, getAIResponse) => async (callbackQuery) => {
  //   console.log("🚀 ~ handleButton ~ callbackQuery:", callbackQuery);
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === "start_quiz") {
    bot.sendMessage(chatId, "Choose a category:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "JavaScript", callback_data: "category_javascript" }],
          [{ text: "React", callback_data: "category_react" }],
          [{ text: "HTML", callback_data: "category_html" }],
          [{ text: "CSS", callback_data: "category_css" }],
        ],
      },
    });
  } else if (data.startsWith("category")) {
    const category = data.split("_")[1];
    userSession[chatId] = {
      category,
      currentIndex: 0,
      correctAnswers: 0,
      questions: categories[category],
    };

    const response = await getAIResponse(category);
    if (!response.success) {
      bot.sendMessage(
        chatId,
        response?.data ?? "Failed to fetch questions. Please try again.",
      );
      return;
    }
    const questions = JSON.parse(response.data);
    userSession[chatId].questions = questions;

    askQuestion(bot, chatId, questions, 0);
  } else if (data.startsWith("answer_")) {
    const [_, questionIndex, optionIndex] = data.split("_").map(Number);
    const chatSession = userSession[chatId];
    if (!chatSession) {
      bot.sendMessage(chatId, "Select a category to start a quiz.");
      return;
    }

    const question = chatSession.questions[questionIndex];
    const userAnswer = question.options[optionIndex];
    const correctAnswer = question.answer;

    if (userAnswer === correctAnswer) {
      chatSession.correctAnswers++;
    }

    if (questionIndex + 1 < chatSession.questions.length) {
      chatSession.currentIndex++;
      askQuestion(bot, chatId, chatSession.questions, questionIndex + 1);
    } else {
      bot.sendMessage(
        chatId,
        `Quiz is ended. You've got ${chatSession.correctAnswers} out of ${chatSession.questions.length} correct.`,
      );
      delete userSession[chatId];
    }
  }
};

module.exports = { handleButton };
