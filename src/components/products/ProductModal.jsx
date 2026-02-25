import { FlatList, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles";
import { useProducts } from "../../context/products/useProducts";
import ProductModalItem from "./ProductModalItem";
import { useState } from "react";


export default function ProductModal({
    visible,
    onClose
}) {
    const [selectedProductIds, setSelectedProductIds] = useState(new Set());

    const { products, loading} = useProducts();

    const handleSelect = (id) => {
        setSelectedProductIds((prev) => {
            const newSet = new Set(prev);

            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }

            return newSet;
        });
        
    };

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
                        renderItem={({ item }) => 
                            <ProductModalItem 
                                product={item} 
                                isSelected={selectedProductIds.has(item.id)}
                                onPress={handleSelect}
                            />}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        
                    />

                </Pressable>

            </Pressable>
        </Modal>
    );
};