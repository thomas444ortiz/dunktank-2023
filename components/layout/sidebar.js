import { Box, Button, Stack, Code, Flex } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { USERS, PROTECTED } from "../../lib/routes";
import { useAuth } from "../../hooks/auth";
import Avatar from "../profile/avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading ...";

  return (
    <Stack align="center" spacing="5">
      <Flex my="4">
        <Avatar user={user} isDunked={true} />        
      </Flex>
      <Code>@{user.username}</Code>
      <Button
        as={RouteLink}
        to={`${PROTECTED}/PROFILE/${user.id}`}
        colorScheme="Blue.300"
        w="full"
        bg="blue.800"
      >
        Edit Profile
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW={{ base: "100%", md: "400px" }}
      borderLeft="1px solid"
      borderLeftColor="teal.100"
      position="sticky"
      top="16"
      display="block"
      bg="red.100"
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="gray.500"  my="4"/>
        <Box mt="4" textAlign="center">
          <Button
            variant="outline"
            as={RouteLink}
            to={USERS}
            size={{ base: "sm", md: "md" }}
            bg="blue.800"
            color="white"
            maxW="100%"
          >
            ALL USERS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
