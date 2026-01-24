// instead of using the OpenRouter SDK we will use OpenAI SDK
const { OpenAI } = require("openai");
const { RESPONSE_QUESTION_FORMAT } = require("../constants");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const responseQuestionFormat = RESPONSE_QUESTION_FORMAT;

const getOpenRouterAIResponse = async (selectedCategory) => {
  const prompt = `Generate a quiz for the selected topic: ${selectedCategory}. Generate total of 4 questions strictly following this format of question response ${responseQuestionFormat}. Response should be an array of objects returned as a string. Each object should contain questions, 4 options of answers and one field for the correct answer.`;

  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
    });

    return {
      success: true,
      data: completion.choices[0].message.content.replace(/```/g, ""),
    };
  } catch (e) {
    return { success: false, data: e.toString() };
  }
};

module.exports = { getOpenRouterAIResponse };
