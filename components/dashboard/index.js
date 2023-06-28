import { Box, Heading, HStack, Button, Textarea } from "@chakra-ui/react";
import  TextareaAutosize  from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useAddPost } from "../../hooks/posts";
import  { useAuth }  from "../../hooks/auth";
import  PostLists  from "../post/PostsLists";
import { usePosts } from "../../hooks/posts";

function NewPost(){
    const { register, handleSubmit, reset } = useForm();
    const {addPost, isLoading: addingPost} = useAddPost();
    const {user, isLoading: authLoading} = useAuth();

    function handleAddPost (data){
        addPost({
            uid: user.id,
            text: data.text,
        })
        reset();
    }

    return(
            <Box maxW="95%" mx="auto" py="10">
                <form onSubmit = {handleSubmit(handleAddPost)}>
                    <HStack justify="space-between">
                        <Heading size="lg">New Post</Heading>
                        <Button colorScheme="red" type="submit" isLoading={authLoading || addingPost} loadingText="Loading" >
                            Post
                        </Button>
                    </HStack>
                    <Textarea 
                        as={TextareaAutosize} 
                        resize="none" mt="5" 
                        placeholder="Create a new post..."
                        minRows={3}
                        {...register("text", {required: true})}
                    />
                </form>
            </Box>
    );
}

export default function Dashboard(){
    const { posts, isLoading } = usePosts();

    if (isLoading) return "Loading posts...";

    return (
        <>
            <NewPost />
            <PostLists posts={posts}/>
        </>
    )
}