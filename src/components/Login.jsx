import React, { useState } from "react";
import "../signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const startTimer = () => {
    setTimeout(() => {
      sessionStorage.removeItem("token");
      navigate("/login");
    }, 30000);
  };

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password,
      })
      .then((response) => {
        //get token from response
        const token = response.data.access;
        console.log("___________ ttttttttttttt", token);

        //set JWT token to local
        sessionStorage.setItem("token", token);
        //set token to axios common header
        // setAuthToken(token);

        //redirect user to home page

        navigate("/home");

        startTimer();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="my-5">
        <h1 id="form-heading">Login</h1>
        <div id="input-wrapper">
          <div>
            <input
              className="input-box"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <input
              className="input-box"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary mx-2"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("signup");
            }}
            className="btn btn-primary mx-2"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
