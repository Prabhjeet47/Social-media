import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);

  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <span id="username">Gather Together</span>

        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <div className="form-control">
          <input
            className="input input-alt"
            placeholder="Enter name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="input-border input-border-alt"></span>
        </div>

        <div className="form-control">
          <input
            className="input input-alt"
            placeholder="Enter email Id"
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

        <Link to="/">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>

        <Button disabled={loading} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
