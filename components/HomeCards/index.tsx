import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import Introduction from "../Introduction";
import Skills from "../Skills";
import WordulButton from "../WordulButton";

const HomeCards: FC = () => (
  <>
    <Parallax
      translateX={[-100, 35]}
      startScroll={100}
      endScroll={550}
      easing="easeInOutQuad"
      className="w-1/3"
    >
      <Introduction />
    </Parallax>
    <Parallax
      translateX={[300, 160]}
      startScroll={300}
      endScroll={750}
      easing="easeInOutQuad"
      className="w-1/3 mt-20"
    >
      <Skills />
    </Parallax>
    <Parallax
      translateX={[-100, 35]}
      startScroll={500}
      endScroll={950}
      easing="easeInOutQuad"
      className="w-1/3 mt-20"
    >
      <WordulButton />
    </Parallax>
    <Parallax
      translateX={[300, 160]}
      startScroll={700}
      endScroll={1150}
      easing="easeInOutQuad"
      className="w-1/3 mt-20"
    >
      <Link href="https://github.com/Kurt-Urban/Snake" passHref>
        <div className="transition hover:scale-105">
          <Image
            src="/snek.png"
            alt="snake game"
            width={1158}
            height={824}
            className="rounded-xl cursor-pointer"
          />
        </div>
      </Link>
    </Parallax>
  </>
);

export default HomeCards;
