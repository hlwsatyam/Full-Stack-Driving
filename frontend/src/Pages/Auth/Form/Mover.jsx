import React from "react";

const Mover = ({ isLoginTrue, setLogin }) => {
  const clickHandler = (e) => {
    setLogin(!isLoginTrue);
  };
  return (
    <div className=" text-center p-6 rounded text-black">
      {" "}
      <button
        onClick={clickHandler}
        className={
          isLoginTrue
            ? "border-[2px] rounded-[10px] text-white border-[white]  px-10 py-2  "
            : "bg-slate-900 text-white px-10 py-2  "
        }
        disabled={!isLoginTrue}
      >
        {" "}
        Login{" "}
      </button>{" "}
      <button
        disabled={isLoginTrue}
        onClick={clickHandler}
        className={
          !isLoginTrue
            ? "border-[2px] rounded-[10px] ml-[5px] text-white border-[white] px-10 py-2  "
            : "bg-slate-900  rounded-[10px]  text-white ml-[5px] px-10 py-2  "
        }
      >
        {" "}
        Signup{" "}
      </button>{" "}
    </div>
  );
};

export default Mover;
