import React, { FC } from "react";
import Image from "next/image";
import HomeBanner from "../../public/bridge.jpg";
import Pagination from "./Pagination";

const Banner: FC = () => {
  return (
    <>
      <div className="relative bottom-40">
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
      <Pagination />
    </>
  );
};

export default Banner;
