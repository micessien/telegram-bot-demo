const handleWelcomeMessage = (bot) => (msg) => {
  const chatId = msg.chat.id;
  //   console.log("🚀 ~ handleWelcomeMessage ~ msg:", msg);

  bot.sendMessage(chatId, "Hello mate!", {
    reply_markup: {
      inline_keyboard: [[{ text: "Start quiz", callback_data: "start_quiz" }]],
    },
  });
};

module.exports = { handleWelcomeMessage };
