import Link from "next/link";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Container } from "../components/TailwindStyledComponents";

const GamesTab: FC = () => {
  return (
    <>
      <Container className="mx-auto bg-slate-500 min-w-full py-4">
        <Link href="/" passHref>
          <span className="font-bold cursor-pointer ml-3">Home</span>
        </Link>
      </Container>
    </>
  );
};

export default GamesTab;
