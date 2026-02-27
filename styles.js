import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffff",
	},
	header: {
		paddingTop: 20,
		paddingBottom: 2,
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
		padding: 10,
	},
	photo: {
		width: 180,
		height: 180,
		borderRadius: 20,
	},
	photoBtns: {
		flexDirection: "row",
		gap: 5,
		marginTop: 5,
	},
	uploadPhotoBtn: {
		padding: 7,
		backgroundColor: "pink",
		borderRadius: 10,
	},

	btnText: {
		color: "#ffff",
	},
	topRow: {
		flexDirection: "row",
		gap: 10,
	},
	inputCont: {
		marginBottom: 10,
	},
	label: {
		color: "#FF69B4",
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
		textAlignVertical: "top",
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 10,
		marginBottom: 10,
	},
	cancelBtn: {
		padding: 10,
		width: "40%",
		backgroundColor: "#F2BED1",
		borderRadius: 10,
	},
	saveBtn: {
		padding: 10,
		width: "40%",
		backgroundColor: "#F39EB6",
		borderRadius: 10,
	},
	endBtnText: {
		color: "white",
		fontSize: 22,
		textAlign: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	placeholder: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	},
	placeholderText: {
		fontSize: 14,
		color: "#94a3b8",
		fontWeight: "500",
	},
	picker: {
		width: "100%",
		height: 200,
		borderRadius: 16,
		overflow: "hidden",
		backgroundColor: "#f1f5f9",
		borderWidth: 2,
		borderColor: "#e2e8f0",
		borderStyle: "dashed",
	},

	card: {
		width: '90%',
		alignSelf: "center",
		flexDirection: "row",
		backgroundColor: "#FFFFFF",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "#F2BED1",
		paddingHorizontal: 12,
		marginBottom: 10,
		
		// iOS shadow
		shadowColor: "#000",
		shadowOpacity: 0.06,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 4 },
	},
	image: {
		width: 100,
		height: 100,
		marginVertical: 5,
		borderRadius: 12,
		backgroundColor: "#F4F4F4",
	},
	info: {
		flex: 1,
		marginLeft: 12,
		justifyContent: "center",
	},
	name: {
		fontSize: 18,
		fontWeight: "600",
		color: "#f376b4",
	},
	meta: {
		fontSize: 14,
		color: "#7A7A7A",
		marginTop: 2,
	},
	metaCategory : {
		width: '40%',
		marginTop: 6,
        backgroundColor: '#f376b4',
        color: "white",
        padding: 2,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "600",
        fontStyle: 'italic',
        textAlign: 'center',

	},
	loadingText: {
		marginTop: 12,
		alignSelf: "center",
		fontSize: 18,
		color: "#F39EB6",
		fontWeight: "600",
		letterSpacing: 0.5,
	},
	errorBanner: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FEF2F2",   // very soft red
        borderLeftWidth: 4,
        borderLeftColor: "#DC2626",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 6,
        gap: 5,
    },
    errorIcon: {
        marginRight: 8,
    },
    errorBannerText: {
        flex: 1,                  
        color: "#B91C1C",
        fontSize: 14,
        lineHeight: 18,
    },
	iconButton : {
        alignSelf: 'flex-start',
        marginLeft: 60,
        paddingTop: 10
    },
	iconButtonAdd : {
		
        paddingTop: 10
	},
	overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // darker overlay for focus
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContainer: {
        width: '75%',
        backgroundColor: '#fff', // clean white background
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, // Android shadow
    },
	modalContainerWide : {
		width: '95%',
        backgroundColor: '#fff', // clean white background
        borderRadius: 15,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, // Android shadow
	},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#FF69B4',
    },
	 routineName: {
        fontSize: 14,
        color: '#F2BED1',
        marginTop: 2,
        fontStyle: 'italic'
    },
    routineNotes: {
        fontSize: 12,
        marginTop: 2,
        color: '#8d8b8bcc',
    }
});
