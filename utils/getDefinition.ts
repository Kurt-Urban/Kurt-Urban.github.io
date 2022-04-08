import { wordList } from "./wordList";

// DID NOT USE BUCKET TO STORE WORDS SO THIS API ISNT NECESSARY
// const getDefinition = async (word: string): Promise<boolean> => {
//   let isValidWord = false;
//   const apiKey = `?api_key=${process.env.WORDNIK_API_KEY}`;
//   await axios
//     .get(`/definition/${word}/definitions${apiKey}`)
//     .then((res) => {
//       isValidWord = true;
//       console.log("Valid Word");
//     })
//     .catch((err) => {
//       isValidWord = false;
//       console.log("Invalid word");
//     });
//   return isValidWord;

const getDefinition = (word: string): boolean => wordList.includes(word);
export default getDefinition;
