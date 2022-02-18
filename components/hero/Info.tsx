import React from "react";
import {
  faStar,
  faPlay,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../helper/Button";
import Slick from "../helper/Slick";

const Info = () => {
  return (
    <div className="pl-10 w-1/4">
      <Slick label="Today" className="h-20" />

      <h1 className="font-bold text-white text-5xl capitalize mb-6 mt-2">
        The matrix: resurrection
      </h1>
      <div className="mb-4">
        <span>
          <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
        </span>
        <span className="ml-1 text-white">Fiction, Action</span>
      </div>
      <div className="mb-2 text-white">Availible times</div>
      <div className="flex items-center text-white mb-6">
        <Button className="mr-2 cursor-default">17:30</Button>
        <Button className="mr-2 cursor-default">17:30</Button>
        <Button className="mr-2 cursor-default">17:30</Button>

        <FontAwesomeIcon
          icon={faChevronRight}
          className="ml-2 text-2xl hover:text-3xl cursor-pointer"
        />
      </div>

      <div className="text-white">
        <button className="p-3 px-8 bg-secondary-600 rounded-md mr-3 hover:bg-teal-500">
          Buy a ticket
        </button>
        <button className="p-3 px-6 border-2 border-white rounded-md mr-3 hover:bg-white hover:text-black">
          Watch
          <FontAwesomeIcon icon={faPlay} className="ml-4" />
        </button>
      </div>
    </div>
  );
};

export default Info;
