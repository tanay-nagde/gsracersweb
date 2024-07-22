import React from "react";
import { useState } from "react";
import LOGO from "../assets/logo-1.png";
import { AnimatePresence, motion } from "framer-motion";

const Hamburgercomponent = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -30, opacity: 0 }}
      transition={{ delay: 0, duration: 0.5 }}
      exit={{ y: -100, opacity: 0 }}
      className="h-full   w-full"
    >
      <ul className="grid justify-items-center grid-cols-1 racing-sans-one-regular text-2xl gap-1 border-6">
        <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
          About us
        </li>
        <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
          Home
        </li>
        <li className="px-4 menu-item  w-40  text-center hover:text-blue-600  text-blue-300 duration-300">
          our team
        </li>
        <li className="px-4 menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
          Sponsorship
        </li>
        <li className="px-4menu-item  w-40 text-center hover:text-blue-600  text-blue-300 duration-300">
          Contact
        </li>
      </ul>
    </motion.div>
  );
};

function Navbar() {
  const [hamburger, sethamburger] = useState(false);
  // handleclick = () => {
  //     sethamburger(!hamburger)
  //     {hamburger ? hamburgercomponent() : null}
  // }

  return (
    <div
      className=" "
    >
      {/* --------------------------------------------------nav bar------------------------------------- */}
      <div className="nav-bar h-36  w-full  px-1/6 ">
        <div className=" out-container w-11/12 mx-auto flex justify-between items-center h-full">
          <div className="logo-container max-h-28   max-w-28  p-1">
            <img src={LOGO} alt="LOGO" className="bg-" />
          </div>
          <div className="lg:hidden">
            <button className=""
              onClick={() => {
                sethamburger(!hamburger);
              }}
            >
              <svg  width="40px" height="40px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hamburger</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-212.000000, -888.000000)" fill="#275AFE"> <path d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z" id="hamburger" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
            </button>
          </div>

          <div className="menu-container  lg:inline hidden rounded-3xl px-2  backdrop-blur-3xl  ">
            <ul className=" flex  flex-1 justify-between text-2xl  capitalize   racing-sans-one-regular p-1 px-3">
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300   duration-300">
                About us
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                Home
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                our team
              </li>
              <li className="px-4 menu-item hover:text-blue-600  text-blue-300 duration-300">
                Sponsorship
              </li>
              <li className="px-4menu-item hover:text-blue-600  text-blue-300 duration-300">
                Contact
              </li>
            </ul>
          </div>

          {/* hamburger drop  */}
        </div>
      </div>
      {/* navbar end  */}

      {hamburger ? <Hamburgercomponent /> : null}
    </div>
  );
}

export default Navbar;
