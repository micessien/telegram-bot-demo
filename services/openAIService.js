const { OpenAI } = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const responseQuestionFormat = [
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

const getAIResponse = async (selectedCategory) => {
  const prompt = `Generate a quiz for the selected topic: ${selectedCategory}. Generate total of 4 questions strictly following this format of question response ${responseQuestionFormat}. Response should be an array of objects returned as a string. Each object should contain questions, 4 options of answers and one field for the correct answer.`;

  try {
    const completion = await client.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return {
      success: true,
      data: completion.choices[0].message.content.replace(/```/g, ""),
    };
  } catch (e) {
    return { success: false, data: e.toString() };
  }
};

module.exports = { getAIResponse };
