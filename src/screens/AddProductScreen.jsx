import {
	Keyboard,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	ScrollView,
	TouchableOpacity,
	Image,
	Button
} from "react-native";
import { styles } from "../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


export default function AddProductScreen() {
	const [name, setName] = useState("");

	return (

		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>

				<View>
					<View style={currStyles.card}>
						<View style={currStyles.container}>

							{/* Top Row: Image (left) + Name/Brand (right) */}
							<View style={currStyles.topRow}>

								{/* LEFT: Product Image + Buttons */}
								<View style={currStyles.imageSection}>
									<Image source={require("../../assets/icon.png")}
										// ''			'imageUri ? { uri: imageUri } : require("../../assets/icon.png")'

										style={currStyles.productImage}
									/>

									<View style={currStyles.imageButtons}>
										<Button title="Add Photo" onPress={() => console.log('image')} />
										<Button title="Remove" onPress={() => console.log('set image')} />
									</View>
								</View>

								{/* RIGHT: Name + Brand */}
								<View style={currStyles.nameBrandSection}>
									<TextInput placeholder="Product Name" style={currStyles.input} />
									<TextInput placeholder="Brand" style={currStyles.input} />
								</View>

							</View>

							{/* Other Fields */}
							{/* <TextInput placeholder="Product ID (e.g. sk-001)" style={currStyles.input} />
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
							/> */}
						</View>


						{/* <View style={currStyles.buttonRow}>
							<TouchableOpacity style={currStyles.cancelBtn}>
								<Text style={currStyles.cancelText}>Cancel</Text>
							</TouchableOpacity>

							<TouchableOpacity style={currStyles.saveBtn}>
								<Text style={currStyles.saveText}>Save</Text>
							</TouchableOpacity>
						</View> */}
					</View>
				</View>

			</SafeAreaView>
		</SafeAreaProvider>

	);
}

const currStyles = StyleSheet.create({


	card: {
		flex: 1,

		borderRadius: 24,
		padding: 10,

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
	container: {
		flexDirection: 'column',
		padding: 16,
	},

	topRow: {
		flexDirection: "row",
		gap: 12,
		marginBottom: 12,
	},

	imageSection: {
		alignItems: "center",
	},

	productImage: {
		width: 120,
		height: 120,
		borderRadius: 10,
		backgroundColor: "#eee",
	},

	imageButtons: {
		marginTop: 8,
		width: 120,
		gap: 6,
	},

	nameBrandSection: {
		flex: 1,
		justifyContent: "center",
	},

	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 8,
		marginBottom: 10,
	},

	textArea: {
		height: 80,
		textAlignVertical: "top",
	},

});
