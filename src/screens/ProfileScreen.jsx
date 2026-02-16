import { View, Text, StyleSheet, Image } from "react-native";
import ProfileStat from "../components/ProfileStat";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";

export default function ProfileScreen() {
    // Later these can come from state / backend
    const user = {
        name: "Jane Doe",
        gender: "Female",
        memberSince: "Jan 2025",
        avatar: "https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg",
        productsCount: 5,
        routinesCount: 3,
        routinesDone: 42,
    };

    return (
        <SafeAreaProvider>
             <SafeAreaView style={[styles.container]}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                            {/* Title */}
                            <Text style={styles.title}>My Profile</Text>
                        </View>
                    </View>
                     <View style={styles.divider} />

                     <View style={currStyles.container}>
                        {/* Avatar */}
                        <View style={currStyles.avatarSection}>
                            <Image source={require('../../assets/profile_pic.jpg')} style={currStyles.avatar} />
                            <Text style={currStyles.name}>{user.name}</Text>
                            <Text style={currStyles.meta}>
                                {user.gender}
                            </Text>
                            <Text style={currStyles.meta}>
                                Member since {user.memberSince}
                            </Text>
                        </View>

                        {/* Stats */}
                        <View style={currStyles.statsCard}>
                            <ProfileStat label="Products" value={user.productsCount} />

                            <ProfileStat label="Routines" value={user.routinesCount} />

                            <ProfileStat label="Done" value={user.routinesDone} />
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
        width:150,
        height: 150,
        borderRadius: 48,
        marginBottom: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: "700",
        color: "#F39EB6",
    },
    meta: {
        fontSize: 18,
        color: "#e8a7ba",
        marginTop: 4,
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
        color: "#F39EB6",
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
