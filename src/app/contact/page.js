"use client";

import React from "react";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import axios from "axios";
import { Button, Card, Col, Grid, Loading, Row, Text } from "@nextui-org/react";
import { NextUIProvider, Table, styled, Modal } from "@nextui-org/react";

const App = () => {
  const [loading, setloading] = useState(false);
  const [name, setname] = useState(false);
  const [phone, setphone] = useState(false);
  const [email, setemail] = useState(false);
  const [address, setaddress] = useState(false);
  useEffect(() => {
    setloading(false);
  }, []);
  const submit = (e) => {
    e.preventDefault();
    setloading(true);
    if (name === "" || phone === "" || email === "" || address === "") {
      toast.error("Please enter required fields");
    }
    setloading(false);
  };
  return (
    <div>
      <Header activePage="Add Contact" />
      <Toaster />
      <h1 className="text-center text-lg m-2">Contact Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col md:self-center items-center justify-center px-3 w-full   lg:py-0"
      >
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
          required
        />
        <br />
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Phone Number"
          type="number"
          onChange={(e) => setphone(e.target.value)}
          required
        />
        <br />
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Email"
          type="email"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <br />
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Address"
          onChange={(e) => setaddress(e.target.value)}
          required
        />
        <br />
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Longitude"
          type="number"
          disabled
          value={"1.828288282"}
          required
        />
        <br />
        <input
          className="formInput md:w-[45%] focus:border-[dodgerblue] m-1 h-[45px]  p-2 outline-none  bg-[transparent] border-gray-500 border-[2.5px] rounded-[5px] w-[90%]"
          placeholder="Latitude"
          type="number"
          disabled
          value={"3.828288282"}
          required
        />
        <br />
        <button
          type="submit"
          onClick={loading ? null : submit}
          className={`h-[40px] text-[#fff] w-[90%] rounded-[5px] md:w-[45%]   ${
            loading ? "bg-red-500 opacity-70" : "bg-red-600"
          }`}
        >
          {loading ? "Loading.." : "Submit"}{" "}
        </button>
      </form>
    </div>
  );
};

export default App;
