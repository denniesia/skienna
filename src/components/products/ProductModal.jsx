import { FlatList, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles";
import { useProducts } from "../../context/products/useProducts";
import ProductModalItem from "./ProductModalItem";


export default function ProductModal({
    visible,
    onClose
}) {

    const { products, loading} = useProducts();

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>

                <Pressable style={styles.modalContainerWide} onPress={() => { }}>
                    <Text style={[styles.title, {textAlign: 'center', marginBottom: 10}]}>Select Products</Text>

                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ProductModalItem product={item} />}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />

                </Pressable>

            </Pressable>
        </Modal>
    );
};