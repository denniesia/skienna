import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { styles } from "../../styles";
import { products } from "../../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.title}>My Products</Text>
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

            <View style={currStyles.divider} />;
            {/* Product List */}
            <ScrollView contentContainerStyle={currStyles.listContainer}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ScrollView>
        </View>
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
});
