import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useRoutine } from "../../context/routines/useRoutines";
import { confirmDelete } from "../../utils/confirmDelete";
import { categoryImageMap, routineGallery } from './constants/routineGallery.js';

export default function RoutineCard({
    routine,
    showCheckbox = false,
    isSelected = false,
    onToggle,
    mode = 'default'
}) {
    const navigation = useNavigation();
    const { deleteRoutine } = useRoutine();

    const handleDelete = () => {
        confirmDelete({
            title: "Delete Routine",
            message: "Are you sure you want to delete this routine?",
            onConfirm: () => deleteRoutine(routine.id),
        });
    };

    const CardContent = (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Routine Details', { routineId: routine.id })}
                activeOpacity={0.9}
                style={currStyles.cardInner}
            >
                <Image
                    source={routineGallery[categoryImageMap[routine.category]]}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.info}>
                    <Text style={styles.name}>{routine.category}</Text>
                    {routine.name && <Text style={styles.routineName}>{routine.name}</Text>}
                    {routine.notes && (
                        <Text style={styles.routineNotes}>
                            {routine.notes.length > 50
                                ? `${routine.notes.slice(0, 50)}...`
                                : routine.notes}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>

            {mode === 'display' && (
                <View style={currStyles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Routine Edit', { routine })}>
                        <AntDesign name="edit" size={24} color="#f376b4" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Feather name="trash-2" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    if (!showCheckbox) return CardContent;

    return (
        <View style={currStyles.rowContainer}>
            {CardContent}
            <TouchableOpacity
                style={[currStyles.checkbox, isSelected && currStyles.checkboxSelected]}
                onPress={onToggle}
                activeOpacity={0.8}
                hitSlop={20}
            >
                {isSelected && <View style={currStyles.checkboxInner} />}
            </TouchableOpacity>
        </View>
    );
}

const currStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 4,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 6,
        borderWidth: 4,
        borderColor: "#f376b4",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxSelected: {
        backgroundColor: "#f376b4",
    },
    checkboxInner: {
        width: 25,
        height: 25,
        backgroundColor: "#f376b4",
        borderRadius: 6,
    },
    cardInner: {
        flexDirection: "row",
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 80,
        justifyContent: 'space-between', 
    },
});