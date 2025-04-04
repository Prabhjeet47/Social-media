import React, { useEffect, useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <span id="username">Gather Together</span>

        <div className="form-control" id="okok">
          <input
            className="input input-alt"
            placeholder="Enter email ID"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="input-border input-border-alt"></span>
        </div>

        <div className="form-control">
          <input
            className="input input-alt"
            placeholder="Enter password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="input-border input-border-alt"></span>
        </div>

        {/* <Link to="/forgot/password">
          <Typography color="gray">Forgot Password?</Typography>
        </Link> */}

        <Button type="submit">
          <p id="loginBtn">Login</p>
        </Button>

        <Link to="/register">
          <Typography color="gray">New User?</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
