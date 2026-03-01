import {
    Alert
} from "react-native";
import RoutineForm from "../../components/routines/RoutineForm";
import { useRoutine } from "../../context/routines/useRoutines";


export default function AddRoutineScreen({ navigation, route }) {
    const { category, imageKey } = route.params;

    const { addRoutine } = useRoutine();
    
    const handleAdd = async (formData) => {
        try {
            addRoutine(formData);
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

