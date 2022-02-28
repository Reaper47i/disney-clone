import React from "react";
import { CgCloseR } from "react-icons/cg";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className={open ? "sidebar-box" : "sidebar-null"}>
      <div className="sidebar-content flex-col">
        <div className="close-logo">
          <button>Subscibe</button>
          <CgCloseR
            className="close"
            style={{ color: "whitesmoke", fontSize: "3em", padding: "0.38rem" }}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className="sidebar-list-contents">
          <ul>
            <li>genre</li>
            <li>movies</li>
            <li>tv shows</li>
            <li>kids</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
