import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from '../../styles';


export default function TodayScreen() {
    return (
        <SafeAreaProvider>

        
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View
                    style={styles.header}
                >
                    <View style={styles.headerContent}>
                        <View style={currStyles.avatar}></View>
                        <View>
                            <Text style={styles.title}>Hey you!</Text>
                            <Text style={currStyles.dateText}>January 27, Tuesday</Text>
                        </View>
                    </View>
                </View>

                {/* Calendar */}
                <CalendarStrip
                    scrollable
                    style={currStyles.calendar}
                    calendarColor="transparent"
                    calendarHeaderStyle={{color: '#F39EB6', fontSize: 20}}
                    highlightDateNumberStyle={currStyles.highlightDateNumber}
                    highlightDateNameStyle={currStyles.highlightDateName}
                    dateNumberStyle={currStyles.dateNumber}
                    dateNameStyle={currStyles.dateName}
                    iconContainer={{ flex: 0.1 }}
                    selectedDate={new Date()}
                />

                {/* Routine Section */}
                <View style={currStyles.routineContainer}>
                    <View style={currStyles.routineHeader}>
                        <Text style={currStyles.routineTitle}>Your daily routine</Text>
                        <TouchableOpacity>
                            <Text style={currStyles.editButton}>Edit routines </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={currStyles.routineSubtitle}>
                        Tap on a routine to complete
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const currStyles = StyleSheet.create({

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        backgroundColor: '#F8F6DF',
    },
   
    dateText: {
        color: '#B8DB80',
        fontSize: 16,
        marginTop: 2,
    },
    calendar: {
        height: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginHorizontal: 15,
    },
    dateNumber: {
        color: '#A8DF8E',
        fontSize: 18,
        fontWeight: '600',
    },
    dateName: {
        color: '#A8DF8E',
        fontSize: 12,
        fontWeight: '500',
    },
    highlightDateNumber: {
        color: '#FFAAB8',
        fontSize: 18,
        fontWeight: '700',
    },
    highlightDateName: {
        color: '#FFAAB8',
        fontSize: 12,
        fontWeight: '600',
    },
    routineContainer: {
        padding: 20,
    },
    routineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    routineTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF1493',
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
