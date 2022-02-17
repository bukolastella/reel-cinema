import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../helper/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 text-white bg-[#00000080] ">
      <div className="flex">
        <div className="mr-10 flex flex-col items-center leading-3">
          <span className="text-2xl font-bold">Cinema</span>
          <span className="self-end font-semibold">Reel</span>
        </div>

        <Button>All films</Button>
      </div>

      <div className="text-xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </nav>
  );
};

export default Navbar;
