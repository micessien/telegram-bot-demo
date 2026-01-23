const telegramBot = require("node-telegram-bot-api");

const createBot = (token) => {
  return new telegramBot(token, { polling: true });
};

module.exports = { createBot };
