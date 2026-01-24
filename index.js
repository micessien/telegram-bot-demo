require("dotenv").config();
const { createBot } = require("./services/botService");
const { handleWelcomeMessage } = require("./handlers/welcomeMessageHandler");
const { handleButton } = require("./handlers/buttonHandler");
const { getAIResponse } = require("./services/openAIService");
const { getOpenRouterAIResponse } = require("./services/openRouterAIService");

const TOKEN = process.env.TELEGRAM_TOKEN;

// Set the right AI response function based on MODEL_TYPE
const AI_RESPONSE =
  process.env.MODEL_TYPE === "openrouterai"
    ? getOpenRouterAIResponse
    : getAIResponse;

const bot = createBot(TOKEN);

bot.on("message", handleWelcomeMessage(bot));
bot.on("callback_query", handleButton(bot, AI_RESPONSE));

console.log("App is running successfully.");
