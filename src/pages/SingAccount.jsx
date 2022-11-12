import React from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

export const SingAccount = () => {
  const navigate = useNavigate();
  //const handleClickLogin = () => {};
  const handleClickCreate = () => {
    navigate("create");
  };
  return (
    <>
      <div className="startpageup">
        <h1 className="conteiner">CYBERLINK</h1>
      </div>
      <div className="startpagedown">
        <button className="down" onClick={handleClickCreate}>
          <h3>Create Account</h3>
        </button>
        <button className="sing">
          <h3>Log into account</h3>
        </button>
        <p className="natation">
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
