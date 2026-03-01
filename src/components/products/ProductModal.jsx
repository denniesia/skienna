import { FlatList, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles";
import { useProducts } from "../../context/products/useProducts";
import ProductModalItem from "./ProductModalItem";
import { useState } from "react";


export default function ProductModal({
    visible,
    products,
    selectedIds,
    toggleSelect,
    onClose,
}) {

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>

                <Pressable style={styles.modalContainerWide} onPress={() => { }}>
                    <Text style={[styles.title, { textAlign: 'center', marginBottom: 10 }]}>Select Products</Text>
                    {products.length === 0 &&
                        <Text style={[styles.noItemText, {fontSize: 18, color: '#ccc'}]}>No added products.</Text>
                    }

                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <ProductModalItem
                                product={item}
                                isSelected={selectedIds.has(item.id)}
                                onPress={toggleSelect}
                            />}
                        contentContainerStyle={{ paddingBottom: 20 }}

                    />

                    <TouchableOpacity style={[styles.saveBtn, { alignSelf: 'center' }]} onPress={onClose}>
                        <Text style={styles.endBtnText}>Save</Text>
                    </TouchableOpacity>
                </Pressable>

            </Pressable>


        </Modal>
    );
};