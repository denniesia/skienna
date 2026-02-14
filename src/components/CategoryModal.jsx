import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

export default function CategoryModal({ visible, onClose, onSelectCategory }) {
    const navigation = useNavigation();


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
                        onPress={() => navigation.navigate('Add Routine')}
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


                        onPress={() => onSelectCategory('Face Mask')}
                    >
                        <Image
                            source={require('../../assets/face_mask.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Face Mask</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}

                        onPress={() => onSelectCategory('Special')}
                    >
                        <Image
                            source={require('../../assets/special.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Under Eye Mask</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}

                        onPress={() => onSelectCategory('Special')}
                    >
                        <Image
                            source={require('../../assets/special.png')}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Special</Text>
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
        width: '95%',
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
        marginBottom: 10,
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
