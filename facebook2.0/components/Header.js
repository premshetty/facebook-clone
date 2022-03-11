import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
function Header() {
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white p-2  lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          alt="fblogo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 rounded-full items-cente bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className=" ml-2 hidden md:inline-flex items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="facebook Search.."
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active="active" Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div>
        <p className="font-semibold whitespace-nowrap pr-3"> Prem Kumar </p>
      </div>
    </div>
  );
}

export default Header;
