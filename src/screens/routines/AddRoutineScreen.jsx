import {
   
    Alert
} from "react-native";
import { auth } from "../../../FirebaseConfig";
import { routineService } from "../../services";
import RoutineForm from "../../components/routines/RoutineForm";


export default function AddRoutineScreen({ navigation, route }) {
    const { category, imageKey } = route.params;
    
    const handleAdd = async (formData) => {
        try {
            const userId = auth.currentUser.uid;
            await routineService.addRoutine(userId, formData);
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to add routine");
        }
    }

    return (
        <RoutineForm
            initialValues={{category, imageKey}}
            onSubmit={handleAdd}
            submitLabel="Save"
        />
    )

};

