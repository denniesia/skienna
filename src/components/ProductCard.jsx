import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";

export default function ProductCard({ 
    product ,
    mode='default',
}) {
    const navigation = useNavigation();

    const isPressable = mode === 'default';

    const productPressHandler = () => {
        navigation.navigate('Product Details', { product })
    }

    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={isPressable ? productPressHandler : undefined}
        >
            <Image
                source={{ uri: product.imageUri }}
                style={styles.image}
                resizeMode="cover"   
            />

            <View style={styles.info}>
                <Text style={styles.name} >
                    {product.name}
                </Text>

                <Text style={styles.meta}>
                    {product.brand} · {product.category}
                </Text>


            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,

        // iOS shadow
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        backgroundColor: "#F4F4F4",
    },
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        color: '#f376b4',
    },
    meta: {
        fontSize: 14,
        color: "#7A7A7A",
        marginTop: 2,
    },

});
