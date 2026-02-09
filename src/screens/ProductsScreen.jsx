import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { products } from "../../data/products";
import ProductCard from "../components/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

import AddProductScreen from "./AddProductScreen";


export default function ProductsScreen({ navigation }) {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                {/* Header */}
                <View style={styles.header}>
                   <View style={[styles.headerContent, {justifyContent: 'space-between'}]}>
                        {/* Title */}
                        <Text style={styles.title}>My Products</Text>

                        {/* Right Icons */}
                        <View style={currStyles.iconContainer}>
                          
                            <TouchableOpacity onPress={() => console.log('press archived')} style={styles.iconButton}>
                                <Ionicons name="archive" size={28} color="#F39EB6" />
                            </TouchableOpacity>

                           

                            <TouchableOpacity onPress={() => navigation.navigate('Add Product')} style={styles.iconButton}>
                                <AntDesign name="plus" size={28} color="#F39EB6" />
                            </TouchableOpacity>
                             
                        </View>
                    </View>
                </View>

                {/* Search */}
                <View style={currStyles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#9A9A9A"
                        style={currStyles.search}
                    />
                </View>

                <View style={currStyles.divider} />
                {/* Product List */}
                <ScrollView contentContainerStyle={currStyles.listContainer}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const currStyles = StyleSheet.create({
    search: {
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        color: "#FFAAB8",
        fontSize: 18,
        width: '95%',
        borderWidth: 1,
        borderColor: '#F39EB6',
        marginBottom: 12,

    },
    searchBar: {
        alignItems: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: "#EDEDED",
        marginVertical: 10,
    },
    iconContainer: {
        flexDirection: "row",
        gap: 28, 
    },
});
