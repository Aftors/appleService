import React from "react";
import classes from "./communication.module.scss";
import Contacts from "../contacts/Contacts";
import Metro from "../metro/Metro";

const Communication = () => {
  return (
    <div className={classes.communication}>
      <div className={classes.item}>
        <Metro />
        <a href="#" className={classes.address}>
          ​Малая Морская, 4/1
        </a>
        <Contacts align={false} telegram={false} tel={"8 (981) 755-85-28"} />
      </div>
      <div className={classes.item}>
        <Metro />
        <a href="#" className={classes.address}>
          ​улица Салова, 61
        </a>
        <Contacts align={false} telegram={false} tel={"8 (999) 333-85-33"} />
      </div>
    </div>
  );
};

export default Communication;
