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
import { useState } from "react";
import { ResponProps } from "../../pages/index";

const Hero = ({ data }: ResponProps) => {
  const [state, setState] = useState(data.slice(0, 4));

  const selectHandler = (res: Number) => {
    const moveInArray = function (arr: any, from: any, to: any) {
      const item = arr.splice(0, from);
      setState([...arr, ...item]);
    };
    moveInArray(state, res, 5);
  };
  return (
    <div
      className="bg-[url('https://image.tmdb.org/t/p/original/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg')] bg-[#0808085b]
    bg-blend-hue overflow-x-hidden
 bg-center bg-cover h-screen"
    >
      <Navbar />
      <div
        className="flex items-end justify-between pb-10 translate-x-12"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <Info />
        <div className="flex w-[65%] items-end">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="ml-2 w-5 h-5 rounded-full border text-white py-3 px-4"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 mr-4 w-5 h-5 rounded-full border text-white py-3 px-4"
          />
          {state.map((ev, i) => (
            <Cards
              bgUrl={ev.poster_path}
              key={i}
              id={i}
              onSelectHandler={selectHandler}
            />
          ))}
          {/* <Cards bgUrl="1g0dhYtq4irTY1GPXvft6k4YLjm" />
          <Cards bgUrl="aq4Pwv5Xeuvj6HZKtxyd23e6bE9" />
          <Slick label="Tomorrow" className="h-[370px] w-[8px] mb-8" />
          <Cards bgUrl="1g0dhYtq4irTY1GPXvft6k4YLjm" />
          <Cards bgUrl="6qkeXdIEwqOuOWuxsomwnin2RdD" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
