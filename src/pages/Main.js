import React from "react";
import Header from "../components/common/Header";
import MainRow1 from "../components/main/MainRow1";
import Menu from "../components/main/Menu";
import TodayStory from "../components/main/TodayStory";
import Footer from "../components/common/Footer";
import Categories from "../components/main/Categories";
import B2b from "../components/main/B2b";
import Products_rank from "../components/main/Products_rank";
import TodayExhibition from "../components/main/TodayExhibition";

const Main = () => {
  return (
    <div>
      <Header />
      <MainRow1 />
      <Menu />
      <TodayStory />
      <Categories />
      <TodayExhibition />
      <Products_rank />
      <B2b />
      <Footer />
    </div>
  );
};

export default Main;
