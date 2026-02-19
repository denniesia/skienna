import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from '../../styles';

import { useCurrentDate } from '../hooks/useCurrentDate';


export default function TodayScreen() {
    const today = useCurrentDate();

    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const weekday = today.toLocaleString("en-US", { weekday: "long" });
    return (
        <SafeAreaProvider>


            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View
                    style={styles.header}
                >
                    <View style={styles.headerContent}>
                        <Image source={require('../../assets/profile_pic.jpg')} style={currStyles.avatar} />
                        <View>
                            <Text style={styles.title}>Hey you!</Text>
                            <Text style={currStyles.dateText}>{day} {month}, {weekday}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.divider}
                    accessible={false}
                    importantForAccessibility="no"
                />
                {/* Calendar */}
                <CalendarStrip
                    scrollable
                    style={currStyles.calendar}
                    calendarColor="transparent"
                    calendarHeaderStyle={{ color: "#f376b4", fontSize: 20 }}
                    highlightDateNumberStyle={currStyles.highlightDateNumber}
                    highlightDateNameStyle={currStyles.highlightDateName}
                    dateNumberStyle={currStyles.dateNumber}
                    dateNameStyle={currStyles.dateName}
                    iconContainer={{ flex: 0.1 }}
                    selectedDate={new Date()}
                />
                <View
                    style={styles.divider}
                    accessible={false}
                    importantForAccessibility="no"
                />

                {/* Routine Section */}
                <View style={currStyles.routineContainer}>
                    <View style={currStyles.routineHeader}>
                        <Text style={currStyles.routineTitle}>Your daily routines</Text>
                    </View>
                    <Text style={currStyles.routineSubtitle}>
                        Tap on a routine to complete
                    </Text>

                    {/* <View>
                        {routines
                            ?
                            <Text>there are some routines</Text>
                            :
                            <Text>No routines</Text>
                        }
                    </View> */}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const currStyles = StyleSheet.create({
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#F8F6DF',
    },

    dateText: {
        color: '#8a8a8acc',
        fontSize: 15,
        marginTop: 2,
        fontStyle: 'italic'
    },
    calendar: {
        height: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginHorizontal: 15,
    },
    dateNumber: {
        color: '#8a8a8acc',
        fontSize: 18,
        fontWeight: '600',
    },
    dateName: {
        color: '#8a8a8acc',
        fontSize: 12,
        fontWeight: '500',
    },
    highlightDateNumber: {
        color: "#f376b4",
        fontSize: 18,
        fontWeight: '700',
    },
    highlightDateName: {
        color: "#f376b4",
        fontSize: 12,
        fontWeight: '600',
    },
    routineContainer: {
        marginHorizontal: 25,
        marginTop: 10,
    },
    routineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    routineTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#f376b4',
    },
    editButton: {
        color: '#FF69B4',
        fontWeight: '600',
    },
    routineSubtitle: {
        marginTop: 5,
        color: '#FF69B4',
        fontSize: 14,
    },
});
