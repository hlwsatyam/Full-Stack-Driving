import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Ratings = () => {
  const location = useLocation();
  const [list, setList] = useState([]);
  useEffect(() => {
    GetHistory();
  }, [true]);
  const GetHistory = async () => {
    await axios
      .get(`http://localhost:8800/player${location.pathname}/rating-history`)
      .then((res) => {
        setList(res.data);
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl my-7 ">
        {" "}
        UserName:{location.pathname.replace("/", " ")}{" "}
      </h1>
      <TableVisual list={list} />{" "}
    </div>
  );
};

export default Ratings;

const TableVisual = ({ list }) => (
  <div>
    {" "}
    <h1 className="text-center text-2xl "> Table Visualization! </h1>
    <table className="border w-full ">
      <tr>
        {" "}
        <th>Year</th> <th>month</th> <th>Day</th>
        <th>Rating</th>{" "}
      </tr>
      
      {list.map((item) => (
        <tr className="w-[100%]">
          {" "}
          <td className="text-center border">{item[0]}</td>
          <td className="text-center border"> {item[1]}</td>
          <td className="text-center border ">{item[2]}</td>
          <td className="text-center border ">{item[3]}</td>
        </tr>
      ))}
    </table>
  </div>
);
