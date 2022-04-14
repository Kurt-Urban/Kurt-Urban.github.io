import { ReactElement } from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import WordulButton from "./WordulButton";

const Items: { content: string | ReactElement; header: string }[] = [
  {
    content: <Introduction />,
    header: "Introduction",
  },
  {
    content: <Skills />,
    header: "Skills",
  },
  {
    content: <WordulButton />,
    header: "Game",
  },
];

export default Items;
