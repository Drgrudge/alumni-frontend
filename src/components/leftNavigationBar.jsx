import React, { useState } from "react";
import {
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarDays, faCalendarPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import { Link } from "react-router-dom"; // Import Link from React Router
// import UserProfileCard from "./profileCard";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function LeftNavbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" alt="Right Arrow" />
      </div>

      <div className="flex space-x-4 items-center">
        <span className={!isExpanded ? "hidden" : "block"}>
          <Link to="/profile">My Profile</Link>
        </span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <LayoutDashboard />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
        <FontAwesomeIcon icon={faUsers} flip="horizontal" size="xl" />
        <Link to="/profileManager" className={!isExpanded ? "hidden" : "block"}>
          Alumni Profiles
        </Link>
      </div>
      
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faCalendarDays} className="fa-1x" size="xl" />
            <Link to="/events" className={!isExpanded ? "hidden" : "block"}>
              Events
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faCalendarPlus} size="xl" />
            <Link to="/manage-events" className={!isExpanded ? "hidden" : "block"}>
              Manage Events
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <HelpCircleIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/help-center">Help Center</Link>
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <HelpCircleIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/uploadAllowedUser">Upload Allowed Users</Link>
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
        <div className="group flex space-x-3 w-full p-2 rounded hover:bg-blue-900 hover:text-white hover:scale-105">
            <FontAwesomeIcon icon={faCircleInfo} size="xl" />
            <span className={!isExpanded ? "hidden" : "block"}>
              <Link to="/about">About</Link>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LeftNavbar;
