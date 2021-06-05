import React, {useState} from "react";
import "./Register.css";
import Axios from "axios";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
      </div>
      <div className="button">
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;
