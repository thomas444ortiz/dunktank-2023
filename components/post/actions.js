import { Flex, IconButton } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { useToggleLike } from "../../hooks/posts";

export default function Actions({post}){
    const {id, likes} = post;
    const {user, isLoading: userLoading } = useAuth();
    const isLiked = likes.includes(user?.id);    
    const config = {id, isLiked, uid: user?.id,};
    const {toggleLike, isLoading: likeLoading} = useToggleLike(config); 

    return <Flex p="2">
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
    </Flex>;
}