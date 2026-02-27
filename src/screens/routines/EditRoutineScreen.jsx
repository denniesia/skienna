import { Alert } from "react-native";
import { auth } from "../../../FirebaseConfig";
import { routineService } from "../../services";
import RoutineForm from "../../components/routines/RoutineForm";

export default function EditRoutineScreen({ navigation, route }) {
    const { routine } = route.params;

    const handleUpdate = async (formData) => {
        try {
            const user = auth.currentUser;
            if (!user) {
                Alert.alert("Error", "You must be logged in");
                return;
            }
            
            await routineService.updateRoutine(user.uid, routine.id, formData);
            Alert.alert("Success", "Routine updated successfully");
            navigation.goBack();
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