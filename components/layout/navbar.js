import React from "react";
import { Flex, Link, Button, Box } from "@chakra-ui/react";
import { DASHBOARD } from "../../lib/routes";
import { Link as RouterLink} from "react-router-dom";
import {useLogout} from "../../hooks/auth"

export default function Navbar() {
    const {logout, isLoading} = useLogout();
    return (
        <Flex 
        shadow='sm' 
        pos = "fixed" 
        width = "full" 
        height = "16" 
        zIndex = "3" 
        justify = "center"
        bg = "blue.300"
    >
        <Flex px="4" w="full" align="center" maxW = "1200px">
        <Box
            display="inline-block"
            p="2"
            borderRadius="md"
            border="2px solid white"
            bg="blue.800"
        >
            <Link color="rgba(255, 255, 255, 1)" as={RouterLink} to={DASHBOARD} fontWeight="bold" fontSize="l">
                My Dashboard
            </Link>
        </Box>
            <Button 
            ml="auto"
            size="md"
            onClick={logout}
            isLoading={isLoading}
            bg="blue.800"
            color="white"
            border="2px solid white"
            fontWeight="bold"
        >
                Logout
            </Button>  
        </Flex>
        </Flex>
    );
}