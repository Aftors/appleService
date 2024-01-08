import React from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Telegram from "@/public/telegram.svg";
import Contacts from "../contacts/Contacts";
import Metro from "../metro/Metro";

const Header = () => {
  return (
    <div className={classes.conteiner}>
      <div className={classes.logo}>
        <h1>
          Apple<span>Service</span>
        </h1>
      </div>
      <div className={classes.address}>
        <Metro />
        <div className={classes.address_child}>
          <p>
            ​Малая Морская, 4/1
            <a href="#">8 (981) 755-85-28</a>
          </p>
        </div>
      </div>
      <div className={classes.address}>
        <Metro />
        <div className={classes.address_child}>
          <p>
            ​улица Салова, 61
            <a href="#">8 (981) 755-85-28</a>
          </p>
        </div>
      </div>
      <Contacts tel={"8 (981) 755-85-28"} />
    </div>
  );
};

export default Header;
