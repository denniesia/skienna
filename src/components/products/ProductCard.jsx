import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../../styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import { useProducts } from "../../context/products/useProducts";
import { confirmDelete } from "../../utils/confirmDelete";


export default function ProductCard({
    product,
    mode = 'default',
}) {
    const navigation = useNavigation();

    const { deleteProduct } = useProducts();

    const productPressHandler = () => {
        navigation.navigate('Product Details', { product })
    }

    const handleDelete = () => {
        confirmDelete({
        title: "Delete Product",
        message: "Are you sure you want to delete this product?",
        onConfirm: () => deleteProduct(product.id),
        });
    };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={productPressHandler}
        >

            {product.imageUri
                ? (<Image
                    source={{ uri: product.imageUri }}
                    style={styles.image}
                    resizeMode="cover"
                />)
                : (<Image
                    source={require('../../../assets/product_img.png')}
                    style={styles.image}
                    resizeMode="cover"
                />)
            }
            <View style={styles.info}>
                <View style={[currStyles.cont, { justifyContent: 'space-between' }]}>
                    <Text style={styles.name} >
                        {product.name}
                    </Text>
                    {mode === 'default' &&

                        <View style={currStyles.cont}>
                            <TouchableOpacity
                                hitSlop={10}
                                onPress={() => navigation.navigate('Product Edit', { product })}
                            >
                                <AntDesign name="edit" size={24} color="#f376b4" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                hitSlop={10} 
                                onPress={handleDelete}
                            >
                                <Feather name="trash-2" size={24} color="red" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    }

                </View>

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

const currStyles = StyleSheet.create({
    cont: {
        flexDirection: 'row',
        gap: 15,
        marginLeft: 10

    }
})
