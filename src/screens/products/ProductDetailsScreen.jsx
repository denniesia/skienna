import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "../../utils/formatDate";


export default function ProductDetailsScreen({ route }) {
    const { product } = route.params; 
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {product.imageUri
                        ? <Image source={{ uri: product.imageUri }} style={styles.heroImage} />
                        : <Image source={require('../../../assets/product_img.png')} style={styles.heroImage} />
                    }

                    <View style={styles.overlayCard}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.subtitle}>{product.brand} • {product.category}</Text>

                        {/* <View style={styles.tags}>
                            {product.routines.map(r => (
                                <Text key={r} style={styles.tag}>{r}</Text>
                            ))}

                        </View> */}

                        <View style={styles.tags}>
                            
                            <Text  style={styles.tag}>{product.category}</Text>
                         
                        </View>

                        <Text style={styles.notes}>{product.notes}</Text>

                        <View style={styles.dateGrid}>
                            <View style={styles.dateBox}>
                                <Text style={styles.dateLabel}>Opened on:</Text>
                                <Text style={styles.dateValue}>
                                    {formatDate(product.openedOnDate)}
                                </Text>
                            </View>

                            <View style={styles.dateBox}>
                                <Text style={styles.dateLabel}>Expires in: </Text>
                                {product.expiresAfterMonths
                                    ? <Text style={styles.dateValue}>{product.expiresAfterMonths}months</Text>
                                    : <Text style={styles.dateValue}>N/A</Text>
                                }
                                
                            </View>

                            <View style={styles.dateBox}>
                                <Text style={styles.dateLabel}>Added on:</Text>
                                <Text style={styles.dateValue}>{formatDate(product.addedOn)}</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
    },

    image: {
        width: "100%",
        height: 280,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    infoCard: {
        backgroundColor: "#fff",
        margin: 16,
        padding: 18,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 4,
    },

    name: {
        fontSize: 22,
        fontWeight: "700",
        color: '#FF69B4',
    },

    brand: {
        fontSize: 15,
        fontWeight: "500",
        color: "#475569",
        marginTop: 2,
    },

    category: {
        fontSize: 13,
        color: "#94a3b8",
        marginBottom: 12,
    },

    routineContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 16,
    },

    routineBadge: {
        backgroundColor: "#f1f5f9",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#e2e8f0",
    },

    routineText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#0f172a",
    },

    section: {
        marginTop: 12,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#0f172a",
        marginBottom: 6,
    },

    notes: {
        fontSize: 14,
        lineHeight: 22,
        color: "#334155",
    },

    dateRow: {
        fontSize: 13,
        color: "#64748b",
        marginBottom: 3,
    },
    heroImage: {
        width: "100%",
        height: 340,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    overlayCard: {
        marginTop: -60,
        backgroundColor: "#ffffffee",
        marginHorizontal: 16,
        padding: 20,
        borderRadius: 28,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10,
    },

    title: {
        fontSize: 26,
        fontWeight: "800",
        color: '#f376b4',
    },

    subtitle: {
        fontSize: 14,
        color: "#64748b",
        marginBottom: 12,
    },

    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 12,

    },

    tag: {
        backgroundColor: '#f376b4',
        color: "white",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "600",
        fontStyle: 'italic'
    },

    notes: {
        fontSize: 14,
        color: "#334155",
        lineHeight: 22,
        marginBottom: 16,
    },

    dateGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    dateBox: {
        backgroundColor: "#f1f5f9",
        padding: 12,
        borderRadius: 16,
        alignItems: "center",
        width: "30%",
    },

    dateLabel: {
        fontSize: 12,
        color: "#64748b",
    },

    dateValue: {
        fontSize: 13,
        fontWeight: "400",
        color: '#F2BED1',
        textAlign: 'center',
    },

});