import React from "react";
import { useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/login");
  };

  return (
    <div className={scss.Header}>
      <div className={scss.wrapperHeader}>
        <button className={scss.bridge}>Bridge</button>
        <button onClick={signOut} className={scss.signOut}>
          SignOut
        </button>
      </div>
    </div>
  );
}

export default Header;
