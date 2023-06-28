import { useState } from "react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../lib/firebase"

export function useAddBalls(id) {
    const [isLoading, setLoading] = useState(false);

    async function addBalls() {
        setLoading(true);
        const docRef = doc(db, "users", id);
        await updateDoc(docRef, {
            balls: increment(5),
        });
        setLoading(false);
    }
    return{ addBalls, isLoading }
}