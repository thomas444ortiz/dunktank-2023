import { Avatar as ChakraAvatar } from "@chakra-ui/react"
import { Link as RouterLink} from "react-router-dom";
import { PROTECTED } from "../../lib/routes";

export default function Avatar({ user, size = "xl", isDunked, overrideAvatar = null }) {
    if (!user) return "Loading...";
  
    return (
      <ChakraAvatar
        as={isDunked && RouterLink}
        to={isDunked && `${PROTECTED}/profile/${user?.id}`}
        name={user.username}
        size={size}
        src={overrideAvatar || (isDunked ? user.avatar : "https://media.istockphoto.com/id/962366210/photo/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security.jpg?s=612x612&w=0&k=20&c=-BJLwYAzjTsXh5Zj_Qn-5HQ-MRYA2fr_SdXv7oqqSZk=")}
        _hover={{ cursor: "pointer", opacity: "0.8" }}
      />
    );
  }