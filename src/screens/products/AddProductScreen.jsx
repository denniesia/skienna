import {
	Text,
	TextInput,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	Button,
	ActivityIndicator,
	Alert
} from "react-native";
import { styles } from "../../../styles";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useCameraPermissions, launchCameraAsync, useMediaLibraryPermissions, launchImageLibraryAsync } from "expo-image-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../FirebaseConfig";
import CameraCapture from "../../components/CameraCapture";
import ImagePicker from "../../components/ImagePicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import { validateProduct } from "../../utils/validateProduct";
import ProductCategoryModal from "../../components/ProductCategoryModal";
import { productService } from "../../services";

export default function AddProductScreen({ navigation }) {
	const [status, requestPermission] = useCameraPermissions();

	const [name, setName] = useState("");
	const [brand, setBrand] = useState("")
	const [category, setCategory] = useState("")
	const [imageUri, setImageUri] = useState(null);
	const [openedOnDate, setOpenedOnDate] = useState(new Date());
	const [showCalender, setShowCalender] = useState(false);
	const [expiresInMonths, setExpiresInMonths] = useState("")
	const [notes, setNotes] = useState("")

	const [showCategoryModal, setShowCategoryModal] = useState(false);


	if (!status) {
		return <ActivityIndicator />
	}

	if (!status.granted) {
		return (
			<Button
				title="Grant Camera Permission"
				onPress={requestPermission}
			/>
		)
	}

	const addProductHandler = async () => {
		const {isValid, message} = validateProduct({ name, brand, category, openedOnDate, expiresInMonths, notes })

		if (!isValid) {
			Alert.alert("Error", message);
			return;
		}

		try {
			const userId = auth.currentUser.uid;

			let finalImageUri = imageUri;
			if (!imageUri) {
				finalImageUri = Image.resolveAssetSource(require('../../../assets/product_img.png')).uri;
			}

			 await productService.addProduct(userId, {
				name,
				brand,
				imageUri: finalImageUri,
				category,
				openedOnDate,
				expiresInMonths,
				notes
			});

			setName('');
			setBrand('');
			setCategory('');
			setImageUri(null);
			setExpiresInMonths('');

			navigation.goBack();
		} catch (error) {
			console.error('Error adding product', error);
			Alert.alert('Error', 'Failed to add new product')

		}
	}

	const onOpenedOnDateChange = (event, selectedDate) => {
		setShowCalender(false);
		if (selectedDate) {
			setOpenedOnDate(selectedDate);
		}
	};

	return (

		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<KeyboardAwareScrollView
					style={{ flex: 1 }}
					enableOnAndroid
                    extraScrollHeight={20}
				>
						<View style={styles.containerAdd}>
							<View style={styles.topRow}>
								<View>
									<Image
										source={imageUri ? { uri: imageUri } : require('../../../assets/photo_placeholder.jpg')}
										style={styles.photo}
									/>
									<View style={styles.photoBtns}>
										<ImagePicker onImagePicked={setImageUri} />

										<CameraCapture onPhotoTaken={setImageUri} />
									</View>

								</View>

								<View style={{ paddingTop: 20, width: '45%' }}>
									<View style={styles.inputCont}>
										<Text style={styles.label}>Product Name:</Text>
										<TextInput
											placeholder="Hydrating Cleanser"
											style={styles.input}
											value={name}
											onChangeText={setName}
										/>
									</View>

									<View style={styles.inputCont}>
										<Text style={styles.label}>Product Brand:</Text>
										<TextInput
											placeholder="CeraVe"
											style={styles.input}
											value={brand}
											onChangeText={setBrand}
										/>
									</View>
								</View>
							</View>

							<View>
								<View style={{ paddingTop: 20, width: '100%' }}>
									<View style={styles.inputCont} >
										<Text style={styles.label}>Category:</Text>
										<TouchableOpacity onPress={() => setShowCategoryModal(true)}>
											{category
												? <Text placeholder="" style={[styles.input]} >{category}</Text>
												:<Text placeholder="" style={[styles.input, {color: '#848282'}]} >Please choose category</Text>
											}
											
										</TouchableOpacity>
									</View>
									{
										showCategoryModal &&
										<ProductCategoryModal
											visible={showCategoryModal}
											onClose={() => setShowCategoryModal(false)}
											onSelectCategory={(category) => {
                                                    setCategory(category);
													setShowCategoryModal(false);
                                                   
                                                }}
										/>
									}

									<View style={styles.inputCont}>
										<Text style={styles.label}>Routine:</Text>
										<TextInput placeholder="CeraVe" style={styles.input} />
									</View>
									<TouchableOpacity style={styles.inputCont} onPress={() => setShowCalender(true)}>
										<Text style={styles.label}>Opened on:</Text>
										<Text style={styles.input}>
											{openedOnDate.toLocaleDateString()}
										</Text>
										{showCalender &&
											<DateTimePicker
												value={openedOnDate}
												mode="date" 
												display="default"
												onChange={onOpenedOnDateChange}
												color='#F39EB6'
											/>
										}
									</TouchableOpacity>
									<View style={styles.inputCont}>
										<Text style={styles.label}>Expires in (months):</Text>

										<TextInput
											placeholder="12"
											style={styles.input}
											keyboardType="numeric"
											value={expiresInMonths}
											onChangeText={setExpiresInMonths}
										/>

									</View>
									<View style={styles.inputCont}>
										<Text style={styles.label}>Notes:</Text>
										<TextInput
											placeholder="Very good after sunbathing"
											style={styles.inputArea}
											value={notes}
											multiline={true}
											numberOfLines={4}
											onChangeText={setNotes}
										/>
									</View>

								</View>
							</View>

							<View style={styles.buttonRow}>
								<TouchableOpacity style={styles.cancelBtn}>
									<Text style={styles.endBtnText}>Cancel</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.saveBtn} onPress={addProductHandler}>
									<Text style={styles.endBtnText}>Save</Text>
								</TouchableOpacity>
							</View>
						</View>

				</KeyboardAwareScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}


