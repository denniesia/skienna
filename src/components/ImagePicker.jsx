import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    ActivityIndicator,
} from "react-native";


import { launchImageLibraryAsync, useMediaLibraryPermissions } from "expo-image-picker";



export default function ImagePicker({
    onImagePicked
}) {
    const [ status, requestPermission ] = useMediaLibraryPermissions();

    if (!status) {
        return <ActivityIndicator size="large" />
    }
    if (!status.granted) {
        
        return (
            <View >
                <Text>Library access is required to upload photos.</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    const pickImageHandler = async() => {
        const result = await launchImageLibraryAsync({
            quality: 0.5,
        });

       if (result.canceled) {
            return;
        }

        onImagePicked(result.assets[0].uri);
    }

 return (
        <TouchableOpacity 
            style={styles.uploadPhotoBtn} 
            onPress={pickImageHandler}
        >
            <Text style={styles.btnText}>Upload Photo</Text>
        </TouchableOpacity>



    );
};


const styles = StyleSheet.create({
    uploadPhotoBtn: {
		padding: 7,
		backgroundColor: 'pink',
		borderRadius: 10,
	},
    btnText: {
		color: '#ffff'
	},
});