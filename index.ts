import { Configuration, OpenAIApi } from "openai";

const main = async () => {
  const apiKey = "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";
  const configuration = new Configuration({
    apiKey,
  });

  const prompt = `Happy Friday TouchBistro!

  In today's trivia, we are testing your knowledge of the solar system! The first person to answer all the questions below correctly, will win a gift card.
  
  1. What three planets are closest to the Sun?
  2. Which planet has the most moons?
  3. What's the brightest planet in Earth's night sky?
  4. Which planet is furthest from the sun?
  5. Which planet in our solar system has the most oxygen?
  6. How many planets in our solar system have moons?
  7. What is the hottest planet in our solar system?
  8. In our solar system, which planet has the shortest day?
  9. What is the smallest planet in the solar system?
  10. What is the only planet known to have active volcanoes besides Earth?
  
  Good luck!`;

  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  console.log(response.data.choices);
};

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
  }
  // `text` is not available here
})();
// `text` is not available here, either, and code here is reached before the promise settles
// and before the code after `await` in the main function above runs
