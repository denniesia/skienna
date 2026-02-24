import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth } from "../../FirebaseConfig"
import { db } from "../../FirebaseConfig";

export const getUserProducts = async (uid) => {
    if (!uid) throw new Error("User ID required");

    const q = query(
        collection(db, "products"),
        where("userId", "==", uid),
        orderBy("addedOn", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};