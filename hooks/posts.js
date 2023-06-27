import { useState } from "react";
import { doc, setDoc, query, collection, orderBy, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { db } from "../lib/firebase"
import { useToast } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useAddPost(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function addPost(post) {
        setLoading(true);
        const id = uuidv4();
        await setDoc(doc(db, "posts", id), { 
            ...post, 
            id,
            date: Date.now(),
            likes: [],
        });
        toast({title: "Your post was successfully added", status: "success", isClosable: true, position: "top", duration: 5000 });        
        setLoading(false);
    }
    return {addPost, isLoading};
}

export function usePosts(){
    const q = query(collection(db, "posts"), orderBy('date', "desc"));
    const [posts, isLoading, error] = useCollectionData(q);
    if (error) throw error;
    return { posts, isLoading };
}

export function useToggleLike ({id, isLiked, uid}) {
    const [isLoading, setLoading] = useState(false);

    async function toggleLike() {
        setLoading(true);
        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            likes: isLiked? arrayRemove(uid) : arrayUnion(uid),
        });
        setLoading(false);
    }
    return{ toggleLike, isLoading}
}