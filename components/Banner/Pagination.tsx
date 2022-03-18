import React, { FC, ReactElement, useState } from "react";
import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Items from "./PaginationItems";

const Pagination: FC = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="w-full flex justify-around items-center">
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
          <IoIosArrowBack className="text-2xl" />
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
          <IoIosArrowForward className="text-2xl" />
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

export default Pagination;
