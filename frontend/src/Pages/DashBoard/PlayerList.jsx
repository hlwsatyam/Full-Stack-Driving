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
    <div>
      <TableVisual players={players} player={player} />
      <p className="bg-orange-500  text-lg text-white   py-4 rounded-2xl px-10 ">
        {" "}
        <span>Player Name</span>
        <span className="float-right ml-8 ">Rating</span>{" "}
      </p>

    </div>
  );
};

export default PlayerList;

const TableVisual = ({ players, player }) => (
  <div>
    {" "}
    <h1 className="text-center text-2xl "> Table Visualization! </h1>
    <table className="border w-full ">
      <tr>
        {" "}
        <th>Username</th> <th>Rating</th>{" "}
      </tr>

      {players.map((item) => (
        <tr className="w-[100%]">
          {" "}
          <td className="text-center border">{item.id}</td>
          <td className="text-center border ">{item.perfs[player]?.rating}</td>
        </tr>
      ))}
    </table>
  </div>
);


