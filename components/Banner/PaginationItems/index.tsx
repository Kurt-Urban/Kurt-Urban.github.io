import { ReactElement } from "react";
import Skills from "./Skills";

const Items: { content: string | ReactElement; header: string }[] = [
  {
    content: "Hi! I'm Kurt Urban and welcome to my personal page.",
    header: "Welcome",
  },
  {
    content: <Skills />,
    header: "Skills",
  },
];

export default Items;
