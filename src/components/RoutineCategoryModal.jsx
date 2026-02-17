import { useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

export default function RoutineCategoryModal({ 
    visible, 
    onClose, 
    onSelectCategory,
    mode='select'
}) {
    const navigation = useNavigation();
    const [selected, setSelected] = useState({category:null , imageUri: null});

    const routineGallery = {
        sun: require('../../assets/sun.png'),
        moon: require('../../assets/moon.png'),
        faceMask: require('../../assets/face_mask.png'),
        underEyeMask: require('../../assets/under_eye.png'),
        special: require('../../assets/special.png')
    }

    const handlePressHandler = (category, imageUri) => {
        setSelected({ category, imageUri });
        if (mode === 'navigate') {
            navigation.navigate('Add Routine', { 
                    category,
                    imageUri
                });
        } else {
             onSelectCategory?.(category, imageUri);
        }
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
                        onPress={() => handlePressHandler('Morning Routine', routineGallery.sun)}
                    >
                        <Image
                            source={routineGallery.sun}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Morning Routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Night Routine', routineGallery.moon)}
                    >
                        <Image
                            source={routineGallery.moon}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Night Routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}
                        onPress={() => handlePressHandler('Face Mask', routineGallery.faceMask)}
                    >
                        <Image
                            source={routineGallery.faceMask}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Face Mask</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.categoryCont}

                        onPress={() => handlePressHandler('Under Eye Mask', routineGallery.underEyeMask)}
                    >
                        <Image
                            source={routineGallery.underEyeMask}
                            style={styles.photo}
                        />
                        <Text style={styles.categoryText}>Under Eye Mask</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryCont}

                        onPress={() => handlePressHandler('Special', routineGallery.special)}
                    >
                        <Image
                            source={routineGallery.special}
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
