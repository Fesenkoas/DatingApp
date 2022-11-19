import React from "react";
import { useNavigate, Link } from "react-router-dom";
import style from '../css_modules/singAccount.module.css';

export const SingAccount = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/profile");
  };
  const handleClickCreate = () => {
    navigate("/create");
  };
  return (
    <>
      <div className={style.start_page_up}>
        <h1 className={style.logo}>CYBERLINK</h1>
      </div>
      <div className={style.start_page_down}>
        <button className={style.btn_create_acc} onClick={handleClickCreate}>
          <h3>Create Account</h3>
        </button>
        <button onClick={handleClickLogin} className={style.btn_login}>
          <h3>Login to account</h3>
        </button>
        <p className={style.natation}>
          By tapping “Create Account” or “Log In” you have agrred to our{" "}
          <Link href={"#"} alt={""}>
            TERMS & CONDITIONS
          </Link>
          . Click here to seeour we use your data in{" "}
          <Link href={"#"} alt={""}>
            PRIVATE POLICY
          </Link>{" "}
          .
        </p>
      </div>
    </>
  );
};
