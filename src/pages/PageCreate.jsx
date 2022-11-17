import React from "react";
import { Link } from "react-router-dom";
import style from '../css_modules/pageCreate.module.css'

export const PageCreate = () => {
  return (
    <>
      <div className={style.createAccount}>
        <h1>Create an account</h1>
      </div>
      <div className={style.input_group}>
        <div className={style.item}>
          <input type="text" required className={style.input} />
          <label className={style.label}>First Name*</label>
        </div>
        <div className={style.item}>
          <input type="text" required className={style.input} />
          <label className={style.label}>Last Name*</label>
        </div>
        <div className={style.item}>
          <div className={style.item_date}>
            <input type="date" className={style.input_date} />
            <label className={style.label}>Date of Birth</label>
            <div className={style.item}>
              <input type="text" className={style.input_age} />
              <label className={style.label}>Age</label>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <input type="text" required className={style.input} />
          <label className={style.label}>Email*</label>
        </div>
        <div className={style.item}>
          <input type="password" required className={style.input} />
          <label className={style.label}>Password*</label>
        </div>
        <div className={style.item}>
          <input type="password" required className={style.input} />
          <label className={style.label}>Config Password*</label>
        </div>
      </div>

      <div className={style.natation}>
        <p>
          Sensitive information are never shared and wont be put on your
          profile.
        </p>
      </div>
      <div className={style.text}>
        <p>
          Don’t have an account? <Link to={"/"}>Sign up</Link>
        </p>
      </div>
      <button className={style.btn_create_next}>
        <h3 className={style.textsing}>Create account</h3>
      </button>
    </>
  );
};
