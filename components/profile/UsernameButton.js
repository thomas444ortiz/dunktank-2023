import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { PROTECTED } from "../../lib/routes";


export default function UsernameButton({user, isDunked}){
    
    return (
        <Button as={isDunked && Link} to={isDunked && `${PROTECTED}/profile/${user.id}`} colorScheme="teal" variant="link">
          {isDunked ? user.username : "Anonymous"}
        </Button>
      );
}