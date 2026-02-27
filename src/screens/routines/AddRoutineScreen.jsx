import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Alert
} from "react-native";
import { styles } from "../../../styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from "../../../FirebaseConfig";
import DateTimePicker from '@react-native-community/datetimepicker';

import { validateRoutine } from '../../utils/validateRoutine'
import RoutineCategoryModal from "../../components/routines/RoutineCategoryModal";
import { useProducts } from "../../context/products/useProducts";
import { routineService } from "../../services";
import ProductModal from "../../components/products/ProductModal";
import ProductCard from "../../components/products/ProductCard";
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

