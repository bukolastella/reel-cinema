import React from "react";
import {
  faStar,
  faPlay,
  faChevronRight,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../helper/Button";
import Slick from "../helper/Slick";
import { GenresProps } from "../../pages/index";

interface InfoProps {
  infoData: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

const Info: React.FC<InfoProps & GenresProps> = ({ infoData, genreData }) => {
  console.log(infoData);
  //Avg Rating
  const avgRating = infoData.vote_average / 2;
  const int = Math.trunc(avgRating);
  const arr = [];
  for (let index = 0; index < int; index++) {
    arr.push(
      <FontAwesomeIcon
        icon={faStar}
        key={arr.length}
        className="mr-1 text-yellow-400"
      />
    );
  }
  if (avgRating - int > 0.8) {
    arr.push(
      <FontAwesomeIcon
        icon={faStar}
        key={arr.length}
        className="mr-1 text-yellow-400"
      />
    );
  } else {
    arr.push(
      <FontAwesomeIcon
        icon={faStarHalf}
        key={arr.length}
        className=" text-yellow-400 mr-0"
      />
    );
  }
  for (let index = 0; index < 5 - Math.ceil(avgRating); index++) {
    arr.push(
      <FontAwesomeIcon
        key={arr.length}
        icon={faStar}
        className="mr-1 text-gray-900"
      />
    );
  }
  //Genre
  const genres = infoData.genre_ids;
  const stringGenres: string[] = [];
  genres.map((ev) =>
    genreData.filter((name) => {
      if (name.id === ev) {
        stringGenres.push(name.name);
      }
    })
  );
  return (
    <div className="sm:pl-10 w-full sm:w-1/4">
      <div className="flex sm:block mb-4 sm:mb-0">
        <Slick label="Today" className="h-20" />
        <h1 className="font-bold text-white text-2xl sm:text-5xl capitalize sm:mb-6 mt-2 self-end">
          {infoData.title}
        </h1>
      </div>

      <div className="mb-4">
        <span>{arr}</span>
        <div className=" text-white capitalize mt-2">
          {stringGenres.join(" | ")}
        </div>
      </div>
      <div className="mb-2 text-white">Available times</div>
      <div className="flex items-center text-white mb-6 overflow-x-scroll">
        <Button className="mr-2 cursor-default">17:30</Button>
        <Button className="mr-2 cursor-default">17:30</Button>
        <Button className="mr-2 cursor-default">17:30</Button>

        <FontAwesomeIcon
          icon={faChevronRight}
          className="ml-2 text-2xl hover:text-3xl cursor-pointer"
        />
      </div>

      <div className="text-white flex sm:block">
        <button className="py-3 px-4 sm:px-8 bg-secondary-600 rounded-md mr-3 hover:bg-teal-500">
          Buy a ticket
        </button>
        <button className="py-3  px-4 sm:px-6 border-2 border-white rounded-md mr-3 hover:bg-white hover:text-black">
          Watch
          <FontAwesomeIcon icon={faPlay} className="ml-4" />
        </button>
      </div>
    </div>
  );
};

export default Info;
