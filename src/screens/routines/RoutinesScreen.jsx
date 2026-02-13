import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../../styles";
import { routines } from "../../../data/routines";
import ProductCard from "../../components/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import CategoryModal from "../../components/CategoryModal";



export default function RoutinesScreen({ navigation }) {
    const [showModal, setShowModal] = useState(false);
    const [routineCategory, setRoutineCategory] = useState(null);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                {/* Header */}
                <View style={styles.header}>
                   <View style={[styles.headerContent, {justifyContent: 'space-between'}]}>
                        {/* Title */}
                        <Text style={styles.title}>My Routines</Text>

                        {/* Right Icons */}
                        <View style={styles.iconContainer}>
                        
                            <TouchableOpacity onPress={() => console.log('press archived')} style={styles.iconButton}>
                                <Ionicons name="archive" size={28} color="#F39EB6" />
                            </TouchableOpacity>

        
                            <TouchableOpacity onPress={() => setShowModal(true)} style={styles.iconButton}>
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

                    {showModal && 
                        <CategoryModal 
                            visible={showModal} 
                            onClose={() => setShowModal(false)}  
                            onSelectCategory={setRoutineCategory}
                        /> 
                    }
                    {
                        routines.length > 0
                        ? <Text> some rountines</Text>
                                                :  (

                            <TouchableOpacity style={styles.noItemContainer}
                                onPress={() => setShowModal(true)}
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
