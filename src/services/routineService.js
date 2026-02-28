import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	Timestamp,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const routinesCollection = collection(db, "routines");

export const getUserRoutines = async (uid) => {
	if (!uid) throw new Error("User Id required");

	const q = query(
		routinesCollection,
		where("userId", "==", uid),
		orderBy("createdOn", "desc"),
	);

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => {
		const data = doc.data();

		return {
			id: doc.id,
			...data,
			startedOn: data.startedOn?.toDate(),
			createdOn: data.createdOn?.toDate(),
		};
	});
};

export async function addRoutine(userId, routineData) {
	if (!userId) throw new Error("User ID is required");

	const docData = {
		userId,
		...routineData,
		createdOn: new Date(),
	};

	const docRef = await addDoc(routinesCollection, docData);

	return { id: docRef.id, ...docData };
}

export async function updateRoutine(userId, routineId, updatedData) {
	if (!userId) throw new Error("User ID is required");
	if (!routineId) throw new Error("Routine ID is required");

	const routineRef = doc(db, "routines", routineId);

	const dataToUpdate = {
		...updatedData,
		startedOn: updatedData.startedOn
			? Timestamp.fromDate(updatedData.startedOn)
			: undefined,
	};

	try {
		await updateDoc(routineRef, dataToUpdate);
	} catch (error) {
		console.error("Failed to update routine:", error);
		throw error;
	}
}
