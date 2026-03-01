import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import { styles } from "../../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CameraCapture from "../../components/CameraCapture";
import ImagePicker from "../../components/ImagePicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { validateProduct } from "../../utils/validateProduct";
import ProductCategoryModal from "../../components/products/ProductCategoryModal";
import { useNavigation } from "@react-navigation/native";


export default function ProductForm({
    initialValues,
    onSubmit,
    submitLabel = "Save"
}) {
    const [name, setName] = useState(initialValues.name || "");
    const [brand, setBrand] = useState(initialValues.brand || "");
    const [category, setCategory] = useState(initialValues.category || "");
    const [imageUri, setImageUri] = useState(initialValues.imageUri || null);
    const [openedOnDate, setOpenedOnDate] = useState(
        initialValues.openedOnDate || new Date()
    );
    const [expiresInMonths, setExpiresInMonths] = useState(
        initialValues.expiresInMonths || ""
    );
    const [notes, setNotes] = useState(initialValues.notes || "");

    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showCalender, setShowCalender] = useState(false);

    const navigation = useNavigation();

    const handleSubmit = () => {
        const { isValid, message } = validateProduct({
            name,
            brand,
            category,
            openedOnDate,
            expiresInMonths,
            notes
        });
       
        if (!isValid) {
            Alert.alert("Error", message);
            return;
        }
       
        onSubmit({
            name,
            brand,
            category,
            imageUri,
            openedOnDate,
            expiresInMonths,
            notes
        });
    };

    const onOpenedOnDateChange = (event, selectedDate) => {
        setShowCalender(false);
        if (selectedDate) {
            setOpenedOnDate(selectedDate);
        }
    };

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1 }}
                        enableOnAndroid
                        extraScrollHeight={90}
                    >
                        <View style={styles.containerAdd}>
                            <View style={styles.topRow}>
                                <View>
                                    <Image
                                        source={imageUri ? { uri: imageUri } : require('../../../assets/photo_placeholder.jpg')}
                                        style={styles.photo}
                                    />
                                    <View style={styles.photoBtns}>
                                        <ImagePicker onImagePicked={setImageUri} />

                                        <CameraCapture onPhotoTaken={setImageUri} />
                                    </View>

                                </View>

                                <View style={{ paddingTop: 20, width: '45%' }}>
                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Product Name:</Text>
                                        <TextInput
                                            placeholder="Hydrating Cleanser"
                                            style={styles.input}
                                            value={name}
                                            onChangeText={setName}
                                        />
                                    </View>

                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Product Brand:</Text>
                                        <TextInput
                                            placeholder="CeraVe"
                                            style={styles.input}
                                            value={brand}
                                            onChangeText={setBrand}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View>
                                <View style={{ paddingTop: 20, width: '100%' }}>
                                    <View style={styles.inputCont} >
                                        <Text style={styles.label}>Category:</Text>
                                        <TouchableOpacity onPress={() => setShowCategoryModal(true)}>
                                            {category
                                                ? <Text placeholder="" style={[styles.input]} >{category}</Text>
                                                : <Text placeholder="" style={[styles.input, { color: '#848282' }]} >Please choose category</Text>
                                            }

                                        </TouchableOpacity>
                                    </View>
                                    {
                                        showCategoryModal &&
                                        <ProductCategoryModal
                                            visible={showCategoryModal}
                                            onClose={() => setShowCategoryModal(false)}
                                            onSelectCategory={(category) => {
                                                setCategory(category);
                                                setShowCategoryModal(false);

                                            }}
                                        />
                                    }

                                    {/* <View style={styles.inputCont}>
                                        <Text style={styles.label}>Routine:</Text>
                                        <TextInput placeholder="CeraVe" style={styles.input} />
                                    </View> */}
                                    <TouchableOpacity style={styles.inputCont} onPress={() => setShowCalender(true)}>
                                        <Text style={styles.label}>Opened on:</Text>
                                        <Text style={styles.input}>
                                            {openedOnDate.toLocaleDateString()}
                                        </Text>
                                        {showCalender &&
                                            <DateTimePicker
                                                value={openedOnDate}
                                                mode="date"
                                                display="default"
                                                onChange={onOpenedOnDateChange}
                                                color='#F39EB6'
                                            />
                                        }
                                    </TouchableOpacity>
                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Expires in (months): </Text>

                                        <TextInput
                                            placeholder="12"
                                            style={styles.input}
                                            keyboardType="numeric"
                                            value={expiresInMonths}
                                            onChangeText={setExpiresInMonths}
                                        />

                                    </View>
                                    <View style={styles.inputCont}>
                                        <Text style={styles.label}>Notes:</Text>
                                        <TextInput
                                            placeholder="Very good after sunbathing"
                                            style={styles.inputArea}
                                            value={notes}
                                            multiline={true}
                                            numberOfLines={4}
                                            onChangeText={setNotes}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                                    <Text style={styles.endBtnText}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit} >
                                    <Text style={styles.endBtnText}>{submitLabel}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </SafeAreaProvider>


        </>
    );
}