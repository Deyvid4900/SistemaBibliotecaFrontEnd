import { BsBookHalf, BsFillHouseFill, BsFillPencilFill, BsPeopleFill, BsSpeedometer2 } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";
import React from 'react';

interface SideBarProps {
 children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
 return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-1 px-sm-2 px-0 bg-dark"
          style={{ height: "calc(100vh - 56px)" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 ">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
              id="menu"
            >
              <li className="nav-item">
                <Link to={"/Home"} className="nav-link align-middle px-0">
                 <BsFillHouseFill />
                 <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Users'} className="nav-link align-middle px-0">
                 <BsPeopleFill />
                 <span className="ms-1 d-none d-sm-inline">Users</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Books'} className="nav-link align-middle px-0">
                <BsBookHalf />
                 <span className="ms-1 d-none d-sm-inline">Books</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Author'} className="nav-link align-middle px-0">
                 <BsFillPencilFill />
                 <span className="ms-1 d-none d-sm-inline">Author</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/publishers'} className="nav-link align-middle px-0">
                 <SiBookstack />
                 <span className="ms-1 d-none d-sm-inline">publishers</span>
                </Link>
              </li>
              <li>
                <a
                 href="Dashboard"
                 data-bs-toggle="collapse"
                 className="nav-link px-0 align-middle"
                >
                 <BsSpeedometer2 />
                 <span className="ms-1 d-none d-sm-inline">
                    Dashboard
                 </span>{" "}
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                 <a className="dropdown-item" href="#">
                    New project...
                 </a>
                </li>
                <li>
                 <a className="dropdown-item" href="#">
                    Settings
                 </a>
                </li>
                <li>
                 <a className="dropdown-item" href="#">
                    Profile
                 </a>
                </li>
                <li>
                 <hr className="dropdown-divider" />
                </li>
                <li>
                 <a className="dropdown-item" href="#">
                    Sign out
                 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col ">
          {children}
        </div>
      </div>
    </div>
 );
}

export default SideBar;
