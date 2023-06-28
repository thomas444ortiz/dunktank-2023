import { Flex, IconButton } from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaBaseballBall, FaTrashAlt} from "react-icons/fa";
import { GiWaterSplash } from "react-icons/gi";
import { useAuth } from "../../hooks/auth";
import { useToggleLike, useDeletePost, useAttemptDunk } from "../../hooks/posts";

export default function Actions({post}){
    const {id, likes, uid, isDunked} = post;
    const {user, isLoading: userLoading } = useAuth();
    const isLiked = likes.includes(user?.id);  
    const config = {id, isLiked, uid: user?.id,};
    const {toggleLike, isLoading: likeLoading} = useToggleLike(config); 
    const {deletePost, isLoading: deleteLoading} = useDeletePost(id);
    const {attemptDunk, isLoading: dunkLoading} = useAttemptDunk({id});

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
                    onClick={attemptDunk}
                    isLoading={dunkLoading || userLoading}
                    size="lg" 
                    colorScheme={isDunked ? "blue" : "yellow"}
                    variant="ghost" 
                    icon={isDunked ? <GiWaterSplash/> : <FaBaseballBall/>}
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