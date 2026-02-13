import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CategoryModal({ visible, onClose, onSelectCategory }) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Select a Category</Text>

                    {/* Category Options */}
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => onSelectCategory('Morning Routine')}
                    >
                        <Image
                            source={require('../../assets/sun.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Morning Routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => onSelectCategory('Night Routine')}
                    >
                        <Image
                            source={require('../../assets/moon.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Night Routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => onSelectCategory('Night Routine')}
                    >
                        <Image
                            source={require('../../assets/face_mask.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Face Mask</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => onSelectCategory('Night Routine')}
                    >
                        <Image
                            source={require('../../assets/special.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Special</Text>
                    </TouchableOpacity>
                   

                    {/* Close Button */}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        width: '100%',
        backgroundColor: '#fff', // clean white background
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 15,
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
        marginBottom: 20,
        color: '#FF69B4',
    },
    categoryCont: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginVertical: 8,
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
        color: '#333',
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
