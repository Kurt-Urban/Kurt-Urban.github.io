import { useContext } from "react";
import { GuessContext } from "../Context/GuessContext";

const useGuess = () => useContext(GuessContext);

export default useGuess;
