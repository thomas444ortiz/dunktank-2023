import React from "react";
import { useEffect } from "react";
import { LOGIN } from "../../lib/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Navbar from "../navbar/index";

export default function Layout(){
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && pathname.startsWith("/protected") && !user) {
            navigate(LOGIN)
        }
    }, [pathname, user, isLoading]);

    if(isLoading) return "Loading...";       

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}