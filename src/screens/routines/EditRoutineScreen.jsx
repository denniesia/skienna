import { Alert } from "react-native";
import { auth } from "../../../FirebaseConfig";
import RoutineForm from "../../components/routines/RoutineForm";
import { useRoutine } from "../../context/routines/useRoutines";

export default function EditRoutineScreen({ navigation, route }) {
    const { routine } = route.params;
    const { updateRoutine } = useRoutine();

    const handleUpdate = async (formData) => {
        try { 
            await updateRoutine(routine.id, formData);
            Alert.alert("Success", "Routine updated successfully");
            navigation.navigate('Routine Details', { routineId: routine.id });
        } catch (error) {
            console.error("Update failed:", error);
            Alert.alert("Error", "Failed to update routine. Please try again.");
        }
    };

    return (
        <RoutineForm
            initialValues={routine}
            onSubmit={handleUpdate}
            submitLabel="Update"
        />
    );
}