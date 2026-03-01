import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "../../utils/formatDate";
import ProductCard from "../../components/products/ProductCard";
import { useProducts } from "../../context/products/useProducts";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { confirmDelete } from "../../utils/confirmDelete";
import { useRoutine } from "../../context/routines/useRoutines";
import { useNavigation } from "@react-navigation/native";


export default function RoutineDetails({ route }) {
    const { routine } = route.params;
    const navigation = useNavigation();
    const { products, loading } = useProducts();
    const { deleteRoutine } = useRoutine()

    const handleDelete = () => {
        confirmDelete({
            title: "Delete Routine",
            message: "Are you sure you want to delete this routine?",
            onConfirm: () => deleteRoutine(routine.id)
        })

    };

    const routineGallery = {
        sun: require('../../../assets/sun.png'),
        moon: require('../../../assets/moon.png'),
        faceMask: require('../../../assets/face_mask.png'),
        underEyeMask: require('../../../assets/under_eye.png'),
        special: require('../../../assets/special.png')
    }

    const routineProducts = routine.productIds?.map(id => products.find(p => p.id === id))

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                {routine.imageKey ? (
                    <Image source={routineGallery[routine.imageKey]} style={styles.heroImage} />
                ) : (
                    <Image source={require("../../../assets/product_img.png")} style={styles.heroImage} />
                )}

                <View style={styles.overlayCard}>
                    <View style={styles.cardCont}>
                        <View>

                        
                            <View style= {{flex: 1}}>
                                <Text style={styles.title}>{routine.category}</Text>
                                {routine.name && <Text style={styles.subtitle}>{routine.name}</Text>}
                            </View>

                           
                        </View>
                        <View style={styles.cont}>
                            <TouchableOpacity
                                hitSlop={10}
                                onPress={() => navigation.navigate('Routine Edit', { routine })}
                            >
                                <AntDesign name="edit" size={24} color="#f376b4" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                hitSlop={10}
                                onPress={handleDelete}
                            >
                                <Feather name="trash-2" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                     {routine.notes &&
                                <View>
                                    <Text style={styles.sectionTitle}>Notes: </Text>
                                    <Text style={styles.notes}>{routine.notes}</Text>
                                </View>
                            }
                    

                    <View style={styles.dateGrid}>
                        <View style={styles.dateBox}>
                            <Text style={styles.dateLabel}>Started on:</Text>
                            <Text style={styles.dateValue}>{formatDate(routine.startedOn)}</Text>
                        </View>

                        <View style={styles.dateBox}>
                            <Text style={styles.dateLabel}>Created on: </Text>
                            <Text style={styles.dateValue}>{formatDate(routine.createdOn)}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />
                    <View style={[styles.inputCont]}>
                        <View>
                            <Text style={styles.label}>Routine Products:</Text>

                        </View>

                        {routineProducts
                            ? <FlatList
                                data={routineProducts}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) =>
                                    <ProductCard
                                        product={item}
                                        mode="display"
                                    />}
                                style={{ maxHeight: 300 }}
                                contentContainerStyle={{ paddingBottom: 80 }}
                            />
                            : <Text style={styles.loadingText}>No added products</Text>
                        }

                        {loading && (
                            <Text style={styles.loadingText}>Loading...</Text>
                        )}

                        {!loading && routineProducts.length === 0 && (
                            <Text style={styles.loadingText}>No products added yet</Text>
                        )}
                    </View>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fafc", // lighter, airy background
    },
    overlayCard: {
        marginTop: -100,
        backgroundColor: "#ffffffee",
        marginHorizontal: 16,
        padding: 20,
        borderRadius: 28,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10,
    },
    cardCont: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heroImage: {
        width: "100%",
        height: 340,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    headerText: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#f376b4",
        marginLeft: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#f7a6c3',
        marginTop: 4,
        marginLeft: 10,
        fontStyle: 'italic',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: '#f2aec7',
        marginBottom: 2,
        marginLeft: 10,
    },
    notes: {
        fontSize: 14,
        color: "#6b7280",
        marginLeft: 10,
    },
    dateGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    dateBox: {
        backgroundColor: "#f1f5f9",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 16,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 4,
    },
    dateLabel: {
        fontSize: 12,
        color: "#94a3b8",
        marginBottom: 2,
    },
    dateValue: {
        fontSize: 13,
        fontWeight: "500",
        color: "#f376b4",
        textAlign: "center",
    },

    inputCont: {
        marginTop: 16,
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 14,
        color: "#f376b4",
        marginBottom: 6,
    },
    loadingText: {
        marginTop: 8,
        fontSize: 14,
        color: "#94a3b8",
        textAlign: "center",
    },
    divider: {
        height: 1,
        backgroundColor: "#EDEDED",
        marginTop: 16,
        marginBottom: 3,
    },
    cont: {
       flexDirection: 'row',
       alignItems: 'flex-start',
        gap: 20,
        marginLeft: -34,

    },
});