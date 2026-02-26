import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "../../utils/formatDate";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';



export default function ProductDetailsScreen({ route, navigation }) {
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
                        <View style={styles.overlayCont} >
                            <Text style={styles.title}>{product.name}</Text>
                            <View style={[styles.overlayCont, {gap: 15}]}>
                                <TouchableOpacity 
                                    hitSlop={10}
                                    onPress={() => navigation.navigate('Product Edit', { product })}
                                >
                                    <AntDesign name="edit" size={28} color="#f376b4"  style={{marginRight: 10}}/>
                                </TouchableOpacity>
                                <TouchableOpacity hitSlop={10}>
                                    <Feather name="trash-2" size={28} color="red"  style={{marginRight: 10}}/>
                                </TouchableOpacity>
                            </View>
                           
                            
                        </View>
                        <Text style={styles.subtitle}>{product.brand}</Text>

                        {/* <View style={styles.tags}>
                            {product.routines.map(r => (
                                <Text key={r} style={styles.tag}>{r}</Text>
                            ))}

                        </View> */}

                    
                            
                        <Text  style={styles.tag}>{product.category}</Text>
      
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
                                {product.expiresInMonths
                                    ? <Text style={styles.dateValue}>{product.expiresInMonths} months</Text>
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
    overlayCont: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    tag: {
        width: '30%',
        backgroundColor: '#f376b4',
        color: "white",
        padding: 5,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "600",
        fontStyle: 'italic',
        textAlign: 'center',
    },
    
    notes: {
        fontSize: 14,
        color: "#334155",
        lineHeight: 22,
        marginBottom: 4,
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
        color: '#f376b4',
        textAlign: 'center',
    },

});