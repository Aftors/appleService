"use client";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { React, useState, Fragment } from "react";
import Image from "next/image";
import classes from "./price.module.scss";
import iPhone from "@/public/apple-iphone-15.jpg";
import Info from '../info/Info'
import SendOrder from '../order/SendOrder'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function sortByID(data){
  return data.sort((a, b) => b.id > a.id ? 1 : -1);
}

function handleClick(e, setDevice, setData, setSelected, setService, iphoneData, macbookData, ipadData) {
  const id = e.target.id.toLowerCase()
  setDevice(e.target.id)
  switch(id) {
    case 'iphone': 
    setData(iphoneData)
    setSelected(iphoneData[0])
    break
    case 'macbook': 
    setData(macbookData)
    setSelected(macbookData[0])
    break
    case 'ipad': 
    setData(ipadData)
    setSelected(ipadData[0])
    break
}}

function activeService(e, selected, setService){
  const service = selected.price.find((el)=> el.id == e.currentTarget.id)
  setService(service)
}


const Price = ({ iphoneData, macbookData, ipadData }) => {


  const [selectData, setData] = useState(iphoneData)
  const [selected, setSelected] = useState(sortByID(selectData)[0]);
  const [deviceSelected, setDevice] = useState('iPhone')
  const [selectedService, setService] = useState(selected.price[0])

  const priceLength =  Math.ceil(selected.price.length / 2)

  const menu = [
    'iPhone',
    'Macbook',
    'iPad',
    'iMac',
    'Watch',
    'AirPods'
  ]
  return (
    <div className={classes.price}>
      <h2>Цены и сроки</h2>
      <div className={classes.conteiner}>
        <div className={classes.tabsBody}>
          <ul className={classes.tabs}>
            {menu.map(el => {
            return  <li 
            key={el}
            id={el} 
            className={deviceSelected == el ? classes.active: ''}
            onClick={(e) => handleClick(e, setDevice, setData, setSelected, setService, iphoneData, macbookData, ipadData)
          }>{el}</li>
            })}
          </ul>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-6 w-72">
                  <Listbox.Button className="relative w-full cursor-default hover:bg-zinc-100 rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.model}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute flex-coll z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {sortByID(selectData).map((device) => (
                        <Listbox.Option
                          key={device.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-zinc-400 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={device}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {device.model}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-gray-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
                <Listbox.Label className="block text-sm mt-6 font-bold text-xl leading-6 text-gray-900">
                  Стоимость негарантийного ремонта iPhone
                </Listbox.Label>
              </>
            )}
          </Listbox>
          <div className={classes.table}>
            <ul className={classes.leftColl}>
              {selected.price.map((price, index) => {
                if (index <= priceLength - 1) {
                  return (
                    <li
                      key={price.id}
                      id={price.id}
                      className={selectedService.id == price.id ? `${classes.cell} ${classes.cellSelected}`: classes.cell }
                      onClick={(e) => activeService(e, selected, setService)}
                    >
                      <span className={classes.cellName}>
                        {price.title}
                      </span>
                      <span className={classes.cellPrice}>
                        {price.value + " ₽"}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
            <ul className={classes.rightColl}>
              {selected.price.map((price, index) => {
                if (index > priceLength - 1) {
                  return (
                    <li
                      key={price.id}
                      id={price.id}
                      className={selectedService.id == price.id ? `${classes.cell} ${classes.cellSelected}`: classes.cell }
                      onClick={(e) => activeService(e, selected, setService)}
                    >
                      <span className={classes.cellName}>
                        {price.title}
                      </span>
                      <span className={classes.cellPrice}>
                        {price.value + " ₽"}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <span className={classes.ps}>
            Указана стандартная стоимость услуги, не предусматривающая
            комплексные случаи по замене.
          </span>
          <div className={classes.moreDetails}>
            <div className={classes.into}>
              <p>{selected.model}</p>
              <Image src={iPhone} alt="iphone15" priority={true} />
              <span>A1865, A1901, A1902</span>
            </div>
            <div className={classes.bodyInto}>
              <h3>{selectedService.title}</h3>
              <div className={classes.body}>
                <span className={classes.damage}>
                  {selectedService.damage}
                </span>
                <span className={classes.damageWorks}>
                 {selectedService.damageWorks}
                </span>
                <span className={classes.worksTime}>Время работы:{selectedService.worksTime}</span>
                <span className={classes.worksGuard}>Гарантия: {selectedService.worksGuard} дней</span>
              </div>
            </div>
            <div className={classes.payed}>
              <span>{selectedService.value + ' ₽'}</span>
            </div>
          </div>
          <SendOrder selected={selected} />
        </div>
        <Info/>
      </div>
    </div>
  );
};

export default Price;
