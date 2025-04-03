import "./UpdatePassword.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
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
  }, [dispatch, error, alert, message]);

  return (
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={submitHandler}>
        <span className="button" data-text="Socially">
          <span className="actual-text">&nbsp;Socially&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Socially&nbsp;
          </span>
        </span>

        <div className="form-control" id="okok">
          <input
            className="input input-alt "
            placeholder="Old password"
            required
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <span className="input-border input-border-alt"></span>
        </div>

        <div className="form-control" id="new">
          <input
            className="input input-alt "
            placeholder="New password"
            required
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span className="input-border input-border-alt"></span>
        </div>

        <Button disabled={loading} type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default UpdatePassword;
