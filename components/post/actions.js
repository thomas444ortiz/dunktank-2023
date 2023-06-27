import { Flex, IconButton } from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaBaseballBall, FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { useToggleLike, useDeletePost } from "../../hooks/posts";

export default function Actions({post}){
    const {id, likes, uid} = post;
    const {user, isLoading: userLoading } = useAuth();
    const isLiked = likes.includes(user?.id);    
    const config = {id, isLiked, uid: user?.id,};
    const {toggleLike, isLoading: likeLoading} = useToggleLike(config); 
    const {deletePost, isLoading: deleteLoading} = useDeletePost(id);

    return (
        <Flex p="2">
            <Flex alignItems="center">
                <IconButton 
                    onClick={toggleLike}
                    isLoading={likeLoading || userLoading}
                    size="md" 
                    colorScheme="red" 
                    variant="ghost" 
                    icon={isLiked ? <FaHeart/> : <FaRegHeart/>}
                    isRound
                />
                {likes.length}
            </Flex>
                <IconButton 
                    size="md" 
                    colorScheme="yellow" 
                    variant="ghost" 
                    icon={<FaBaseballBall/>}
                    isRound
                />
                
                
                {!userLoading && user.id === uid && (
                <IconButton 
                    onClick={deletePost}
                    isLoading={deleteLoading}
                    ml="auto"
                    size="md" 
                    colorScheme="red" 
                    variant="ghost" 
                    icon={<FaTrashAlt/>}
                    isRound
                />)}
        </Flex>
    );
}