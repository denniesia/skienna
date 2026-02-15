
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../styles";


export default function RoutineCard({
    routine
}) {
 return (
         <TouchableOpacity 
            style={styles.card} 
            
        >
            {/* <Image
                source={{ uri: routine.imageUri }}
                style={styles.image}
                resizeMode="cover"   
            /> */}

            <View style={styles.info}>
                <Text style={styles.name} >
                    {routine.category}
                </Text>

                {/* <Text style={styles.meta}>
                    {product.brand} · {product.category}
                </Text> */}


            </View>
        </TouchableOpacity>
    );
};