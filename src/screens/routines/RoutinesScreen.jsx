import { Text, View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../../styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import CategoryModal from "../../components/CategoryModal";
import RoutineCard from "../../components/RoutineCard";
import { useRoutines } from "../../hooks/useRoutines";



export default function RoutinesScreen({ navigation }) {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const { routines, loading, error } = useRoutines();


    if (loading) {
       
    }

    if (error) {
        Alert.alert("Error", "Failed to load routines");
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                <View style={styles.header}>
                    <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                        <Text style={styles.title}>My Routines</Text>

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

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#9A9A9A"
                        style={styles.search}
                    />
                </View>

                <View style={styles.divider} />

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

                {loading &&  <Text style={styles.loadingText}>Loading...</Text>}
                {routines.length > 0
                    ? <FlatList
                        data={routines}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <RoutineCard routine={item} />}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        contentContainerStyle={{ flexGrow: 1 }}
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

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

