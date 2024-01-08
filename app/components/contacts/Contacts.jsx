import React from "react";
import classes from "./contacts.module.scss";
import Telegram from "@/public/telegram.svg";


const Contacts = ({ tel, telegram = true, align = true}) => {
  return (
    <div className={classes.social}>
      {telegram == true ? (
        <a href="/" className={classes.telegram}>
          <Telegram />
        </a>
      ) : (
        ''
      )}
      <div className={ align == true ? `${classes.phone} ${classes.align_right}` : classes.phone }>
        <a href="tel:+79817558528">{tel}</a>
        <span>10:00 — 22:00, ежедневно</span>
      </div>
    </div>
  );
};

export default Contacts;
