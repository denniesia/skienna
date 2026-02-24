import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

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
            {product.imageUri
                ? (<Image
                    source={{ uri: product.imageUri }}
                    style={styles.image}
                    resizeMode="cover"   
                />)
                : (<Image
                    source={require('../../assets/product_img.png')}
                    style={styles.image}
                    resizeMode="cover"   
                />)
            }
            

            <View style={styles.info}>
                <Text style={styles.name} >
                    {product.name}
                </Text>

                <Text style={styles.meta}>
                    {product.brand}
                </Text>
                <Text style={styles.metaCategory}>
                    {product.category}
                </Text>
          
            </View>
        </TouchableOpacity>
    );
}


