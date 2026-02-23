import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

export async function login(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);

    return result.user;
}

export async function register(email, password, name) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {displayName: name});

    return result.user;
}