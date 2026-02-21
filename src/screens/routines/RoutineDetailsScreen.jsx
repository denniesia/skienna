import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "../../utils/formatDate";

export default function RoutineDetails({ route }) {
    const { routine } = route.params;

    const routineGallery = {
        sun: require('../../../assets/sun.png'),
        moon: require('../../../assets/moon.png'),
        faceMask: require('../../../assets/face_mask.png'),
        underEyeMask: require('../../../assets/under_eye.png'),
        special: require('../../../assets/special.png')
    }

    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    <View style={styles.card}>

                        <View style={styles.headerRow}>
                            {routine.imageKey ? (
                                <Image source={routineGallery[routine.imageKey]} style={styles.thumbnail} />
                            ) : (
                                <Image source={require("../../../assets/product_img.png")} style={styles.thumbnail} />
                            )}
                            <View style={styles.headerText}>
                                <Text style={styles.title}>{routine.category}</Text>
                                {routine.name && <Text style={styles.subtitle}>{routine.name}</Text>}

                            </View>
                        </View>

                        {/* Notes */}
                        {routine.notes &&
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Notes: </Text>
                                <Text style={styles.notes}>{routine.notes}</Text>
                            </View>
                        }

                        {/* Dates */}
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

                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
    },

    card: {
        backgroundColor: "#fff",
        margin: 16,
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 6,
    },

    headerRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
    },

    thumbnail: {
        width: 150,
        height: 150,
        borderRadius: 16,
        marginRight: 5,
        resizeMode: "cover",
    },

    headerText: {
        flex: 1,
        marginTop: 26,
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#f376b4",
        flexWrap: "nowrap",
    },

    subtitle: {
        fontSize: 16,
        color: '#F2BED1',
        marginTop: 4,
        fontStyle: 'italic',
        marginBottom: 6
    },

    routineContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 16,
    },

    routineBadge: {
        backgroundColor: "#ffe4f0",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
    },

    routineText: {
        fontSize: 12,
        fontWeight: "600",
        color: '#F2BED1',
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: '#f2aec7',
        marginBottom: 2,
    },

    notes: {
        fontSize: 14,
        lineHeight: 22,
        color: "#6d6c6ccc",
    },

    dateGrid: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 40,
    },

    dateBox: {
        backgroundColor: "#f1f5f9",
        padding: 10,
        borderRadius: 16,
        alignItems: "center",
        width: "45%",
    },

    dateLabel: {
        fontSize: 12,
        color: "#64748b",
        marginBottom: 2,
    },

    dateValue: {
        fontSize: 13,
        fontWeight: "500",
        color: "#f376b4",
        textAlign: "center",
    },
});