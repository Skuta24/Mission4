import React, {useState} from "react";
import "./Register.css";

function Register() {
  function test() {
    console.log("nice");
  }

  return (
    <div className="registration">
      <h1>Registration</h1>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <div className="button">
        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;
