import { wordList } from "./wordList";
const pickWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export default pickWord;
