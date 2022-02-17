import React from "react";
import Cards from "./Cards";
import Info from "./Info";
import Navbar from "./Navbar";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slick from "../helper/Slick";

const Hero = () => {
  return (
    <div
      className="bg-[url('https://image.tmdb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg')] bg-[#0808085b]
    bg-blend-hue
 bg-center bg-cover h-screen"
    >
      <Navbar />
      <div
        className="flex items-end justify-between pb-10"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <Info />
        <div className="flex w-[65%] items-end">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="ml-2 w-5 h-5 rounded-full border text-white p-3"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 mr-4 w-5 h-5 rounded-full border text-white p-3"
          />
          <Cards />
          <Cards />
          <Slick label="Tomorrow" className="h-[370px] w-[8px] mb-8" />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Hero;
