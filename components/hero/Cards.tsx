import React from "react";
import Image from "next/image";

interface CardsProps {
  bgUrl: string;
  onSelectHandler: (e: Number) => void;
  onSetStateChange: (e: boolean) => void;
  id: Number;
  animate: Number;
}

const Cards = ({
  bgUrl,
  onSelectHandler,
  id,
  animate,
  onSetStateChange,
}: CardsProps) => {
  const trans = `transition ease-in-out -translate-y-1 duration-500 h-[300px]`;
  const clickHandler = (event: any) => {
    onSelectHandler(+event.target.dataset.id);
  };
  return (
    <div
      className={`mx-2 ${
        id === 3 && "mr-4"
      } w-[230px] relative hover:scale-110 hover:transition-all hover:ease-in-out ${
        animate === id ? trans : "translate-y-0 h-[200px]"
      }`}
      onTransitionEnd={() => {
        onSetStateChange(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${bgUrl}`}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        objectPosition={"center"}
        className="rounded-md cursor-pointer"
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/original${bgUrl}`}
        onClick={clickHandler}
        data-id={id}
      />
    </div>
  );
};

export default Cards;
