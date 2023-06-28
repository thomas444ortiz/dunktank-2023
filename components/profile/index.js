import { Divider, Flex, HStack, Stack, Text, Button, useDisclosure, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PostsLists from "../post/PostsLists";
import { usePosts } from "../../hooks/posts";
import { useUser } from "../../hooks/users";
import Avatar from "../profile/avatar"
import { format } from "date-fns";
import EditProfile from "./editprofile";
import { useAuth } from "../../hooks/auth";
import { useAddBalls } from "../../hooks/balls";

export default function Profile(){
    const {id} = useParams();
    const {posts, isLoading: postsLoading} = usePosts(id);
    const {user, isLoading: userLoading} = useUser(id);
    const {user: authUser, isLoading: authLoading } = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {addBalls, isLoading: ballsLoading} = useAddBalls(id);

    if (userLoading) return "Loading...";

    return(
        <Stack spacing="5">
            <Flex p={["4", "6"]} pos="relative" align="center">
                <Avatar size="2xl" user={user} isDunked={true}/>

                {!authLoading && (authUser.id === user.id) && (<Button pos="absolute" mb="2" top="6" right="6" colorScheme="blue" onClick={onOpen}>
                    Change Avatar
                </Button>)}

                <Stack ml="8">
                    <Text fontSize="2xl" bg="lightblue" borderRadius="md" display="inline-block" px="2" fontWeight="bold">
                        @{user.username}
                    </Text>
                    <HStack spacing = "10">
                        <Text fontSize={["sm", "lg"]}>
                            Exposed Posts: {posts.length}
                        </Text>                  
                    </HStack>
                    <HStack spacing = "10">
                        <Text fontSize={["sm", "lg"]}>
                            Joined: {format(user.date, "MMMM yyyy")}
                        </Text>                      
                    </HStack>
                    <Box border="2px" borderColor="gray.500" bg="gray.100" p="2" rounded="md">
                        <Text fontSize="lg" mb="1">
                            Number of balls available: {user.balls}
                        </Text>
                        {!authLoading && authUser.id === user.id && (
                            <Button
                            bg="blue.800"
                            color="white"
                            onClick={addBalls}
                            isLoading={ballsLoading}
                            mt="1"
                            >
                            Get more balls (5 per click)
                            </Button>)}
                    </Box>
                </Stack>
                <EditProfile isOpen={isOpen} onClose={onClose} />
            </Flex>
            <Divider mx="auto" w="99%" borderColor="gray.600" ml="1%"/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="lightblue"
                color="black"
                fontWeight="bold"
                p={4}
                borderRadius="md"
                border="1px solid gray"
                width="90%"
                maxH="20px"
                marginX="auto"
            >
                <Text>Posts that have been dunked are below:</Text>
            </Box>
            {postsLoading ? (
                <Text>Posts are loading...</Text>
            ) : (
                <PostsLists  posts={posts}/>                
            )}
        </Stack>
    );
}