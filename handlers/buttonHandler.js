const { CATEGORIES_QUESTIONS, USER_SESSION } = require("../constants");

const userSession = USER_SESSION;
const categories = CATEGORIES_QUESTIONS;

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
