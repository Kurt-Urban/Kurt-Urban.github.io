import React from "react";
import Image from "next/image";
import HomeBanner from "../public/bridge.jpg";
import { ProfileInfo } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <ProfileInfo />
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
        <div className="w-2/5 border-t-2 rounded border-primary"></div>
        <div className="text-primary text-2xl px-2">Welcome</div>
        <div className="w-2/5 border-t-2 rounded border-primary"></div>
      </div>
    </>
  );
};

export default Home;
