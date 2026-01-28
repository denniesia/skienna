import { Text, View, StyleSheet, TextInput } from "react-native";
import { styles } from "../../styles";

export default function ProductsScreen() {
    return (

        <View
            style={styles.header}
        >
            <View style={styles.headerContent}>
                <View style={currStyles.avatar}></View>
                <View>
                    <Text style={styles.title}>Hey you!</Text>
                    
                </View>
            </View>
        </View>

    );
};

const currStyles = StyleSheet.create({
   
    search: {
        height: 44,
        borderRadius: 10,
        backgroundColor: "#1E1E1E",
        paddingHorizontal: 12,
        color: "#FFFFFF",
        marginBottom: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 10,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    subtitle: {
        color: "#9A9A9A",
        fontSize: 13,
        marginTop: 2,
    },
    chevron: {
        color: "#6E6E6E",
        fontSize: 24,
        marginLeft: 8,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#2A2A2A",
    },
});
