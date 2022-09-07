import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SidebarSample.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import {
  faBars,
  faCompass,
  faUsers,
  faMessage,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import TopBar from "../TopBar/TopBar";
import { useLocation, Outlet, Link } from "react-router-dom";
import RoutePaths from "../../../util/routes";


const menuItems = [
  { title: "Dashboard", icon: faCompass, link: "" },
  { title: "createinquiry", icon: faClipboardList , link: RoutePaths.CreateInquiry},
  { title: "inquirytable", icon: faClipboardList , link: RoutePaths.InquiryTable},
  { title: "quatation", icon: faClipboardList , link: RoutePaths.Quatation},
  { title: "confirminquiry", icon: faClipboardList , link: RoutePaths.ConfirmInquiry},
  { title: "Inquiries", icon:  faMessage, link: RoutePaths.InquiryTable},
  { title: "clienttable", icon: faUsers, link: RoutePaths.ClientTable },
  
];

const DashBoard = () => {

    const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="side-bar-container">
            <div className="first-container-side-bar">
                <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <TopBar/>
            </div>
            {/*Main Body Grid*/}
            <div style={{display:"grid", columnGap:"5px"}} className={"flex"}>
                {/*---- Side bar*/}
                <div style={{marginLeft:0, margin:0, gridColumn:"1"}} className={cx(" sidebar", {"sidebar-closed": !isOpen})}>

                    <ul>
                        {menuItems.map(item => (
                            <li key={item.title}>
                                <div className={"sidebar__listItem"}>
                                    <Link to={`${item.link}`} className={"sidebar_links"}><FontAwesomeIcon
                                        className={"sidebar__icon"} icon={item.icon}/>
                                        <CSSTransition
                                            in={isOpen}
                                            timeout={200}
                                            classNames={"fade"}
                                            unmountOnExit
                                        >
                                            <span className="sidebar_titles">{item.title}</span>
                                        </CSSTransition>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
                {/*Content*/}
                <div style={{gridColumn:'2/span 4'}}><Outlet/></div>
            </div>

        </div>

    );
};

export default DashBoard;
