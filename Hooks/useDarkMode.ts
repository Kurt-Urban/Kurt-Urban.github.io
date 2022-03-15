import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";

const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
