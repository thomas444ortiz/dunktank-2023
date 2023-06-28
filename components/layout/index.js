import React from "react";
import { useEffect } from "react";
import { LOGIN } from "../../lib/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import  { Box, Flex } from "@chakra-ui/react";

export default function Layout(){
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && pathname.startsWith("/protected") && !user) {
            navigate(LOGIN)
        }
    }, [pathname, user, isLoading, navigate]);

    if(isLoading) return "Loading...";       

    return(
        <>
            <Navbar />
            <Flex pt="16" pd="12" mx = "auto" w="full" maxW = "2000px">
                <Box w="1200px">
                    <Outlet />       
                </Box>           
                <Sidebar />
            </Flex>

        </>
    );
}