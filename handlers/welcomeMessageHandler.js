const handleWelcomeMessage = (bot) => (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Hello mate");
};

module.exports = { handleWelcomeMessage };
