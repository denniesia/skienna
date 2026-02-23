import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "../../../styles";

import ProductCard from "../../components/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, snapshot } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import { useProducts } from "../../hooks/useProducts";

export default function ProductsScreen({ navigation }) {
    const { products, loading, error } = useProducts();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                        {/* Title */}
                        <Text style={styles.title}>My Products</Text>

                        {/* Right Icons */}
                        <View style={styles.iconContainer}>

                            <TouchableOpacity onPress={() => console.log('press archived')} style={styles.iconButton}>
                                <Ionicons name="archive" size={28} color="#F39EB6" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Add Product')} style={styles.iconButtonAdd}>
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

            
               
                   {products.length > 0
                        ? <FlatList
                            data={products}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ProductCard product={item} />}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            contentContainerStyle={{ flexGrow: 1 }}
                        />
                        : (
                            <TouchableOpacity style={styles.noItemContainer} onPress={() => navigation.navigate('Add Product')}>
                                <MaterialCommunityIcons name="flower-tulip-outline" size={40} color="#eb8f9e" />
                                <Text style={styles.noItemText}>No products yet</Text>
                                <Text style={styles.suggestionText}>
                                    Tap to add!
                                </Text>
                            </TouchableOpacity>
                        )}
        

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
