"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = ({ f_name, activePage }) => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  // const [activePage, setActivePage] = useState("Dashboard");
  return (
    <main className="bg-[#fff] flex-1">
      <header className="header flex flex-row w-full columns-1 bg-black justify-start mb-2 h-[80px]">
        <Link className="items-center justify-center flex" href={"/home"}>
          <Image
            onClick={() => {
              window.location.href = "/home";
            }}
            // style={{}}
            src={"/ims.png"}
            width={90}
            className="resize m-2 ml-4"
            height={15}
          />
        </Link>
        <div
          onClick={() => setToggleMenu(true)}
          className="fill-white h-[45px] mt-4 items-center justify-center rounded-full mr-2 m-2 bg-white p-2 ml-auto "
        >
          <Image
            src={"/menu-2-line.svg"}
            color="white"
            width={30}
            height={30}
          />
        </div>
        {ToggleMenu && (
          <div className="flex absolute bg-white z-10">
            <ul
              className="z-10 fixed -top-120 -right-2 p-3 w-[65vw] h-full bg-slate-50 shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-slate-700 animate-slide-in"
            >
              <li
                onClick={() => setToggleMenu(false)}
                className="text-xl w-full my-2"
              >
                x
              </li>
              {["Dashboard", "Add Contact"].map((item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  activePage={activePage}
                  classprops="my-1 text-lg"
                />
              ))}{" "}
            </ul>
          </div>
        )}
        <div className="flex absolute bg-white z-10">
          <ul
            className="z-10 fixed -top-120 -right-2 p-3 w-[15vw] h-full bg-slate-50 md:block sm:hidden shadow-2xl list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-slate-700 animate-slide-in"
          >
            <br />
            {["Dashboard", "Add Contact"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                activePage={activePage}
                classprops="my-1 text-lg"
              />
            ))}{" "}
          </ul>
        </div>
      </header>
    </main>
  );
};
const NavBarItem = ({ title, classprops, activePage }) => {
  // const [activePage, setActivePage] = useState("Dashboard");
  return (
    <Link
      href={`/${`${title == "Dashboard" ? "" : "contact"}`.toLowerCase()}`}
      className={`mx-4 ${
        activePage == title ? "bg-[dodgerblue]" : "bg-gray-600"
      } text-white w-[90%] hover:bg-[dodgerblue] rounded-md p-2 cursor-pointer ${classprops}`}
    >
      {" "}
      <li
      // className={`mx-4 ${
      //   activePage == title ? "bg-[dodgerblue]" : "bg-gray-400"
      // } text-white w-[90%] rounded-md p-2 cursor-pointer ${classprops}`}
      >
        {title}
      </li>
    </Link>
  );
};
export default page;
