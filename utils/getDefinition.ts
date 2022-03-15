import axios from "axios";

const getDefinition = async (word: string): Promise<boolean> => {
  let isValidWord = false;
  const apiKey = `?api_key=${process.env.WORDNIK_API_KEY}`;
  await axios
    .get(`/definition/${word}/definitions${apiKey}`)
    .then((res) => {
      isValidWord = true;
      console.log("Valid Word");
    })
    .catch((err) => {
      isValidWord = false;
      console.log("Invalid word");
    });
  return isValidWord;
};
export default getDefinition;
