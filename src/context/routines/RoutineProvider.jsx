import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { routineService } from "../../services";
import { auth } from "../../../FirebaseConfig";

export const RoutineContext = createContext({
    routines: [],
});



export function RoutineProvider({children}) {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const data = await routineService.getUserRoutines(user.uid);
                setRoutines(data);
            } catch (err) {
                console.error("Error fetching routines", err);
            } finally {
                setLoading(false);
            }
        });

        return unsubscribe;
    } , [routines]);



    const contextValue = {
        routines,
    }

     return (
            <RoutineContext.Provider value={contextValue}>
                {children}
            </RoutineContext.Provider>
        )
}