import React, { useState } from "react";
import Mover from "./Mover";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {
  const [login, setLogin] = useState(false);
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
    <div className="flex gap-16 h-full justify-center flex-col items-center">
      {login ? (
        <div className="">
          <input
            type="text"
            name="name"
            onChange={InputHander}
            className="p-4"
            placeholder="Name*"
          />
        </div>
      ) : (
        ""
      )}
      <div className="">
        <input
          type="email"
          onChange={InputHander}
          name="email"
          className="p-4"
          placeholder="Email*"
        />
      </div>
      <div className="">
        <input
          type="password"
          name="password"
          onChange={InputHander}
          className="p-4"
          placeholder="Password*"
        />
      </div>
      <div>
        <button
          onClick={submitHandler}
          className="bg-slate-100 px-4 py-2 border rounded-[9px]"
        >
          {" "}
          Submit{" "}
        </button>
      </div>

      <Mover setLogin={setLogin} isLoginTrue={login} />
    </div>
  );
}

export default Form;
