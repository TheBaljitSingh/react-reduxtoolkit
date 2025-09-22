import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ username: "emilys", password: "emilyspass" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(form)).unwrap();
      navigate("/products"); // go to products after login
    } catch (err) {
      // error handled by slice
    }
  };

  function test(){

    (acc, cur)=>{
      if(acc[current.nme]){
        //if already exist then again add another one
      }
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={`bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "loading" ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}

        <p className="mt-4 text-sm text-gray-500 text-center">
          Try with: <b>emilys</b> / <b>emilyspass</b>
        </p>
      </div>
    </div>
  );
}
