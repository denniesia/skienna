import { addDoc, collection, getDoc, getDocs, orderBy, query, updateDoc, where, doc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { Timestamp } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getUserProducts = async (uid) => {
    if (!uid) throw new Error("User ID required");

    const q = query(
        productsCollection,
        where("userId", "==", uid),
        orderBy("addedOn", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => {
        const data = doc.data();

        return {
            id: doc.id,
            ...data,
            openedOnDate: data.openedOnDate?.toDate
                ? data.openedOnDate.toDate()  
                : new Date(data.openedOnDate)  
        };
    });
};


export async function getUserProductById(productId) {
    const result = await getDoc(doc(db, 'products', productId));
    const data = result.data();

    return {
        id: result.id,
        ...data,
        openedOnDate: data.openedOnDate?.toDate
            ? data.openedOnDate.toDate()
            : new Date(data.openedOnDate)
    };
    
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

export async function updateProduct(userId, productId, updatedData) {
    if (!userId) throw new Error("User ID is required");
    if (!productId) throw new Error("Product ID is required");

    const productRef = doc(db, "products", productId);

    const dataToUpdate = {
        ...updatedData,
        openedOnDate: updatedData.openedOnDate
            ? Timestamp.fromDate(updatedData.openedOnDate)
            : undefined,
        expiresInMonths: updatedData.expiresInMonths
            ? parseInt(updatedData.expiresInMonths, 10)
            : undefined,
    };

    try {
        await updateDoc(productRef, dataToUpdate);
        
    } catch (error) {
        console.error("Failed to update product:", error);
        throw error;
    }
}