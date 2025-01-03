"use client";
import Link from "next/link";
import { useState } from "react";
import { SiCoffeescript } from "react-icons/si";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="px-5 text-white bg-[#5D300E] py-3 flex-wrap relative" // Added relative for dropdown positioning
      onClick={() => setShowDropdown(false)} // Close dropdown when clicking anywhere outside
    >
      <div className="flex justify-between items-center flex-wrap ml-8">
        <div className="text-white w-[300px] flex font-bold text-2xl justify-center items-center">
          <span className="justify-center items-center text-center mr-2">
            <SiCoffeescript />
          </span>
          <h2>
            Caffeine <span className="text-[#DAB692]">Blend</span>
          </h2>
        </div>
        <ul className="flex flex-wrap gap-7 text-xl uppercase font-semibold">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"voucher"}>
            <li>Voucher</li>
          </Link>
          <div
            className="relative" // Wrap Menu and Dropdown for proper handling
            onClick={(e) => e.stopPropagation()} // Prevent closing when interacting with the dropdown
          >
            <li
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
              className="cursor-pointer"
            >
              Menu
            </li>
            {showDropdown && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
                <Link href={"/coffee"}>
                  <li className="hover:text-[#5D300E] px-4 py-2 lowercase">
                    Coffee
                  </li>
                </Link>
                <Link href={"/breakfast"}>
                  <li className="hover:text-[#5D300E] px-4 py-2 lowercase">Breakfast</li>
                </Link>
                <Link href={"/mocha"}>
                  <li className="hover:text-[#5D300E] px-4 py-2 lowercase">Mocha</li>
                </Link>
              </ul>
            )}
          </div>
          <Link href={"about"}>
            <li>About Us</li>
          </Link>
        </ul>
        <div className="space-x-2 text-xl flex flex-wrap text-white px-5 rounded-xl p-3 gap-2">
          <Link href={"contact"}>
            <button>Contact</button>
          </Link>
          <Link href={"signup"}>
            <button>SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
