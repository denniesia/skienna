import { Alert } from "react-native";

export const confirmDelete = ({ title, message, onConfirm }) => {
	Alert.alert(title, message, [
		{ text: "Cancel", style: "cancel" },
		{ text: "Delete", style: "destructive", onPress: onConfirm },
	]);
};
