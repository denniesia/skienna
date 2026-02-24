import { useContext } from "react";
import { RoutineContext } from "./RoutineProvider";

export function useRoutine() {
    const context = useContext(RoutineContext);

    return context;
}