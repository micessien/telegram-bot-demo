# 🤖 Telegram Quiz Bot

An interactive Telegram bot that provides AI-powered quizzes on web development topics including JavaScript, React, HTML, and CSS.

## 📋 Overview

This bot combines quiz functionality with AI capabilities to deliver an engaging learning experience. Users can select from various programming categories, answer multiple-choice questions, receive instant feedback, and even get AI-powered explanations through integrated language models.

## ✨ Features

- **📚 Multiple Quiz Categories**
  - JavaScript fundamentals (closures, promises, event delegation)
  - React concepts (JSX, hooks, components, Redux)
  - HTML basics (semantic elements, attributes, doctype)
  - CSS styling (box model, flexbox, selectors)

- **🎯 Interactive Quiz Experience**
  - Multiple-choice questions with instant validation
  - Score tracking and performance feedback
  - Session management for multiple users
  - Clean, intuitive interface

- **🧠 AI Integration**
  - OpenAI GPT integration for enhanced responses
  - OpenRouter AI support for alternative models
  - Configurable model selection
  - AI-powered explanations and assistance

## 🛠 Tech Stack

- **Node.js** - Runtime environment
- **node-telegram-bot-api** - Telegram Bot API wrapper
- **OpenAI API** - AI-powered responses
- **OpenRouter** - Alternative AI model provider
- **dotenv** - Environment variable management
- **Nodemon** - Development hot-reloading

## 📁 Project Structure

```
telegram-bot-demo/
├── constants/
│   └── index.js                    # Quiz questions & session data
├── handlers/
│   ├── buttonHandler.js            # Callback query handling
│   └── welcomeMessageHandler.js    # Message handling
├── services/
│   ├── botService.js               # Bot initialization
│   ├── openAIService.js            # OpenAI integration
│   └── openRouterAIService.js      # OpenRouter integration
├── index.js                        # Main application entry
├── package.json                    # Dependencies & scripts
├── .env.sample                     # Environment variables template
└── .gitignore                      # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn
- A Telegram Bot Token (from [@BotFather](https://t.me/botfather))
- OpenAI API Key or OpenRouter API Key (optional for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd telegram-bot-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Copy the sample environment file:
   ```bash
   cp .env.sample .env
   ```
   
   Edit `.env` with your credentials:
   ```env
   TELEGRAM_TOKEN=your_telegram_bot_token
   OPENAI_API_KEY=your_openai_api_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   MODEL_TYPE=openai  # Options: openai, openrouterai
   ```

4. **Start the bot**
   
   Production mode:
   ```bash
   npm start
   ```
   
   Development mode (with auto-reload):
   ```bash
   npm run dev
   ```

## 🔑 Getting API Keys

### Telegram Bot Token
1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the provided API token

### OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new secret key

### OpenRouter API Key
1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for an account
3. Navigate to API Keys
4. Generate a new API key

## 🎮 How to Use

1. **Start the bot**
   - Open Telegram and find your bot
   - Send `/start` to initialize

2. **Select a category**
   - Choose from JavaScript, React, HTML, or CSS
   - Questions will be presented one at a time

3. **Answer questions**
   - Select from multiple-choice options
   - Receive instant feedback
   - Continue through all questions

4. **View results**
   - Get your final score
   - Review performance
   - Start a new quiz if desired

## 🔧 Configuration

### Adding New Quiz Questions (Only if you want to not use AI)

Edit [`constants/index.js`](constants/index.js):

```javascript
const CATEGORIES_QUESTIONS = {
  yourcategory: [
    {
      question: "Your question here?",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      answer: "Correct answer"
    }
  ]
};
```

### Switching AI Models

Change the `MODEL_TYPE` in your `.env` file:
- `openai` - Use OpenAI's GPT models
- `openrouterai` - Use OpenRouter for various models

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the bot in production mode |
| `npm run dev` | Start with nodemon for development |
| `npm test` | Run tests (not yet implemented) |

## 🏗️ Architecture

The bot follows a modular architecture:

- **Services Layer**: Handles external API integrations (Telegram, OpenAI, OpenRouter)
- **Handlers Layer**: Processes incoming messages and button callbacks
- **Constants**: Stores quiz data and session state
- **Main Entry**: Orchestrates the application flow

## 🐛 Troubleshooting

### Bot not responding
- Verify your `TELEGRAM_TOKEN` is correct
- Check if the bot is running (`node index.js`)
- Ensure your bot has proper permissions

### AI features not working
- Verify API keys are set correctly
- Check your API key balance/credits
- Ensure `MODEL_TYPE` matches your available service

### Connection issues
- Check your internet connection
- Verify API endpoints are accessible
- Review console for error messages

## 🤝 Ideas for Contribution

Contributions are welcome! Here's how you can help:

- Add more quiz categories (Python, Node.js, etc.)
- Implement leaderboards
- Add difficulty levels
- Create a web dashboard
- Add multi-language support
- Implement timed challenges

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) for the excellent Telegram wrapper
- OpenAI for providing powerful language models
- The open-source community for inspiration and support

## 📧 Contact

For questions or suggestions, feel free to open an issue or reach out!

---

<div align="center">

**Built with ❤️ by [Micael Dié](https://micaeldie.com) for learning and education**

Made with Node.js and Telegram Bot API

</div>
