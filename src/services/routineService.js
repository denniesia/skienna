import { addDoc, collection, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const routinesCollection = collection(db, "routines");

export const getUserRoutines = async (uid) => {
    if (!uid) throw new Error("User Id required");

    const q = query(
        routinesCollection,
        where("userId", "==", uid),
        orderBy("createdOn", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

}