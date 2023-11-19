import React from "react";

const Mover = ({ isLoginTrue, setLogin }) => {
  const clickHandler = (e) => {
    setLogin(!isLoginTrue);
  };
  return (
    <div className="bg-white p-6 text-black">
      {" "}
      <button
        onClick={clickHandler}
        className={
          isLoginTrue
            ? "border-[2px] rounded-[10px] border-[black] px-10 py-2  "
            : "bg-slate-900 px-10 py-2  "
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
            ? "border-[2px] rounded-[10px] ml-[-5px] border-[black] px-10 py-2  "
            : "bg-slate-900  ml-[-5px] px-10 py-2  "
        }
      >
        {" "}
        Signup{" "}
      </button>{" "}
    </div>
  );
};

export default Mover;
