import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import LinearGradient from 'react-native-linear-gradient';

export default function TodayScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View
                style={styles.header}
            >
                <View style={styles.headerContent}>
                    <View style={styles.avatar}></View>
                    <View>
                        <Text style={styles.greeting}>Hey you!</Text>
                        <Text style={styles.dateText}>January 27, Tuesday</Text>
                    </View>
                </View>
            </View>

            {/* Calendar */}
            <CalendarStrip
                scrollable
                style={styles.calendar}
                calendarColor="transparent"
                calendarHeaderStyle={{color: '#F39EB6', fontSize: 20}}
                highlightDateNumberStyle={styles.highlightDateNumber}
                highlightDateNameStyle={styles.highlightDateName}
                dateNumberStyle={styles.dateNumber}
                dateNameStyle={styles.dateName}
                iconContainer={{ flex: 0.1 }}
                selectedDate={new Date()}
            />

            {/* Routine Section */}
            <View style={styles.routineContainer}>
                <View style={styles.routineHeader}>
                    <Text style={styles.routineTitle}>Your daily routine</Text>
                    <TouchableOpacity>
                        <Text style={styles.editButton}>Edit routines </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.routineSubtitle}>
                    Tap on a routine to complete
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        backgroundColor: '#F8F6DF',
    },
    greeting: {
        color: '#F39EB6',
        fontSize: 24,
        fontWeight: '700',
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
