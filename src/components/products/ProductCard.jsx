import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from "../../../styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useProducts } from "../../context/products/useProducts";
import { confirmDelete } from "../../utils/confirmDelete";

export default function ProductCard({ product, mode = 'default' }) {
    const navigation = useNavigation();
    const { deleteProduct } = useProducts();

    const productPressHandler = () => {
        navigation.navigate('Product Details', { product });
    };

    const handleDelete = () => {
        confirmDelete({
            title: "Delete Product",
            message: "Are you sure you want to delete this product?",
            onConfirm: () => deleteProduct(product.id),
        });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={productPressHandler}>
            {product.imageUri
                ? (<Image source={{ uri: product.imageUri }} style={styles.image} resizeMode="cover" />)
                : (<Image source={require('../../../assets/product_img.png')} style={styles.image} resizeMode="cover" />)
            }

            <View style={styles.info}>
                <Text style={[styles.name, { maxWidth: '85%' }]}>{product.name}</Text>
                <Text style={styles.meta}>{product.brand}</Text>
                <Text style={styles.metaCategory}>{product.category}</Text>
            </View>

            {mode === 'default' && (
                <View style={currStyles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Product Edit', { product })}>
                        <AntDesign name="edit" size={24} color="#f376b4" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Feather name="trash-2" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
    );
}

const currStyles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
        justifyContent: 'space-between',
        height: 80, 
    },
});