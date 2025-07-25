import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-extrabold text-2xl">Auth App</h1>
        </Link>
        <ul className="flex gap-4 font-bold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>Signin</li>
          </Link>
          <Link to="/signup">
          <li>Signup</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
