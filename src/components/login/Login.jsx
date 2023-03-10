import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./Login.module.scss";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const addHandle = () => {
    if (login == "admin" && password == "123") {
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <div className={scss.Login}>
      <div className={scss.wrapperLogin}>
        <h1>Sign in to your account, please</h1>
        <input
          type="text"
          placeholder="Email"
          required
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={addHandle}>Sign In</button>
      </div>
      {error ? <h2>Имя пользователя или пароль введены не верно</h2> : ""}
      <h3>Логин: admin</h3>
      <h4>Пароль: 123</h4>
    </div>
  );
}

export default Login;
