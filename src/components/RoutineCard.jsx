
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../styles";


export default function RoutineCard({
    routine
}) {

    const routineGallery = {
        'Morning Routine': require('../../assets/sun.png'),
        'Night Routine': require('../../assets/moon.png'),
        'Face Mask': require('../../assets/face_mask.png'),
        'Under Eye Mask': require('../../assets/under_eye.png'),
        'Special': require('../../assets/special.png')
    }
    const date = routine.startedOn.toDate();
 return (
         <TouchableOpacity 
            style={styles.card} 
            
        >
            <Image
                source={routineGallery[routine.category] }
                style={styles.image}
                resizeMode="cover"   
            />

            <View style={styles.info}>
                <Text style={styles.name} >
                    {routine.category}
                </Text>

                <Text style={styles.meta}>
                      {date.toLocaleString()}
                </Text>


            </View>
        </TouchableOpacity>
    );
};