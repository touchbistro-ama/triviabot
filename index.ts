import { Configuration, OpenAIApi } from "openai";
import "dotenv/config";

const main = async () => {
  const apiKey = process.env.OPENAPI_APIKEY;
  const configuration = new Configuration({
    apiKey,
  });

  const prompt = `Happy Friday TouchBistro!! To mark the coronation of King Charles, today's trivia will test your knowledge of the Royal Family!

  1. What are the names of King Charles's five grandchildren?
  2. What were Queen Elizabeth's two middle names?
  3. Who designed Princess Diana's wedding dress?
  4. Which British Princess has a child named Sienna Elizabeth?
  5. How old was Queen Elizabeth II when she became monarch?
  6. Where do the Royal Family traditionally spend Christmas?
  7. What football team do Prince William and Prince George support?
  8. Who lived in Hampton Court Palace?
  9. What language other than English did Queen Elizabeth II speak fluently?
  10. Where will King Charles' Coronation be held?
  
  Good luck!`;

  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(response);
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
