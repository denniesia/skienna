import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffff",
	},
	header: {
		paddingTop: 20,
		paddingBottom: 10,
		paddingHorizontal: 20,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	headerContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		color: "#f376b4",
		fontSize: 24,
		fontWeight: "700",
	},
	search: {
		height: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
		paddingHorizontal: 12,
		color: "#FFAAB8",
		fontSize: 18,
		width: "95%",
		borderWidth: 1,
		borderColor: "#F39EB6",
		marginBottom: 12,
	},
	searchBar: {
		alignItems: "center",
	},
	divider: {
		height: 1,
		backgroundColor: "#EDEDED",
		marginVertical: 10,
	},
	iconContainer: {
		flexDirection: "row",
		gap: 28,
	},
	noItemContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
	noItemText: {
		fontSize: 22,
		color: "#555",
		fontWeight: "600",
		marginTop: 10,
	},
	suggestionText: {
		fontSize: 18,
		color: "#F39EB6",
		marginTop: 10,
		textAlign: "center",
		fontWeight: "bold",
		paddingHorizontal: 20,
	},
    containerAdd: {
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
	inputArea: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 8,
		marginBottom: 5,
		borderWidth: 1,
		minHeight: 70,   
		textAlignVertical: 'top',
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
		marginBottom: 10

	},
	cancelBtn: {
		padding: 10,
		width: '40%',
		backgroundColor: '#F2BED1',
		borderRadius: 10,


	},
	saveBtn: {
		padding: 10,
		width: '40%',
		backgroundColor: '#F39EB6',
		borderRadius: 10,
	},
	endBtnText: {
		color: 'white',
		fontSize: 22,
		textAlign: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
	},
	placeholder: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 8,
	},
	placeholderText: {
		fontSize: 14,
		color: '#94a3b8',
		fontWeight: '500',
	},
	picker: {
		width: '100%',
		height: 200,
		borderRadius: 16,
		overflow: 'hidden',
		backgroundColor: '#f1f5f9',
		borderWidth: 2,
		borderColor: '#e2e8f0',
		borderStyle: 'dashed',
	},
});
