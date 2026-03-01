import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { routineService } from "../../services";
import { auth } from "../../../FirebaseConfig";

export const RoutineContext = createContext({
    routines: [],
    loading: true,
    reloadRoutines: async() => {},
    updateRoutine: async(routineId) => {},
    deleteRoutine(userId, routineId) {},
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

    const updateRoutine = async (routineId, updatedData) => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            await routineService.updateRoutine(user.uid, routineId, updatedData);

            setRoutines((oldRoutines) =>
                oldRoutines.map((routine) =>
                    routine.id === routineId
                        ? { ...routine, ...updatedData }
                        : routine
                )
            );
        } catch (err) {
            console.error("Error updating routine", err);
        }
    };
    const deleteRoutine = async(routineId) => {
        const user = auth.currentUser;
        if (!user) return;

        try {
            await routineService.deleteRoutine(user.uid, routineId);
            setRoutines((oldRoutines) => oldRoutines.filter(routine => routine.id !== routineId))
        } catch(err) {
            console.error("Error deleting routine", err)
        }
    }

    const contextValue = {
        routines,
        loading, 
        reloadRoutines,
        updateRoutine, 
        deleteRoutine
    }

     return (
            <RoutineContext.Provider value={contextValue}>
                {children}
            </RoutineContext.Provider>
        )
}