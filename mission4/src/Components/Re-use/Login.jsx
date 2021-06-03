import React, {useState} from "react";
import "./Login.css";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");

  return (
    <div className="Login">
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <div className="button">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
