import { ReactElement } from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import WordulButton from "./WordulButton";

const skills = [
  "Next/Nest.js",
  "SQL/NoSQL",
  "Redis",
  "Elasticsearch",
  "Node.js",
  "Typescript",
  "React",
  "Python",
  "GraphQL",
  "Apollo/TypeORM",
  "AWS",
  "Git/GitHub",
];

const Items: { content: string | ReactElement; header: string }[] = [
  {
    content: <Introduction />,
    header: "Introduction",
  },
  {
    content: <Skills skills={skills} />,
    header: "Skills",
  },
  {
    content: <WordulButton />,
    header: "Game",
  },
];

export default Items;
