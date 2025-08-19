import Image from "next/image";
import React from "react";
import logoDidacti from "@/assets/didacti-logo.svg";
import logoLazox from "@/assets/logo-lazox.svg";
import { LucidePlus } from "lucide-react";

const HeaderCrayola = () => {
  return (
    <header className="p-3 flex justify-center items-center sticky top-0 z-30 bg-white shadow-xl">
      <Image src={logoDidacti} alt="logo didacti" className="w-[100px] mr-5" />

      <LucidePlus size={30} color="green" />

      <Image src={logoLazox} alt="logo didacti" className="w-[130px]" />
    </header>
  );
};

export default HeaderCrayola;
