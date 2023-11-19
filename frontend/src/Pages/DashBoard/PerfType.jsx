import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PerfListAction } from "../../Redux/Action";
const PerfType = () => {
  const dispatch = useDispatch();
  const Perflist = [
    "ultraBullet",
    "bullet",
    "blitz",
    "rapid",
    "classical",
    "chess960",
    "crazyhouse",
    "antichess",
    "atomic",
    "horde",
    "kingOfTheHill",
    "racingKings",
    "threeCheck",
  ];
  const [currentPerfType, setCurrentPerfType] = useState(Perflist[0]);
  useEffect(() => {
    dispatch(PerfListAction(currentPerfType));
  }, [currentPerfType]);
  return (
    <div className="flex mt-5 justify-center items-center flex-wrap gap-x-4 gap-y-4  ">
      {Perflist.map((item) => (
        <button
          onClick={() => setCurrentPerfType(item)}
          className={
            item == currentPerfType
              ? "px-3 uppercase font-bold text-gray-600 rounded-[12px] py-4 bg-emerald-400 "
              : "px-3 uppercase font-bold text-red-50 rounded-[12px] py-4 bg-green-900 "
          }
        >
          {" "}
          {item}{" "}
        </button>
      ))}
    </div>
  );
};

export default PerfType;
