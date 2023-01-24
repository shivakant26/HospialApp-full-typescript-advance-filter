import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dash.scss";
import { MdSpaceDashboard, MdSettings, MdOutlineChat } from "react-icons/md";
import { BsAppIndicator } from "react-icons/bs";
import { GiDoctorFace } from "react-icons/gi";
import { CgGirl } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";

const Dsidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="../dashboard/dash">
              <MdSpaceDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="../dashboard/appointment">
              <BsAppIndicator />
              Appointments
            </Link>
          </li>
          <li>
            <Link to="../dashboard/doctors">
              <GiDoctorFace />
              Doctors{" "}
            </Link>
          </li>
          <li>
            <Link to="../dashboard/Patients">
              <CgGirl />
              Patients{" "}
            </Link>
          </li>
          <li>
            <Link to="../dashboard/settings">
              <MdSettings />
              Settings
            </Link>
          </li>
          <li>
            <Link to="../dashboard/chat">
              <MdOutlineChat />
              Chat
            </Link>
          </li>
          <li>
            <Link to="../dashboard/logout">
              <RiLogoutCircleLine />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dsidebar;
