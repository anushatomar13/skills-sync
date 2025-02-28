// hooks/useUser.ts
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const useUser = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                setUserName(userSnap.data().name);
            } else {
                setUserName("Anonymous");
            }
        } else {
            setUserName(null);
        }
        setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
}, []);


  return { userName, loading };
};
