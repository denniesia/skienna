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
	KeyboardAvoidingView,
	Platform,
	ActivityIndicator
} from "react-native";
import { styles } from "../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useCameraPermissions, launchCameraAsync, useMediaLibraryPermissions, launchImageLibraryAsync } from "expo-image-picker";


export default function AddProductScreen() {
	const [status, requestPermission] = useCameraPermissions();
	const [libraryStatus, requestLibraryPermission] = useMediaLibraryPermissions();

	const [name, setName] = useState("");
	const [brand, setBrand] = useState("")
	const [image, setImage] = useState(null);
	const [expiresInMonths, setExpiresInMonths] = useState("")
	const [notes, setNotes] = useState("")

 	if (!status || !libraryStatus) {
      return <ActivityIndicator/>
    }

	if (!status.granted) {
		return (
			<Button
				title="Grant Camera Permission"
				onPress={requestPermission}
			/>
		)
	}

	if (!libraryStatus.granted) {
		return (
			<Button
				title="Grant Photo Permission"
				onPress={requestLibraryPermission}
			/>
		)
	}

	return (
	
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				
				<ScrollView>
					<View style={currStyles.container}>
						<View style={currStyles.topRow}>
							<View>
								<Image 
									source={image ? { uri : image} : require('../../assets/photo_placeholder.jpg')}
									style={currStyles.photo}
							
								/>
								<View style={currStyles.photoBtns}>
									<TouchableOpacity 
										style={currStyles.uploadPhotoBtn}
										onPress={async() => {
											const result = await launchImageLibraryAsync({});

											if (!result.canceled) {
												setImage(result.assets[0].uri)
											}
										}}
									>
										<Text style={currStyles.btnText}>Upload Photo</Text>
									</TouchableOpacity>

									<TouchableOpacity 
										style={currStyles.takePhotoBtn} 
										onPress={async() => {
											const result = await launchCameraAsync({quality: 0.5});
											if (!result.canceled) {
												setImage(result.assets[0].uri);
											}
										}}>
										<Text style={currStyles.btnText}>Take Photo</Text>
									</TouchableOpacity>
								</View>
								
							</View>
							
							<View style={{paddingTop: 20, width: '48%'}}>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Product Name:</Text>
									<TextInput 
										placeholder="Hydrating Cleanser" 
										style={currStyles.input} 
										value={name}
										onChangeText={setName}
									/>
								</View>
								
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Product Brand:</Text>
									<TextInput 
										placeholder="CeraVe" 
										style={currStyles.input} 
										value={brand}
										onChangeText={setBrand}
									/>
								</View>
								
							</View>
						
						</View>

						<View>
							<View style={{paddingTop: 20, width: '100%'}}>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Category:</Text>
									<TextInput placeholder="Cleanser" style={currStyles.input} />
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
									
									<TextInput 
										placeholder="12" 
										style={currStyles.input} 
										keyboardType="numeric"
										value={expiresInMonths}
										onChangeText={setExpiresInMonths}
									/>
									
									
								</View>
								<View style={currStyles.inputCont}>
									<Text style={currStyles.label}>Notes:</Text>
									<TextInput 
										placeholder="CeraVe" 
										style={currStyles.input} 
										value={notes}
										onChangeText={setNotes}
									/>
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
		borderRadius: 20,
	},
	photoBtns: {
		flexDirection: 'row',
		gap: 5,
		marginTop: 5,
	},
	uploadPhotoBtn: {
		padding: 7,
		backgroundColor: 'pink',
		borderRadius: 10,
		
	},
	takePhotoBtn: {
		padding: 7,
		backgroundColor: 'pink',
		borderRadius: 10,
	},
	btnText: {
		color: '#ffff'
	},
	topRow: {
		flexDirection: 'row',
		gap: 10
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
