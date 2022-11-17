import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import style from '../css_modules/createAccount.module.css';

export const CreateAccount = () => {
  const navigate = useNavigate();
  //const handleClickGoogle = () => {};\
  //const handleClickApple = () => {};
  const handleClickEmail = () => {
    navigate("/register");
  };
  return (
    <>
    <div className={style.createAccount}>
      <h1>Create Account</h1>
    </div>
    <button className={style.btn_google}>
      <h3 className={style.textsing}>Sing up with Google</h3>
    </button>
    <div className={style.text}>
      <h3>or</h3>
    </div>
    <button className={style.btn_email} onClick={handleClickEmail}>
      <h3 className={style.textsing}>Sing up with Email</h3>
    </button>
    <div className={style.text}>
      Already have an account?{" "}
      <Link href={"#"} alt={""}>
        Log into account
      </Link>
    </div>
    <div className={style.natation}>
      By tapping “Create Account” or “Log In” you have agrred to our <Link href={"#"} alt={""}>TERMS &
      CONDITIONS</Link>. Click here to seeour we use your data in <Link href={"#"} alt={""}>PRIVATE POLICY</Link> .
    </div>
  </>
  )
}
