import classes from "./Login.module.css";
import { useState } from "react";

const Login = (props) => {
  let [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const forgotPassword = () => {
    alert("Forgot Password!");
  };
  const handleLogin = () => {
    props.history.push("/");
  };

  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <div className={classes.title}>Login</div>
        <form className={classes.inputWrapper}>
          <input className={classes.input} placeholder={"Username"} />
          <input className={classes.input} placeholder={"Password"} />
          <a onClick={forgotPassword} className={classes.forgotPassword}>
            Forgot Password?
          </a>
        </form>
        <div onClick={handleLogin} className={classes.loginBtn}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
