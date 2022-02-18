import React from "react";
import Image from "next/image";
import { useState } from "react";

interface CardsProps {
  bgUrl: string;
  onSelectHandler: (e: Number) => void;
  id: Number;
}

const Cards = ({ bgUrl, onSelectHandler, id }: CardsProps) => {
  const [stateAnimate, setStateAnimate] = useState(false);

  const trans = `transition ease-in-out -translate-y-36 duration-300`;
  const clickHandler = (event: any) => {
    setStateAnimate(true);
  };
  return (
    <div
      onTransitionEnd={(event: any) => {
        setStateAnimate(false);
        onSelectHandler(event.target.dataset.id);
        console.log(event.target.dataset.id);
      }}
      className={`mx-2 w-[230px] h-[300px] relative ${
        stateAnimate ? trans : ""
      } `}
      onClick={clickHandler}
      data-id={id}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${bgUrl}`}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
        className="rounded-md cursor-pointer"
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/original${bgUrl}`}
      />
    </div>

    // <div
    //   className={`w-[230px] h-[300px] mx-2 rounded-md cursor-pointer
    //  bg-[url('https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg')] bg-center bg-cover `}
    // ></div>
  );
};

export default Cards;
