import { useEffect, useState } from "react"; 
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

export function useRoutines() {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const routinesCollection = collection(db, "routines");
    const q = query(routinesCollection, orderBy("category", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const routinesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRoutines(routinesData);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching routines:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { routines, loading, error };
}