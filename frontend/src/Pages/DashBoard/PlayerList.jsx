import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const player = useSelector((s) => s);
  console.log(player);
  const baseurl = "http://localhost:8800/top-50-players";
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    submitHandler();
  }, [player]);
  const submitHandler = async () => {
    await axios.get(`${baseurl}/${player}`).then((res) => {
      console.log(res.data.users);
      setPlayer(res.data.users);
    });
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-x-4">
      {players.map((item) => (
        <p className="bg-orange-500  text-lg text-white  my-5 py-4 rounded-2xl px-10 ">
          {" "}
          <span>{item.id}</span>
          <span className="float-right ml-8 ">
            {item.perfs[player]?.rating}
          </span>
        </p>
      ))}
    </div>
  );
};

export default PlayerList;




