import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";



import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";



export default function ProductDetailsScreen({ route }) {
    const product = products.find(p => p.id === route.params.id)

    return (
        <SafeAreaProvider>
            <SafeAreaView>          
                
                   <Image
                        source={{ uri: product.imageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    />

                  
                   <View style={styles.infoContainer}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text style={styles.brand}>{product.brand}</Text>
                        <Text style={styles.category}>{product.category}</Text> 

                       
                        <View style={styles.routineContainer}>
                            {product.routines.map((routine) => (
                                <Text key={routine} style={styles.routineBadge}>
                                    {routine.toUpperCase()}
                                </Text>
                            ))}
                        </View>

                     
                       <Text style={styles.sectionTitle}>Notes</Text>
                        <Text style={styles.notes}>{product.notes}</Text>  

                    
                  <Text style={styles.sectionTitle}>Dates</Text>
                        <Text style={styles.dates}>
                            Opened At: {product.openedAt}
                        </Text>
                        <Text style={styles.dates}>
                            Expires After: {product.expiresAfterMonths} months
                        </Text>
                        <Text style={styles.dates}>
                            Created At: {product.createdAt}
                        </Text> 
                    </View> 
               
           
              
              
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 300,
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 4,
        color: "#111",
    },
    brand: {
        fontSize: 16,
        fontWeight: "500",
        color: "#555",
    },
    category: {
        fontSize: 14,
        color: "#888",
        marginBottom: 12,
    },
    routineContainer: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 16,
    },
    routineBadge: {
        backgroundColor: "#ffe4e1",
        color: "#d6336c",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: "600",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 12,
        marginBottom: 4,
        color: "#111",
    },
    notes: {
        fontSize: 14,
        lineHeight: 20,
        color: "#333",
        marginBottom: 12,
    },
    dates: {
        fontSize: 13,
        color: "#666",
        marginBottom: 2,
    },
});