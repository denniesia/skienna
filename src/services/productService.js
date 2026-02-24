import { collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../../FirebaseConfig"
import { db } from "../../FirebaseConfig";

export const getUserProducts= async () => {
    const user = auth.currentUser;
    const q = query(
        collection(db, "products"), 
        where("userId", "==", user.uid)
    );

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

    return products;

}