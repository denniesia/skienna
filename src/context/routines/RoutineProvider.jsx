import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { routineService } from "../../services";
import { auth } from "../../../FirebaseConfig";

export const RoutineContext = createContext({
    routines: [],
    loading: true,
    reloadRoutines: async() => {},
});



export function RoutineProvider({children}) {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadRoutines = async(userId) => {
        setLoading(true);
        try {
            const data = await routineService.getUserRoutines(userId);
            setRoutines(data);
        } catch(err) {
            console.error("Error fetching routines", err);
        } finally {
            setLoading(false);
        }
    }

    const reloadRoutines = async() => {
        const user = auth.currentUser;
        if (user) {
            await loadRoutines(user.uid);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (user) {
                await loadRoutines(user.uid);
            } else {
                setRoutines([]);
                setLoading(false);
            }
        });

        return unsubscribe;
    } , [routines]);


    const contextValue = {
        routines,
        loading, 
        reloadRoutines,
    }

     return (
            <RoutineContext.Provider value={contextValue}>
                {children}
            </RoutineContext.Provider>
        )
}