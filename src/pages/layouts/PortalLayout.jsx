import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../partials/sections/Header";
import Sidebar from "../../partials/sections/SideBar";

const PortalLayout = () => {
    return (
        <div className="wrapper-portal">
            <Sidebar />
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default PortalLayout