import React from "react";
import Image from "next/image";

interface CardsProps {
  bgUrl: string;
  onSelectHandler: (e: number) => void;
  onSetStateChange: (e: boolean) => void;
  id: number;
  animate: number;
}

const Cards = ({
  bgUrl,
  onSelectHandler,
  id,
  animate,
  onSetStateChange,
}: CardsProps) => {
  const trans = `-translate-y-1 h-[300px]`;
  const clickHandler = (event: any) => {
    onSelectHandler(+event.target.dataset.id);
  };
  return (
    <div
      className={`mx-2 ${
        id === 3 && "mr-4"
      } w-[230px] relative transition-all ease-in-out duration-700 ${
        animate === id ? trans : "translate-y-0 h-[200px]"
      }`}
      onClick={clickHandler}
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
        data-id={id}
      />
    </div>
  );
};

export default Cards;
