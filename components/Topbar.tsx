import React from "react";
import "@radix-ui/themes/styles.css";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { Theme, Badge, Text, Avatar } from "@radix-ui/themes";

const Topbar = () => {
  return (
    <div className="flex justify-between px-6 pt-8">
      <h2>Overview</h2>
      {/* div for the alert */}
      <div>
        <IoIosNotifications className="w-8 h-8 relative " />

        <Theme className="">
          <Badge
            variant="solid"
            color="red"
            radius="full"
            size={"1"}
            className="w-4 h-4 flex items-center justify-center z-20 absolute bottom-3 left-4   "
          >
            <Text className="text-[10px]"> 0</Text>
          </Badge>
        </Theme>
      </div>
      <div className="flex gap-3 justify-center items-center border-r border-black pr-6">
        <CiGlobe />
        <Text>EN</Text>
        <IoIosArrowDown />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Theme className="relative">
          <Avatar
            radius="full"
            fallback="AS"
            className="border-2 border-black"
            size={"2"}
          />
        </Theme>
        <div className="w-3 h-3 rounded-full bg-green-500 border border-white absolute top-14 right-12"></div>

        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Topbar;
