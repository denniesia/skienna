import { Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { styles } from "../../../styles";

import ProductCard from "../../components/products/ProductCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { useProducts } from "../../context/products/useProducts";
import { useState } from "react";

export default function ProductsScreen({ navigation }) {
    const { products, loading, reloadProducts } = useProducts();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async() => {
        setRefreshing(true);
        await reloadProducts();
        setRefreshing(false);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>

                <View style={styles.header}>
                    <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                        <Text style={styles.title}>My Products</Text>

                        <View style={styles.iconContainer}>
                            {/* Archive Link  */}
                            {/* <TouchableOpacity onPress={() => console.log('press archived')} style={styles.iconButton}>
                                <Ionicons name="archive" size={28} color="#F39EB6" />
                            </TouchableOpacity> */}

                            <TouchableOpacity onPress={() => navigation.navigate('Add Product')} style={styles.iconButtonAdd}>
                                <AntDesign name="plus" size={28} color="#f376b4" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                {/* Search Bar  */}
                {/* <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#9A9A9A"
                        style={styles.search}
                    />
                </View> */}

                <View style={styles.divider} />

                   
                   {products.length > 0 ? (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ProductCard product={item} />}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        contentContainerStyle={{ flexGrow: 1 }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={['#F39EB6']}
                            />
                        }
                    />
                ) : (
                    <TouchableOpacity
                        style={styles.noItemContainer}
                        onPress={() => navigation.navigate('Add Product')}
                    >
                        <MaterialCommunityIcons name="flower-tulip-outline" size={40} color="#f376b4" />
                        <Text style={styles.noItemText}>No products yet</Text>
                        <Text style={styles.suggestionText}>Tap to add!</Text>
                    </TouchableOpacity>
                )}
    
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
