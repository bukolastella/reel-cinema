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
import { ColorfulCircle } from "../../pages/index";
import Image from "next/image";

const Hero = ({ data, genreData }: ColorfulCircle) => {
  const [stateAnimate, setStateAnimate] = useState<number>(0);
  const [change, setStateChange] = useState(false);
  const selectHandler = (res: number) => {
    setStateAnimate(res);
  };
  const backdrop_path = change
    ? data.slice(0, 4)[stateAnimate as number].backdrop_path
    : data.slice(0, 4)[0].backdrop_path;
  return (
    <div className={`relative w-screen h-screen`}>
      <div className="absolute w-screen h-screen -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-[.65]"
          // priority={true}
          // placeholder="blur"
          // blurDataURL={`https://image.tmdb.org/t/p/original${
          //   data.slice(0, 4)[stateAnimate as number].backdrop_path
          // }`}
        />
      </div>

      <Navbar />
      <div
        className="flex items-end justify-between pb-10"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <Info
          genreData={genreData}
          infoData={data.slice(0, 4)[stateAnimate as number]}
        />
        <div className="flex w-[65%] items-end">
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
                  <Slick label="Tomorrow" className="h-[370px] w-[8px] mb-8" />
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
