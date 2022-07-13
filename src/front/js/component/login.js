import { Action } from "history";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handlesubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  return (
    <div className="container w-25 h-75 d-flex align-items-center rounded-3">
      <div className="form h-50 bg-light py-5 px-5">
        <form onSubmit={handlesubmit}>
          <div className="input-container">
            <p>Email</p>
            <input
              type="text"
              name="uname"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p>Password</p>
            <input
              type="password"
              name="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container mt-3">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
