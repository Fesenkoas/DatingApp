import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const PageCreate = () => {
  return (
    <>
      <div className="createAccount">
        <h1>Create an account</h1>
      </div>
      <div className="input_group">
        <div className="item">
          <input type="text" required className="input" />
          <label className="label">First Name</label>
        </div>
        <div className="item">
          <input type="text" required className="input" />
          <label className="label">Last Name</label>
        </div>
        <div className="item">
          <input type="data" required className="input" />
          <label className="label">Date of Birth</label>
        </div>
        <div className="item">
          <input type="text" required className="input" />
          <label className="label">Email*</label>
        </div>
        <div className="item">
          <input type="password" required className="input" />
          <label className="label">Password*</label>
        </div>
        <div className="item">
          <input type="password" required className="input" />
          <label className="label">Config Password*</label>
        </div>
      </div>

      <div className="natation">
        <p>
          Sensitive information are never shared and wont be put on your
          profile.
        </p>
      </div>
      <div className="text">
        <p>
          Don’t have an account? <Link to={"/"}>Sign up</Link>
        </p>
      </div>
      <button className="sing">
        <h3 className="textsing">Create account</h3>
      </button>
    </>
  );
};
