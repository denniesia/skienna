import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


export default function RoutineCard({
    routine,
    showCheckbox = false,
    isSelected = false,
    onToggle,
    mode = 'default'

}) {
    const navigation = useNavigation();
    const routineGallery = {
        'Morning Routine': require('../../../assets/sun.png'),
        'Night Routine': require('../../../assets/moon.png'),
        'Face Mask': require('../../../assets/face_mask.png'),
        'Under Eye Mask': require('../../../assets/under_eye.png'),
        'Special': require('../../../assets/special.png')
    }

    const CardContent = (

        <View style={[styles.card]}

        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Routine Details', { routine })}
                activeOpacity={0.9}
                style={[currStyles.card]}
            >
                <Image
                    source={routineGallery[routine.category]}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.info}>
                    <Text style={styles.name}>
                        {routine.category}
                    </Text>

                    {routine.name &&
                        <Text style={styles.routineName}>
                            {routine.name}
                        </Text>
                    }

                    {routine.notes &&
                        <Text style={styles.routineNotes}>
                            {routine.notes.length > 50
                                ? `${routine.notes.slice(0, 50)}...`
                                : routine.notes
                            }
                        </Text>
                    }
                </View>
            </TouchableOpacity>
            {mode === 'display' &&
                <View style={[currStyles.cont,]}>
                    <TouchableOpacity
                        hitSlop={10}
                        onPress={() => navigation.navigate('Routine Edit', { routine })}
                    >
                        <AntDesign name="edit" size={24} color="#f376b4"  />
                    </TouchableOpacity>
                    <TouchableOpacity hitSlop={10}>
                        <Feather name="trash-2" size={24} color="red"  />
                    </TouchableOpacity>
                </View>
            }
        </View>


    );

    if (!showCheckbox) {
        return CardContent;
    }

    return (
        <View style={[currStyles.rowContainer]}>
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
};
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
    cont: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,
        marginLeft: -34,
        
    },
    card: {
        width: '90%',
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 4,
        marginBottom: 10,

        // iOS shadow
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },

});