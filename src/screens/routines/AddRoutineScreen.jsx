import {
    Keyboard,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
    ScrollView,
    TouchableOpacity,
    Image,
    Button,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Alert
} from "react-native";
import { styles } from "../../../styles";
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { cloneElement, useEffect, useState } from "react";

import { addDoc, collection, doc, onSnapshot, orderBy, query, snapshot } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import CameraCapture from "../../components/CameraCapture";
import ImagePicker from "../../components/ImagePicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import CategoryModal from "../../components/CategoryModal";
import ProductCard from "../../components/ProductCard";



export default function AddRoutineScreen({ navigation, route }) {
    const [products, setProducts] = useState([]);
    const { category, imageUri } = route.params;

    const [notes, setNotes] = useState('');
    const [startedOn, setStartedOn] = useState(new Date());
    const [name, setName] = useState('');
    const [showCalender, setShowCalender] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(category || '');
    const [selectedImage, setSelectedImage] = useState(imageUri || null);
    const productsCollection = collection(db, "products");

    const routinesCollection = collection(db, 'routines');

    const addRoutineHandler = async() => {
        if (!selectedCategory || !startedOn) {
            return;
        };

        if (selectedCategory === 'Special' && !name) {
            return;
        };
        if (selectedCategory === 'Special' && name.length > 5) {
            return;
        }; 

        try {
            await addDoc(routinesCollection, {
                selectedCategory, 
                selectedImage,
                startedOn,
                notes,
                createdAt: new Date(),
            })

            setNotes('');
            navigation.navigate('Routine Stack Screen')
        } catch(error) {
            console.error('Error adding routine', error);
            Alert.alert('Error', 'Failed to add new routine')
        }
        
    }

    useEffect(() => {
        const q = query(productsCollection, orderBy('name', 'asc'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            },
            (error) => {
                console.error("Error fetching todo:", error);
                Alert.alert("ERROR", "Failed to load products")
            }
        );

        return () => unsubscribe();
    }, [])


    // useEffect(() => {
    //     if (selectedCategory) {
    //         setSelectedCategory(category);
    //     }
    //     if (imageUri) {
    //         setSelectedImage(imageUri);
    //     }
    // }, [selectedCategory, imageUri]);


    const onStartedOnDateChange = (event, selectedDate) => {
        setShowCalender(false);
        if (selectedDate) {
            setStartedOn(selectedDate);
        }
    };


    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, padding: 2 }}
                        keyboardShouldPersistTaps="handled"
                    >

                        <View style={styles.containerAdd}>
                            <View style={styles.topRow}>

                                <Image
                                    source={selectedImage}
                                    style={styles.photo}
                                />

                                <View style={{ paddingTop: 5, width: '45%' }}>
                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Category:</Text>
                                        <TouchableOpacity onPress={() => setShowCategoryModal(true)}>
                                            <Text style={styles.input} >
                                                {selectedCategory}
                                            </Text>
                                        </TouchableOpacity>
                                        {showCategoryModal &&
                                            <CategoryModal
                                                visible={showCategoryModal}
                                                onClose={() => setShowCategoryModal(false)}
                                                onSelectCategory={(category, image) => {
                                                    setSelectedCategory(category);
                                                    setSelectedImage(image);
                                                }}
                                                mode="select"
                                            />

                                        }
                                    </View>


                                    <View style={styles.inputCont} >
                                        <Text style={styles.label}>Started on:</Text>
                                        <TouchableOpacity onPress={() => setShowCalender(true)}>
                                            <Text style={styles.input}>
                                                {startedOn.toLocaleDateString()}
                                            </Text>

                                        </TouchableOpacity>
                                        {showCalender &&
                                            <DateTimePicker
                                                value={startedOn}
                                                mode="date"
                                                display="default"
                                                onChange={onStartedOnDateChange}
                                                color='#F39EB6'
                                            />
                                        }
                                    </View>


                                </View>

                            </View>

                            <View>

                                <View style={{ paddingTop: 20, width: '100%' }}>
                                    {selectedCategory === 'Special' &&
                                        <View style={styles.inputCont} >
                                            <Text style={styles.label}>Name: </Text>

                                            <TextInput
                                                placeholder="Retinol Treatment"
                                                style={styles.input}
                                                value={name}
                                                onChangeText={setName}
                                            />
                                        </View>
                                    }

                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Notes:</Text>
                                        <TextInput
                                            placeholder="Use after shower, focus on dry areas, avoid eye area.."
                                            style={styles.inputArea}
                                            value={notes}
                                            multiline={true}
                                            numberOfLines={4}
                                            onChangeText={setNotes}
                                        />
                                    </View>

                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Products:</Text>
                                        <FlatList
                                            data={products}
                                            keyExtractor={(item) => item.id}
                                            renderItem={({ item }) => <ProductCard product={item} mode='display' />}
                                            ItemSeparatorComponent={() => <View style={styles.separator} />}

                                        />

                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.cancelBtn}>
                                <Text style={styles.endBtnText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.saveBtn} onPress={addRoutineHandler}>
                                <Text style={styles.endBtnText}>Save</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};


