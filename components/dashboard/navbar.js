import { Link, Box, Text, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER, ROOT, LOGIN, DASHBOARD } from "../../lib/routes";

export default function Navbar() {
  return (
    <Box>
      {/* Header */}
      <Box bg="purple.500" py={4}>
        <Text align="center" fontSize="2xl" color="white">
          Welcome to DunkTank Social!
        </Text>
      </Box>

      {/* Navigation Bar */}
      <Flex bg="blue.200" py={4} px={8} width="100%" mx="auto" justify="flex-start">
        <Link
          as={RouterLink}
          to={ROOT}
          color="blue.500"
          fontWeight="medium"
          textDecoration="underline" // Use "textDecoration" instead of "textDecor"
          _hover={{ background: "purple.100" }}
          mr={4}
        >
          About
        </Link>
        <Link
          as={RouterLink}
          to={REGISTER}
          color="blue.500"
          fontWeight="medium"
          textDecoration="underline" // Use "textDecoration" instead of "textDecor"
          _hover={{ background: "purple.100" }}
          mr={4}
        >
          Register
        </Link>
        <Link
          as={RouterLink}
          to={LOGIN}
          color="blue.500"
          fontWeight="medium"
          textDecoration="underline" // Use "textDecoration" instead of "textDecor"
          _hover={{ background: "purple.100" }}
          mr={4}
        >
          Login
        </Link>
        <Link
          as={RouterLink}
          to={DASHBOARD}
          color="blue.500"
          fontWeight="medium"
          textDecoration="underline" // Use "textDecoration" instead of "textDecor"
          _hover={{ background: "purple.100" }}
        >
          My Homepage (must already be logged in)
        </Link>
      </Flex>
    </Box>
  );
}
