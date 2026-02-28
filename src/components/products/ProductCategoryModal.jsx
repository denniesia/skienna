import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { styles } from '../../../styles';

export default function ProductCategoryModal({
    visible,
    onClose,
    onSelectCategory,
}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
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
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Cleanser')}
                    >
                        <Text style={currentStyles.categoryText}>Cleanser</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Exfoliator')}
                    >
                        <Text style={currentStyles.categoryText}>Exfoliator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Eye Cream')}
                    >
                        <Text style={currentStyles.categoryText}>Eye Cream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Face Mask')}
                    >
                        <Text style={currentStyles.categoryText}>Face Mask</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Face Oil')}
                    >
                        <Text style={currentStyles.categoryText}>Face Oil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Moisturizer')}
                    >
                        <Text style={currentStyles.categoryText}>Moisturizer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Serum')}
                    >
                        <Text style={currentStyles.categoryText}>Serum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Retinol')}
                    >
                        <Text style={currentStyles.categoryText}>Retinol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Sunscreen')}
                    >
                        <Text style={currentStyles.categoryText}>Sunscreen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={currentStyles.categoryCont}
                        onPress={() => handlePressHandler('Toner')}
                    >
                        <Text style={currentStyles.categoryText}>Toner</Text>
                    </TouchableOpacity>
                    

                    
                </Pressable>

            </Pressable>
        </Modal>

    );
};

const currentStyles = StyleSheet.create({
    
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
