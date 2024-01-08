import React from "react";
import classes from "./sendorder.module.scss";
import InputMask from "react-input-mask";
import { useState } from "react";
import Communication from "../communication/Communication";

const SendOrder = ({ selected }) => {
  const [correctData, setData] = useState(false);
  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const inputChange = (e, setValueName, valuePhone, setData) => {
    setValueName(e.target.value);
    if (e.target.value.length > 1 && valuePhone.length == 18) {
      setData(true);
    } else setData(false);
  };

  const phoneChange = (e, setValuePhone, valueName, setData) => {
    setValuePhone(e.target.value);
    if (e.target.value.length == 18 && valueName.length > 1) {
      setData(true);
    } else setData(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.order_block}>
      <div className={classes.order}>
        <span>{selected.model}</span>
        <p>Оставить заявку на ремонт</p>
        <form action="">
          <div>
            <InputMask
              type="text"
              maxLength="18"
              placeholder="Ваше имя"
              value={valueName}
              onChange={(e) =>
                inputChange(e, setValueName, valuePhone, setData)
              }
            />
            <InputMask
              mask="+7\ (999) 999 99 99"
              maskChar={null}
              type="tel"
              placeholder="Номер телефона"
              value={valuePhone}
              onChange={(e) =>
                phoneChange(e, setValuePhone, valueName, setData)
              }
            />
          </div>
          <button
            onClick={handleClick}
            disabled={correctData ? false : true}
            className={!correctData ? classes.locked : ""}
          >
            Отправить заявку
          </button>
          <p className={classes.police}>
            Оставляя заявку, я согласен с{" "}
            <span>политикой обработки персональных данных</span>
          </p>
        </form>
      </div>
      <Communication/>
    </div>
  );
};

export default SendOrder;
