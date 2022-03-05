import React from "react";
import Cards from "./Cards";
import Info from "./Info";
import Navbar from "./Navbar";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Slick from "../helper/Slick";
import { useState } from "react";
import { ColorfulCircle } from "../../pages/index";
import Image from "next/image";

const Hero = ({ data, genreData }: ColorfulCircle) => {
  const [stateAnimate, setStateAnimate] = useState<number>(0);
  const [change, setStateChange] = useState(false);
  const selectHandler = (res: number) => {
    setStateAnimate(res);
  };
  // -100 300
  //-200 200
  //-300 100
  const backdrop_path = change
    ? data.slice(0, 4)[stateAnimate as number].backdrop_path
    : data.slice(0, 4)[0].backdrop_path;
  return (
    <div className={`relative w-screen h-screen`}>
      <div className="absolute w-screen h-screen -z-10 overflow-x-hidden">
        {data.slice(0, 4).map((ev, i) => (
          <div
            key={i}
            className={`absolute w-full h-full transition-all ease-in-out duration-700`}
            style={{ transform: `translateX(${100 * (i - stateAnimate)}%)` }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${ev.backdrop_path}`}
              alt="Movies backdrop pictures"
              layout="fill"
              objectFit="cover"
              quality={100}
              className={`brightness-[.65] `}
              priority
            />
          </div>
        ))}
      </div>

      <Navbar />
      <div
        className="flex flex-col justify-center items-end lg:flex-row lg:justify-between pb-10 px-4 lg:px-0"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <Info
          genreData={genreData}
          infoData={data.slice(0, 4)[stateAnimate as number]}
        />
        <div className="flex w-full lg:w-[65%] lg:items-end h-auto lg:h-full mt-8 lg:mt-0">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="ml-2 w-5 h-5 rounded-full border text-white py-3 px-4 button-hover"
            onClick={() =>
              setStateAnimate((prevState) => {
                if (prevState === 0) return 3;
                return prevState - 1;
              })
            }
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 mr-4 w-5 h-5 rounded-full border text-white py-3 px-4 button-hover"
            onClick={() =>
              setStateAnimate((prevState) => {
                if (prevState === 3) return 0;
                return prevState + 1;
              })
            }
          />

          {data.slice(0, 4).map((ev, i) => {
            if (i === 2) {
              return (
                <React.Fragment key="random">
                  <Slick
                    label="Tomorrow"
                    className="sm:h-[370px] w-[8px] mb-8 hidden lg:flex"
                  />
                  <Cards
                    bgUrl={ev.poster_path}
                    key={i}
                    id={i}
                    onSelectHandler={selectHandler}
                    animate={stateAnimate}
                    onSetStateChange={setStateChange}
                  />
                </React.Fragment>
              );
            } else {
              return (
                <Cards
                  bgUrl={ev.poster_path}
                  key={i}
                  id={i}
                  onSelectHandler={selectHandler}
                  animate={stateAnimate}
                  onSetStateChange={setStateChange}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
