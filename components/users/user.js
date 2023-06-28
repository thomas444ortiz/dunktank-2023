import Avatar from "../profile/avatar"
import { VStack, Code, Button, Link } from "@chakra-ui/react";
import { PROTECTED } from "../../lib/routes";
import { Link as profileLink } from "react-router-dom";

export default function User({ user }) {
    const { id, username } = user;

    return(
        <VStack
            bg="gray.100"
            shadow="sm"
            rounded="md"
            textAlign="center"
            p="4"
            spacing="3"
        >
            <Avatar user={user} isDunked={true} />
            <Code>@{username}</Code>
            <Link>
                <Button
                    as={profileLink}
                    to={`${PROTECTED}/profile/${id}`}
                    size="sm"
                    variant="link"
                    colorScheme="purple"
                >
                    View Profile
                </Button>
            </Link>
        </VStack>
    );

}