import React from "react";
import Metroimg from "@/public/spbmetro.png";
import Image from "next/image";
import classes from "./metro.module.scss";

const Metro = () => {
  return (
      <div className={classes.conteiner}>
        <a href="/" className={classes.metro}>
          <Image src={Metroimg} alt="Адмиралтейская" />
          <span>Адмиралтейская</span>
        </a>
      </div>
  );
};

export default Metro;
