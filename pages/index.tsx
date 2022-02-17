import React from "react";
import { Banner, ProfileInfo, Welcome } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <ProfileInfo />
      <Banner />
    </>
  );
};

export default Home;
