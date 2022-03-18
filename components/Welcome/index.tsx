import classNames from "classnames";
import React, { FC } from "react";
import langCodes from "./langCodes";

const translations = () => {
  const translations: string[] = [];
  while (translations.length < 6) {
    const lang = langCodes[Math.floor(Math.random() * langCodes.length)];
    if (!translations.includes(lang)) {
      translations.push(lang);
    }
  }
  return translations;
};
const Welcome: FC = () => {
  return (
    <>
      <div className="relative h-0 text-center lg:text-4xl lg:ml-48 xl:text-7xl xl:ml-96 grid transition-all">
        {translations()?.map((lang, i) => {
          return (
            <span
              key={i}
              className={classNames("mt-1 z-10 opacity-30", {
                "opacity-10": i > 3,
              })}
            >
              {lang}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Welcome;
