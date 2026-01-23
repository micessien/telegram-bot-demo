const CATEGORIES_QUESTIONS = {
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

const USER_SESSION = {};

const RESPONSE_QUESTION_FORMAT = [
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
];

module.exports = {
  CATEGORIES_QUESTIONS,
  USER_SESSION,
  RESPONSE_QUESTION_FORMAT,
};
