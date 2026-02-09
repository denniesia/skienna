import {
	Keyboard,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	ScrollView,
	TouchableOpacity
} from "react-native";
import { styles } from "../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


export default function AddProductScreen() {
	const [name, setName] = useState("");
	



	return (
		
			<SafeAreaProvider>
  <SafeAreaView style={styles.container}>

    <View style={currStyles.screenWrapper}>
      <View style={currStyles.card}>
        <Text style={currStyles.title}>Add Product</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <TextInput placeholder="Product ID (e.g. sk-001)" style={currStyles.input} />
          <TextInput placeholder="Product Name" style={currStyles.input} />
          <TextInput placeholder="Brand" style={currStyles.input} />
          <TextInput placeholder="Category (Cleanser, Serum...)" style={currStyles.input} />
          <TextInput placeholder="Image URL" style={currStyles.input} />
          <TextInput placeholder="Routines (morning, evening)" style={currStyles.input} />
          <TextInput placeholder="Opened At (YYYY-MM-DD)" style={currStyles.input} />

          <TextInput
            placeholder="Expires After (months)"
            keyboardType="numeric"
            style={currStyles.input}
          />

          <TextInput
            placeholder="Notes"
            style={[currStyles.input, currStyles.textArea]}
            multiline
          />
        </ScrollView>

        <View style={currStyles.buttonRow}>
          <TouchableOpacity style={currStyles.cancelBtn}>
            <Text style={currStyles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currStyles.saveBtn}>
            <Text style={currStyles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  </SafeAreaView>
</SafeAreaProvider>

	);
}

const currStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: "#F8F6F4", // soft skincare background
    padding: 16,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // Android shadow
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
    color: "#2D2D2D",
  },

  input: {
    backgroundColor: "#F4F4F6",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  textArea: {
    height: 90,
    textAlignVertical: "top",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  saveBtn: {
    flex: 1,
    backgroundColor: "#F39EB6",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  cancelText: {
    fontWeight: "600",
    color: "#555",
  },

  saveText: {
    fontWeight: "700",
    color: "#fff",
  },
});
