import React, { FC, ReactElement, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Items from "./PaginationItems";
import Image from "next/image";
import HomeBanner from "../../public/bridge.jpg";
import classNames from "classnames";

const Banner: FC = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="opacity-90 relative bottom-40">
        <Image
          unoptimized
          id="banner-photo"
          height="2529"
          width="5302"
          src={"https://i.imgur.com/AiOZfs5.jpg" || HomeBanner}
          alt="moose in rocky mountains"
          loader={() => "https://i.imgur.com/AiOZfs5.jpg"}
        />
      </div>
      <div className="relative right-0 z-10 banner-vector"></div>
      <div className="w-full mt-10 flex justify-around items-center">
        <div className="w-1/3 border-t-2 rounded border-primary" />
        <button
          className={classNames("transition duration-300 text-primary", {
            "text-secondary": page === 0,
          })}
          onClick={() => {
            if (page === 0) return;
            setPage(page - 1);
          }}
        >
          <IoIosArrowBack />
        </button>
        <div className="mt-7">
          {Items.map(
            (
              item: { content: string | ReactElement; header: string },
              i: number
            ) => {
              return (
                <div
                  key={i}
                  className={classNames(
                    "text-primary text-2xl px-2 w-60 -mt-8 text-center transition-all duration-150",
                    { "opacity-0": i !== page }
                  )}
                >
                  {item.header}
                </div>
              );
            }
          )}
        </div>
        <button
          className={classNames("transition duration-300 text-primary", {
            "text-secondary": page + 1 === Items.length,
          })}
          onClick={() => {
            if (page === Items.length - 1) return;
            setPage(page + 1);
          }}
        >
          <IoIosArrowForward />
        </button>
        <div className="w-1/3 border-t-2 rounded border-primary" />
      </div>
      <div className="container flex justify-center mx-auto mt-12 mb-24 text-gray-300">
        {Items.map(
          (
            item: { content: string | ReactElement; header: string },
            i: number
          ) => {
            return (
              <div
                key={i}
                className={classNames("absolute transition-all duration-150", {
                  "opacity-0": i !== page,
                })}
              >
                {item.content}
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Banner;
