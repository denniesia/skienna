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
	Button,
	KeyboardAvoidingView
} from "react-native";
import { styles } from "../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


export default function AddProductScreen() {
	const [name, setName] = useState("");

	return (

		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={currStyles.container}>
						<View style={currStyles.topRow}>
							<View>
								<Image 
									source={require('../../assets/photo_placeholder.jpg')}
									style={currStyles.photo}
							
								/>
								<View style={currStyles.photoBtns}>
									<TouchableOpacity style={currStyles.uploadPhotoBtn}>
										<Text style={currStyles.btnText}>Upload Photo</Text>
									</TouchableOpacity>

									<TouchableOpacity style={currStyles.takePhotoBtn}>
										<Text style={currStyles.btnText}>Take Photo</Text>
									</TouchableOpacity>
								</View>
								
							</View>
							
							<View style={{paddingTop: 20, width: '48%'}}>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Product Name:</Text>
									<TextInput placeholder="Hydrating Cleanser" style={currStyles.input} />
								</View>
								
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Product Brand:</Text>
									<TextInput placeholder="CeraVe" style={currStyles.input} />
								</View>
								
							</View>
						
						</View>

						<View>
							<View style={{paddingTop: 20, width: '100%'}}>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Category:</Text>
									<TextInput placeholder="Hydrating Cleanser" style={currStyles.input} />
								</View>
								
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Routine:</Text>
									<TextInput placeholder="CeraVe" style={currStyles.input} />
								</View>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Opened on:</Text>
									<TextInput placeholder="CeraVe" style={currStyles.input} />
								</View>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Expire in (months):</Text>
									<TextInput placeholder="CeraVe" style={currStyles.input} />
								</View>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Notes:</Text>
									<TextInput placeholder="CeraVe" style={currStyles.input} />
								</View>
								
							</View>
						</View>
						
						<View style={currStyles.buttonRow}>
							<TouchableOpacity style={currStyles.cancelBtn}>
								<Text style={currStyles.endBtnText}>Cancel</Text>
							</TouchableOpacity>

							<TouchableOpacity style={currStyles.saveBtn}>
								<Text style={currStyles.endBtnText}>Save</Text>
							</TouchableOpacity>
						</View> 
					</View>
			</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>

	);
}

const currStyles = StyleSheet.create({
	container: {
		padding: 10
	},
	photo: {
		width: 180,
		height: 180,
		borderRadius: 30,

	},
	photoBtns: {
		flexDirection: 'row',
		gap: 5,
		marginTop: 5,
	},
	uploadPhotoBtn: {
		padding: 10,
		backgroundColor: 'pink',
		borderRadius: 10,
		
	},
	takePhotoBtn: {
		padding: 10,
		backgroundColor: 'pink',
		borderRadius: 10,
	},
	btnText: {
		color: '#ffff'
	},
	topRow: {
		flexDirection: 'row',
		gap: 8
	},
	inputCont: {
		marginBottom: 15,
	},
	label: {
		color: '#FF69B4',
		fontSize: 18,
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 8,
		marginBottom: 5,
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
		marginBottom: 10

	},
	cancelBtn: {
		padding: 10,
		width:'40%',
		backgroundColor: '#F2BED1',
		borderRadius: 10,
	

	},
	saveBtn: {
		padding: 10,
		width:'40%',
		backgroundColor: '#F39EB6',
		borderRadius: 10,
	},
	endBtnText: {
		color: 'white',
		fontSize: 22,
		textAlign: 'center'
	}
	

});
