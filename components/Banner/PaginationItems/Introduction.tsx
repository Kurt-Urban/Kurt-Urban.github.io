import React, { FC } from "react";

const Introduction: FC = () => {
  return (
    <>
      <div className="container grid w-1/2 mx-auto text-lg">
        <span className="font-bold mx-auto mb-2">
          Welcome to my personal website.
        </span>
        <span>
          I&apos;m a software developer based in Florida, USA. My background is
          in Full-Stack Typescript-React Development, though I have shifted
          focus onto backend server design and development using Typescript. I
          enjoy snowboarding, brewing, and playing any of my musical
          instruments.
        </span>
      </div>
    </>
  );
};

export default Introduction;
