import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  // Use this url for the login component
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");

  // save the user's name, email & password
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // onChangeHandler that takes the data from input field and save it in the state variable.
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // set the data in the state variable
    setData((data) => ({ ...data, [name]: value }));
  };

  // User login function
  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;

    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    // Call the api
    const response = await axios.post(newUrl, data);

    // if the response is true that means we are logged-in/registered so we get 1 token
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute inset-0 z-10 bg-black bg-opacity-60 grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[min(23vw,330px)] text-gray-600 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-lg font-semibold">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-4 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5">
          {currState === "Login" ? null : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-gray-300 rounded-md p-2"
            />
          )}
          <input
            onChange={onChangeHandler}
            value={data.email}
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-gray-300 rounded-md p-2"
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            name="password"
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="border-none py-2 px-4 rounded-md text-white bg-red-500 text-base cursor-pointer"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>


        {currState === "Login" ? (
          <p className="text-center text-sm">
            Don't have an account! Register Now?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-red-500 font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-red-500 font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
