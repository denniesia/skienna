import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

export default function ProductCategoryModal({
    visible,
    onClose,
    onSelectCategory,
}) {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState();

    const handlePressHandler = (category) => {
        setSelectedCategory(category);
        onSelectCategory?.(category);
        onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>

                <Pressable style={styles.modalContainer} onPress={() => { }}>
                    <Text style={styles.title}>Select a Category</Text>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Cleanser')}
                    >
                        <Text style={styles.categoryText}>Cleanser</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Exfoliator')}
                    >
                        <Text style={styles.categoryText}>Exfoliator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Eye Cream')}
                    >
                        <Text style={styles.categoryText}>Eye Cream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Face Mask')}
                    >
                        <Text style={styles.categoryText}>Face Mask</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Face Oil')}
                    >
                        <Text style={styles.categoryText}>Face Oil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Moisturizer')}
                    >
                        <Text style={styles.categoryText}>Moisturizer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Serum')}
                    >
                        <Text style={styles.categoryText}>Serum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Retinol')}
                    >
                        <Text style={styles.categoryText}>Retinol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Sunscreen')}
                    >
                        <Text style={styles.categoryText}>Sunscreen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Toner')}
                    >
                        <Text style={styles.categoryText}>Toner</Text>
                    </TouchableOpacity>
                    

                    
                </Pressable>

            </Pressable>
        </Modal>

    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // darker overlay for focus
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContainer: {
        width: '75%',
        backgroundColor: '#fff', // clean white background
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, // Android shadow
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#FF69B4',
    },
    categoryCont: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    photo: {
        width: 100,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#575757',
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#FF69B4',
        borderRadius: 10,
    },
    closeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
