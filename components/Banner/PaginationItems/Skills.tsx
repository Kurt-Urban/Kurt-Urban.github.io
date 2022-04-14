import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

const skills = [
  "Next/Nest.js",
  "SQL/NoSQL",
  "Redis",
  "Elasticsearch",
  "Node.js",
  "Typescript",
  "TypeORM",
  "Python",
  "GraphQL",
  "Apollo",
  "AWS",
  "Git/GitHub",
  "Formik",
  "TailwindCSS",
  "Bootstrap",
  "Placeholder",
];

const Skill: FC<{ skill: string }> = ({ skill }) => {
  const classString =
    "bg-indigo-600 opacity-90 rounded flex items-center justify-center text-white m-1 p-1";

  if (skill === "Placeholder")
    return (
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
        <div
          className={classNames(
            classString,
            "cursor-pointer transition hover:bg-indigo-800"
          )}
        >
          {skill}
        </div>
      </Link>
    );
  return <div className={classString}>{skill}</div>;
};

const Skills: FC = () => {
  const sortedSkills = skills.sort();
  return (
    <>
      <div className="flex justify-center font-bold text-lg mb-3">Skills</div>
      <div className="px-2 grid grid-cols-4 mb-12">
        {sortedSkills.map((skill, i) => {
          return <Skill key={skill + i} skill={skill} />;
        })}
      </div>
    </>
  );
};

export default Skills;
