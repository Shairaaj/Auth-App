import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 outline-blue-500 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 outline-blue-500 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 outline-blue-500 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-75 hover:cursor-pointer disabled:opacity-75">
          Signup
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Signin</span>
        </Link>
      </div>
    </div>
  );
};
