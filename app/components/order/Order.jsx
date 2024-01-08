"use client";

import React, { useEffect } from "react";
import classes from ".//order.module.scss";
import { Switch } from "@headlessui/react";

const Order =  () => {

  return (
    <div className={classes.conteiner}>
      <h2>Заявка на ремонт</h2>
      <div className={classes.body}>
        <div className={classes.form}>
          <input
            placeholder="Ваше имя"
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            placeholder="Номер телефона"
            type="phone"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            placeholder="Устройство"
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className={classes.textarea}>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
      <div className={classes.switch}>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={true}
              className="bg-indigo-600 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset
                 ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 
                 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className="
                    h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out
                 "
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            Я согласен с{" "}
            <a href="#" className="font-semibold text-indigo-600">
              политикой обработки персональных данных
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </div>
      <button
          type="submit"
          className="m-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Отправить заявку
        </button>
    </div>
  );
};

export default Order;
