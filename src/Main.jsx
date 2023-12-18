import React from "react";
import MyCarousel from "./MyCarousel";

import UltimasNoticias from "./UltimasNoticias";
import MyFacebook from "./MyFacebook";
import GridVertical from "./GridVertical";
import GridVertical2 from "./GridVertical2";

function Main() {
  return (
    <>
      <MyCarousel />
      <GridVertical />
      <MyFacebook />
      <GridVertical2 />
    </>
  );
}

export default Main;
