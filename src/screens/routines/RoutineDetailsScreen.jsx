import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RoutineDetails({ route }) {
  const { routine } = route.params;
     const formatDate = (date) => new Date(date).toLocaleDateString();


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
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

          {/* Main content card */}
          <View style={styles.card}>

            {/* Thumbnail image + title row */}
            <View style={styles.headerRow}>
              {routine.imageKey ? (
                <Image source={routineGallery[routine.imageKey]} style={styles.thumbnail} />
              ) : (
                <Image source={require("../../../assets/product_img.png")} style={styles.thumbnail} />
              )}
              <View style={styles.headerText}>
                <Text style={styles.title}>{routine.name}</Text>
                <Text style={styles.subtitle}>{routine.category} • {routine.type}</Text>
              </View>
            </View>

        

            {/* Notes */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Notes</Text>
              <Text style={styles.notes}>{routine.notes}</Text>
            </View>

            {/* Dates */}
            <View style={styles.dateGrid}>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>Started</Text>
                <Text style={styles.dateValue}>{formatDate(routine.startedOnDate)}</Text>
              </View>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>Duration</Text>
                <Text style={styles.dateValue}>{routine.durationWeeks} weeks</Text>
              </View>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>Added</Text>
                <Text style={styles.dateValue}>{formatDate(routine.addedOn)}</Text>
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
    alignItems: "center",
    marginBottom: 16,
  },

  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 16,
    marginRight: 12,
    resizeMode: "cover",
  },

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f376b4",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
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
    color: "#a91c71",
  },

  section: {
    marginBottom: 16,
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

  dateGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateBox: {
    backgroundColor: "#f1f5f9",
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    width: "30%",
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