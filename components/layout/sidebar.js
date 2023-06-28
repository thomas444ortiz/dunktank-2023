import { Box, Button, Stack, Code } from "@chakra-ui/react"
import { Link as RouteLink} from "react-router-dom";
import { USERS, PROTECTED } from "../../lib/routes";
import { useAuth } from "../../hooks/auth";
import  Avatar  from "../profile/avatar";

function ActiveUser(){
    const {user, isLoading} = useAuth();

    if (isLoading) return "Loading ...";
    
    return (
        <Stack align="center" spacing="5" my="8">
            <Avatar user={user} isDunked={true}/>
            <Code>@{user.username}</Code>
            <Button 
                as={RouteLink} 
                to={`${PROTECTED}/PROFILE/${user.id}`} 
                colorScheme="Blue.300"
                w="full"
            >
                Edit Profile
            </Button>
        </Stack>
    )
}


export default function Sidebar(){
    return(
        <Box
        px="6"
        height = "100vh"
        w="100%"
        maxW="300px"
        borderLeft="1px solid"
        borderLeftColor="teal.100"
        position="sticky"
        top = "16"
        display={{base: "none", md: "block"}}
        bg="red.100"
    >
        <ActiveUser />
        <Box align="center">
            <Box as = "ul" borderBottom = "2px solid" borderColor="gray.500" />
            <Button
                variant="outline"
                colorScheme="tea;"
                as={RouteLink}
                to={USERS}
                mt="4"
                size="sm"  
            >
                ALL USERS
            </Button>
            </Box>
        </Box>
    )
}