import { Text, View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../../styles";
import { routines } from "../../../data/routines";
import ProductCard from "../../components/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import CategoryModal from "../../components/CategoryModal";
import RoutineCard from "../../components/RoutineCard";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";


export default function RoutinesScreen({ navigation }) {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const [routines, setRoutines] = useState([]);
    const routinesCollection = collection(db, 'routines');


    useEffect(() => {
        const q = query(routinesCollection, orderBy('category', 'asc'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const routinesData = snapshot.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data(), 
                }));
                setRoutines(routinesData);
            },
            (error) => {
                console.error("Error fetching todo:", error);
                Alert.alert("ERROR", "Failed to load products")
            }
        );
        
        return () => unsubscribe();
    }, [])


 
    console.log(routines)
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                        {/* Title */}
                        <Text style={styles.title}>My Routines</Text>

                        {/* Right Icons */}
                        <View style={styles.iconContainer}>

                            <TouchableOpacity onPress={() => console.log('press archived')} style={styles.iconButton}>
                                <Ionicons name="archive" size={28} color="#F39EB6" />
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => setShowCategoryModal(true)} style={styles.iconButton}>
                                <AntDesign name="plus" size={28} color="#F39EB6" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                {/* Search */}
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#9A9A9A"
                        style={styles.search}
                    />
                </View>

                <View style={styles.divider} />

                {/* #TODO FLAT LIST */}
                <ScrollView>

                    {showCategoryModal &&
                        <CategoryModal
                            visible={showCategoryModal}
                            onClose={() => setShowCategoryModal(false)}
                            onSelectCategory={(category, image) => {
                                setSelectedCategory(category);
                                setSelectedImage(image);
                            }}
                            mode="navigate"
                        />
                    }
                    {
                        routines.length > 0
                            ? <FlatList
                                data={routines}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <RoutineCard routine={item} />}
                                ItemSeparatorComponent={() => <View style={styles.separator} />}

                            />
                            : (

                                <TouchableOpacity style={styles.noItemContainer}
                                    onPress={() => setShowCategoryModal(true)}
                                >
                                    <MaterialCommunityIcons name="sprout-outline" size={40} color="#eb8f9e" />
                                    <Text style={styles.noItemText}>No routines yet</Text>
                                    <Text style={styles.suggestionText}>Tap to create!</Text>
                                </TouchableOpacity>
                            )
                    }
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
