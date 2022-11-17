import React from 'react'
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const navigate = useNavigate();
  //const handleClickGoogle = () => {};\
  //const handleClickApple = () => {};
  const handleClickEmail = () => {
    navigate("/register");
  };
  return (
    <>
    <div className="createAccount">
      <h1>Create Account</h1>
    </div>
    <button className="sing">
      <h3 className="textsing">Sing up with Google</h3>
    </button>
    <button className="sing">
      <h3 className="textsing">Sing up with Apple</h3>
    </button>
    <div className="text">
      <h3>or</h3>
    </div>
    <button className="sing" onClick={handleClickEmail}>
      <h3 className="textsing">Sing up with Email</h3>
    </button>
    <div className="text">
      Already have an account?{" "}
      <Link href={"#"} alt={""}>
        Log into account
      </Link>
    </div>
    <div className="natation">
      By tapping “Create Account” or “Log In” you have agrred to our <Link href={"#"} alt={""}>TERMS &
      CONDITIONS</Link>. Click here to seeour we use your data in <Link href={"#"} alt={""}>PRIVATE POLICY</Link> .
    </div>
  </>
  )
}
