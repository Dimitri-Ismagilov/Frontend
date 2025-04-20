import React from "react";
import { Navigate } from "react-router-dom";
import { AdminRoute, ProtectedRoute } from "./ProtectedRoutes";

import PortalLayout from "../pages/layouts/PortalLayout";
import CenterScreenLayout from "../pages/layouts/CenterScreenLayout";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Projects from "../pages/protected/admin/Projects";
import Members from "../pages/protected/admin/Members";
import Clients from "../pages/protected/admin/Clients";


const routesConfig = [
    {
        element: <CenterScreenLayout />,
        children: [
            { path: "/auth/signin", element: <SignIn />},
            { path: "/auth/signup", element: <SignUp /> }
        ]
    },
    {
        element: (
            <ProtectedRoute>
                <PortalLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "/admin/projects", element: <Projects /> },
            { path: "/admin/members", element: <AdminRoute><Members /></AdminRoute> },
            { path: "/admin/clients", element: <AdminRoute><Clients /></AdminRoute> },
            { path: "*", element: <Navigate to="/admin/projects" replace /> }
        ]
    },
]
export default routesConfig;