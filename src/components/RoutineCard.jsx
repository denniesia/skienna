
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";


export default function RoutineCard({
    routine, 
    
}) {
    const navigation = useNavigation();
    const routineGallery = {
        'Morning Routine': require('../../assets/sun.png'),
        'Night Routine': require('../../assets/moon.png'),
        'Face Mask': require('../../assets/face_mask.png'),
        'Under Eye Mask': require('../../assets/under_eye.png'),
        'Special': require('../../assets/special.png')
    }

 return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Routine Details', { routine })}
            
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
                {routine.name && 
                    <Text style={currStyles.routineName} >
                        {routine.name}
                    </Text>
                }

                {routine.notes &&    
                    <Text style={currStyles.routineNotes}>
                        {
                            routine.notes.length > 50 
                            ? `${routine.notes?.slice(0, 50)}...`
                            : routine.notes
                        }
                    </Text>         
                }

            </View>
        </TouchableOpacity>
    );
};

const currStyles = StyleSheet.create({
    routineName: {
        fontSize: 14,
        color: '#F2BED1',
        marginTop: 2,
        fontStyle: 'italic'
    },
    routineNotes: {
        fontSize: 12,
        marginTop: 2,
        color: '#8d8b8bcc',
        
    }
})