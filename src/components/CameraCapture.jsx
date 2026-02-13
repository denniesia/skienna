import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Button,
	ActivityIndicator,
} from "react-native";

import { launchCameraAsync, launchImageLibraryAsync, useCameraPermissions } from "expo-image-picker";



export default function CameraCapture({
    onPhotoTaken
}) {
    const [status, requestPermission] = useCameraPermissions();

    if (!status) {
        return <ActivityIndicator size="large" />
    }
    if (!status.granted) {
        
        return (
            <View style={styles.permissionContainer}>
                <Text style={styles.permissionText}>Camera access is required to take photos.</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    const takePhotoHandler = async() => {
        const result = await launchCameraAsync({
            quality: 0.5, 
        });


        if (!result.canceled) {
            if (onPhotoTaken) {
                onPhotoTaken(result.assets[0].uri);
            }
        }
    }   

 return (
        <TouchableOpacity 
            style={styles.takePhotoBtn} 
            onPress={takePhotoHandler}>
            <Text style={styles.btnText}>Take Photo</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {},
    cameraButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#e0e7ff',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    cameraButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6366f1',
    },
    permissionText: {
        fontSize: 14,
        color: '#64748b',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    cameraControls: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        padding: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
    },
    bottomControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingBottom: 40,
    },
    spacer: {
        width: 50,
    },
    captureButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonInner: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: '#fff',
    },
    flipButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    takePhotoBtn: {
		padding: 7,
		backgroundColor: 'pink',
		borderRadius: 10,
	},
    btnText: {
		color: '#ffff'
	},
});