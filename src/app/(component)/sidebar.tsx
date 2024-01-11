"use client";

import React, { useContext } from "react";
import MainMenus from "./sidebarList";
import { Icon } from "@iconify/react";
import { UserContext } from "@/contextAPI/generalContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse;
  const router = useRouter()

  return (
    <div
      className={`h-screen overflow-clip hidden lg:block ${
        collapse
          ? "w-[300px] transition-all ease-in-out duration-500"
          : "w-[80px] transition-all ease-in-out duration-500"
      } border-r p-5 bg-zinc-800 font-poppins`}
    >
      <div className={`h-[40px] ${!collapse? 'w-[40px] justify-center flex items-center':'w-full'} px-[10px] flex gap-[10px] border mb-[30px] items-center  rounded-sm`}>
        <div
          className={`font-Medium text-white flex  justify-between items-center ${
            !collapse
              ? "hidden transition-all ease-in-out duration-500"
              : "flex items-center justify-center transition-all ease-in-out duration-500"
          }`}
        >
        <Image  src={'/Gitcal.svg'} width={30} height={30} alt="logo"/>
        <p className="ml-[10px]">GitComplex</p>
        </div>
        <h3
          className={`font-Medium text-white ${
            !collapse
              ? "block transition-all ease-in-out duration-500"
              : "hidden transition-all ease-in-out duration-500"
          }`}
        >
         <Image  src={'/Gitcal.svg'} width={25} height={25} alt="logo"/>
        </h3>
      </div>
      <aside className="overflow-y-auto h-full no-scrollbar">
        <ul className="flex flex-col">
          <li
            className={`flex flex-row items-center hover:bg-zinc-700 rounded-sm cursor-pointer px-[10px] transition-all ease-in-out duration-500 gap-[10px] h-[40px] text-[14px] font-Medium w-full ${
              !collapse &&
              "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"
            }`}
            onClick={()=>{
              router.push('/dashboard/dashboard')
              setCollapse(true)
            }}
          >
            <Icon icon="bxs:dashboard" className={`text-white text-[20px] `} />
            <p
              className={`text-[14px] text-white font-Regular ${
                !collapse ? "hidden" : "block"
              }`}
            >
              Dashboard
            </p>
          </li>
          <MainMenus />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
