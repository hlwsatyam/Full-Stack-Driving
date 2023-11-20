import React, { useState } from "react";
import Mover from "./Mover";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmailValid, isPasswordValid } from "../../../Validation/Validation";
function Form() {
  const [login, setLogin] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const navigate = useNavigate();
  const baseurl = "http://localhost:8800/api/auth";
  const [user, SetUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const InputHander = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    if (!isEmailValid(user.email) || !isPasswordValid(user.password)) {
      setIsEmailError(true);
      setIsPasswordError(true);
      return;
    }
    await axios
      .post(!login ? `${baseurl}/login` : `${baseurl}/register`, {
        email: user.email,
        password: user.password,
        name: user.name,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        alert(res.data.message);
      });
  };
  return (
    <>
      <div className="flex gap-16 border pb-9 border-dotted pt-10 w-[90%] sm:w-[50%] bg-amber-900 m-auto justify-center flex-col items-center">
        {login ? (
          <div className="w-[100%] text-center">
            <input
              type="text"
              name="name"
              onChange={InputHander}
              className="p-4 w-[90%] rounded-[99px]  "
              placeholder="Name*"
            />
          </div>
        ) : (
          ""
        )}
        <div className="w-[100%] text-center">
          <input
            type="email"
            onChange={InputHander}
            name="email"
            className="p-4 w-[90%] rounded-[99px] "
            placeholder="Email*"
          />
        </div>
        {isEmailError ? <p className="text-red-600 ">Invalid Email !</p> : ""}
        <div className="w-[100%] text-center ">
          <input
            type="password"
            name="password"
            onChange={InputHander}
            className="p-4 w-[90%] rounded-[99px]"
            placeholder="Password*"
          />
        </div>
        {isPasswordError ? (
          <p className="text-red-600 ">
            Password Should Be More Than 6 Character! !
          </p>
        ) : (
          ""
        )}
        <div>
          <button
            onClick={submitHandler}
            className=" bg-green-500 font-bold text-xl text-white px-4 py-2 border rounded-[9px]"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
      <Mover setLogin={setLogin} isLoginTrue={login} />
    </>
  );
}

export default Form;
