
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
// import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";


export  default function RoutineCard ({
    routine, 
    showCheckbox = false,  
    isSelected = false,
    onToggle
    
}) {
    const navigation = useNavigation();
    const routineGallery = {
        'Morning Routine': require('../../assets/sun.png'),
        'Night Routine': require('../../assets/moon.png'),
        'Face Mask': require('../../assets/face_mask.png'),
        'Under Eye Mask': require('../../assets/under_eye.png'),
        'Special': require('../../assets/special.png')
    }

    const CardContent = (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Routine Details', { routine })}
            activeOpacity={0.9}
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
    );

    if (!showCheckbox) {
        return CardContent;
    }

    return (
        <View style={currStyles.rowContainer}>
            <TouchableOpacity 
                style={[currStyles.checkbox, isSelected && currStyles.checkboxSelected]}
                onPress={onToggle}
                activeOpacity={0.8}
            >
                {isSelected && <View style={currStyles.checkboxInner} />}
            </TouchableOpacity>

            {CardContent}
        </View>
    );
};
const currStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 8,
    },

    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#f376b4",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    checkboxSelected: {
        backgroundColor: "#f376b4",
    },

    checkboxInner: {
        width: 18,
        height: 18,
        backgroundColor: "#fff",
        borderRadius: 1,
    },


});