import { Text, View, StyleSheet, TextInput, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../../../styles";
import { products } from "../../../data/products";
import ProductCard from "../../components/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductsScreen({ navigation }) {

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



                            <TouchableOpacity onPress={() => navigation.navigate('Add Product')} style={styles.iconButton}>
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


                {/* TODO FLATLIST */}
               
                    <ScrollView contentContainerStyle={styles.container}>
                        {products.length > 0 ? (
                            products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <TouchableOpacity style={styles.noItemContainer}>
                                <MaterialCommunityIcons name="flower-tulip-outline" size={40} color="#eb8f9e" />
                                <Text style={styles.noItemText}>No products yet</Text>
                                <Text style={styles.suggestionText}>
                                    Tap to add!
                                </Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>   

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
