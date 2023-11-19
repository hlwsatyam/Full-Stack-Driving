import React from "react";
import PerfType from "./PerfType";
import PlayerList from "./PlayerList";

const DashBoard = () => {
  return (
    <div>
      <div className=" border-b-8 pb-4 text-center text-teal-500 sm:text-9xl text-5xl ">
        Dash | Board
      </div>
      <PerfType />
      <div className=" border-b-8 pb-4 text-center text-teal-500 sm:text-6xl text-2xl ">
        Player List
      </div>
      <PlayerList />
    </div>
  );
};

export default DashBoard;
