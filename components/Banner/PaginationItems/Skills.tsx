import React, { FC } from "react";

const Skills: FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="px-2 grid grid-cols-4 mb-12">
      {skills.map((skill, i) => {
        return (
          <div
            key={skill + i}
            className="bg-indigo-600 opacity-90 rounded flex items-center justify-center text-white m-1 p-1"
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;