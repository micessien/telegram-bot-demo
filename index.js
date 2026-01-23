require("dotenv").config();
const { createBot } = require("./services/botService");
const { handleWelcomeMessage } = require("./handlers/welcomeMessageHandler");
const { handleButton } = require("./handlers/buttonHandler");

const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = createBot(TOKEN);

bot.on("message", handleWelcomeMessage(bot));
bot.on("callback_query", handleButton(bot));

console.log("App is running successfully.");
