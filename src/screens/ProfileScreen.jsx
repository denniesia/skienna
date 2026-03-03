import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProfileStat from "../components/ProfileStat";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";
import { useAuth } from "../context/auth/useAuth";
import { MaterialIcons } from '@expo/vector-icons';
import { formatDate } from "../utils/formatDate";
import { useRoutine } from "../context/routines/useRoutines";
import { useProducts } from "../context/products/useProducts";


export default function ProfileScreen() {
    const { logout, user } = useAuth();
    const { routines } = useRoutine();
    const { products } = useProducts();

    const routinesCount = routines.length;
    const productsCount = products.length;

    let routinesDoneCount = 0;
    for (let i = 0; i < routines.length; i++ ) {
        routinesDoneCount += routines[i].done.length;
    }
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.container]}>
                <View style={styles.header}>
                    <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                        <Text style={styles.title}>My Profile</Text>
                        <TouchableOpacity onPress={logout} style={styles.iconButton}>
                            <MaterialIcons name="logout" size={28} color="#f376b4" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider} />

                <View style={currStyles.container}>



                    <View style={currStyles.avatarSection}>
                        <Image source={require('../../assets/profile_pic.jpg')} style={currStyles.avatar} />
                        <Text style={currStyles.name}>{user.email}</Text>
                        
                        <Text style={currStyles.meta}>
                            Member since {formatDate(user.createdAt ?? user.metadata.creationTime)}
                        </Text>
                    </View>

                    <View style={currStyles.statsCard}>
                        <ProfileStat label="Products" value={productsCount} />

                        <ProfileStat label="Routines" value={routinesCount} />

                        <ProfileStat label="Done Routines" value={routinesDoneCount} />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const currStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    avatarSection: {
        alignItems: "center",
        marginBottom: 32,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 48,
        marginBottom: 12,

    },
    name: {
        fontSize: 24,
        fontWeight: "700",
        color: "#f376b4",
    },
    meta: {
        fontSize: 18,
        color: "#f376b4",
        marginTop: 20,
    },
    statsCard: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    stat: {
        flex: 1,
        alignItems: "center",
    },
    statValue: {
        fontSize: 18,
        fontWeight: "700",
        color: "#f376b4",
    },
    statLabel: {
        fontSize: 12,
        color: "#7A7A7A",
        marginTop: 4,
    },
    divider: {
        width: 1,
        backgroundColor: "#EEEEEE",
    },
    
});
