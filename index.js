require("dotenv").config();
const { createBot } = require("./services/botService");
const { handleWelcomeMessage } = require("./handlers/welcomeMessageHandler");
const { handleButton } = require("./handlers/buttonHandler");
const { getAIResponse } = require("./services/openAIService");

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = createBot(TOKEN);

bot.on("message", handleWelcomeMessage(bot));
bot.on("callback_query", handleButton(bot, getAIResponse));

console.log("App is running successfully.");
