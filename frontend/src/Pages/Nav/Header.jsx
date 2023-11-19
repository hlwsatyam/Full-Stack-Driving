import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [islogged, setIslogged] = useState(true);
  useEffect(() => {
    if (token) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [islogged, token, navigate]);
  const logout = () => {
    localStorage.removeItem("token");
    setIslogged(false);
  };
  return (
    <div className="bg-blue-500 h-12 grid grid-cols-2 place-items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        {" "}
        DashBoard{" "}
      </Link>
      {islogged ? (
        <button onClick={logout} className="text-white text-2xl font-thick">
          Logout
        </button>
      ) : (
        <Link to="/auth" className="text-white text-2xl font-thick">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
