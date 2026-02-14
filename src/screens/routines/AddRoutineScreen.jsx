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
    ActivityIndicator,
    Alert
} from "react-native";
import { styles } from "../../../styles";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useCameraPermissions, launchCameraAsync, useMediaLibraryPermissions, launchImageLibraryAsync } from "expo-image-picker";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import CameraCapture from "../../components/CameraCapture";
import ImagePicker from "../../components/ImagePicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import CategoryModal from "../../components/CategoryModal";



export default function AddRoutineScreen({ route }) {
    
    const { category, imageUri } = route.params;

    const [notes, setNotes] = useState('');
    const [startedOn, setStartedOn] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(category || '');
    const [selectedImage, setSelectedImage] = useState(imageUri || null);
    
    

    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
        }
        if (imageUri) {
            setSelectedImage(imageUri);
        }
    }, [category, imageUri]);


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

                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Notes:</Text>
                                        <TextInput
                                            placeholder="Very good after sunbathing"
                                            style={styles.input}
                                            value={notes}
                                            multiline={true}
                                            numberOfLines={4}
                                            onChangeText={setNotes}
                                        />
                                    </View>

                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Products:</Text>

                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.cancelBtn}>
                                <Text style={styles.endBtnText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.saveBtn} onPress={() => console.log('save')}>
                                <Text style={styles.endBtnText}>Save</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};


