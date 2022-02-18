import React from "react";
import Image from "next/image";

interface CardsProps {
  bgUrl: string;
}

const Cards = ({ bgUrl }: CardsProps) => {
  return (
    <div className="mx-2 w-[230px] h-[300px] relative">
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
