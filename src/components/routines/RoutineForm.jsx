import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Alert
} from "react-native";
import { styles } from "../../../styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from "../../../FirebaseConfig";
import DateTimePicker from '@react-native-community/datetimepicker';

import { validateRoutine } from '../../utils/validateRoutine'
import RoutineCategoryModal from "../../components/routines/RoutineCategoryModal";
import { useProducts } from "../../context/products/useProducts";
import { routineService } from "../../services";
import ProductModal from "../../components/products/ProductModal";
import ProductCard from "../../components/products/ProductCard";
import { useNavigation } from "@react-navigation/native";


export default function RoutineForm({
    initialValues,
    onSubmit,
    submitLabel = 'Save'
}) {
    const navigation = useNavigation();
    
    const [notes, setNotes] = useState(initialValues.notes || '');
    const [startedOn, setStartedOn] = useState(initialValues.startedOn || new Date());
    const [name, setName] = useState(initialValues.name || '');
    const [showCalender, setShowCalender] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(initialValues.category || '');
    const [selectedImageKey, setSelectedImageKey] = useState(initialValues.imageKey);

    const { products, loading } = useProducts();
    const [showProductsModal, setShowProductsModal] = useState(false);
    const [selectedIds, setSelectedIds] = useState(initialValues.productsId || new Set());
    
     const toggleSelect  = (id) => {
            setSelectedIds((prev) => {
                const newSet = new Set(prev);
    
                if (newSet.has(id)) {
                    newSet.delete(id);
                } else {
                    newSet.add(id);
                }
    
                return newSet;
            });
            
        };

    const selectedProducts = products.filter((p) =>
        selectedIds.has(p.id)
    );

    const routineGallery = {
        sun: require('../../../assets/sun.png'),
        moon: require('../../../assets/moon.png'),
        faceMask: require('../../../assets/face_mask.png'),
        underEyeMask: require('../../../assets/under_eye.png'),
        special: require('../../../assets/special.png')
    }

    const onStartedOnDateChange = (event, selectedDate) => {
        setShowCalender(false);
        if (selectedDate) {
            setStartedOn(selectedDate);
        }
    };

    const handleSubmit = async() => {
        const { isValid, message } = validateRoutine({ category: selectedCategory, startedOn, name, notes });

        if (!isValid) {
            Alert.alert("Error", message);
            return;
        }

        onSubmit({
            category: selectedCategory,
            imageKey: selectedImageKey,
            name: name || null,
            startedOn,
            notes,
            productIds: selectedProducts.map(p => p.id),
        });

    }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    enableOnAndroid
                    extraScrollHeight={20}
                >
                    {showProductsModal &&

                        <ProductModal
                            visible={showProductsModal}
                            products={products}
                            selectedIds={selectedIds}
                            toggleSelect={toggleSelect}
                            onClose={() => setShowProductsModal(false)}

                        />
                    }
                    <View style={styles.containerAdd}>
                        <View style={styles.topRow}>
                            <Image
                                source={routineGallery[selectedImageKey]}
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
                                        <RoutineCategoryModal
                                            visible={showCategoryModal}
                                            onClose={() => setShowCategoryModal(false)}
                                            onSelectCategory={(category, imageKey) => {
                                                setSelectedCategory(category);
                                                setSelectedImageKey(imageKey);
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
                                    <View style={currStyles.row}>
                                        <Text style={styles.label}>Products:</Text>
                                        <TouchableOpacity onPress={() => setShowProductsModal(true)}>
                                            <Text style={currStyles.linkText} numberOfLines={1} >Add Products</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <FlatList
                                        data={selectedProducts}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) =>
                                            <ProductCard
                                                product={item}
                                                mode='display'
                                            />}
                                        contentContainerStyle={{ paddingBottom: 20 }}

                                    />
                                    { selectedIds.size === 0 && <Text style={currStyles.noItemText}>No products yet.</Text>}
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                       <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                            <Text style={styles.endBtnText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
                            <Text style={styles.endBtnText}>{submitLabel}</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};


const currStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'space-between',      
        marginVertical: 10,        
    },
    linkText: {
        color: "#F39EB6",       
        textDecorationLine: 'underline', 
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        flex: 1,
        paddingRight: 10
    },
    noItemText : {
        textAlign: 'center',
        fontSize: 18,
        color: "#f376b4",
        marginBottom: 20,

    }
});