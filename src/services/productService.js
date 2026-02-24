import { addDoc, collection, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const productsCollection = collection(db, "products");

export const getUserProducts = async (uid) => {
    if (!uid) throw new Error("User ID required");

    const q = query(
        productsCollection,
        where("userId", "==", uid),
        orderBy("addedOn", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export async function getUserProductById(productId) {
    const result = await getDoc(doc(db, 'products', productId));

    return { id: result.id, ...result.data() }
    
}

export async function addProduct(userId, productData) {
    if (!userId) throw new Error("User ID is required");

    const docData = {
        userId,
        ...productData,
        addedOn: new Date(),
    }

    const docRef = await addDoc(productsCollection, docData);

    return { id: docRef.id, ...docData};
}