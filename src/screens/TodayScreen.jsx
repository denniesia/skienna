import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { useAuth } from '../context/auth/useAuth';
import { useRoutine } from '../context/routines/useRoutines';
import { useEffect, useState } from 'react';
import RoutineCard from '../components/routines/RoutineCard';
import { formatLocalDate } from '../utils/formatLocalDate';


export default function TodayScreen() {
    const today = useCurrentDate();
    const { logout, user } = useAuth();
    const { routines, loading, updateRoutine } = useRoutine();

    const [selectedDate, setSelectedDate] = useState(today);
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const weekday = today.toLocaleString("en-US", { weekday: "long" });

    const selectedDateString = formatLocalDate(selectedDate.toDate ? selectedDate.toDate() : selectedDate);
    const routinesToShow = routines.filter(routine => {
        const routineStartDate = routine.startedOn.toDate
            ? routine.startedOn.toDate()
            : new Date(routine.startedOn);

        const routineDateString = formatLocalDate(routineStartDate);

        return routineDateString <= selectedDateString;
    });

    const toggleRoutine = async (routine) => {
        const dateToToggle = selectedDateString; 

        let updatedDone;

        if (routine.done?.includes(dateToToggle)) {
            updatedDone = routine.done.filter(date => date !== dateToToggle);
        } else {
            updatedDone = [...(routine.done || []), dateToToggle];
        }

        await updateRoutine(routine.id, { done: updatedDone });
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View
                    style={styles.header}
                >
                    <View style={styles.headerContent}>
                        <Image source={require('../../assets/profile_pic.jpg')} style={currStyles.avatar} />
                        <View>
                            <Text style={styles.title}>Hey {user.displayName}!</Text>
                            <Text style={currStyles.dateText}>{day} {month}, {weekday}</Text>
                        </View>
                        <TouchableOpacity onPress={logout} style={styles.iconButtonTodayScreen}>
                            <MaterialIcons name="logout" size={30} color="#f376b4" />
                        </TouchableOpacity>
                    </View>

                    <View>

                    </View>
                </View>
                <View
                    style={styles.divider}
                    accessible={false}
                    importantForAccessibility="no"
                />
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
                    selectedDate={selectedDate}
                    onDateSelected={(date) => setSelectedDate(date)}
                />
                <View
                    style={styles.divider}
                    accessible={false}
                    importantForAccessibility="no"
                />

                <View style={currStyles.routineContainer}>
                    <View style={currStyles.routineHeader}>
                        <Text style={currStyles.routineTitle}>Your daily routines</Text>
                    </View>

                    {routinesToShow.length > 0
                        ? <FlatList
                            data={routinesToShow}
                            keyExtractor={(item, index) => (item.id != null ? item.id.toString() : index.toString())}

                            renderItem={({ item }) =>
                                <RoutineCard
                                    routine={item}
                                    showCheckbox={true}
                                    isSelected={item.done?.includes(selectedDateString)}
                                    onToggle={() => toggleRoutine(item)}
                                />}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            showsVerticalScrollIndicator={false}
                        />
                        : (
                            <Text style={[styles.noItemText, { fontSize: 20, color: '#8a8a8acc', marginTop: 20 }]}>No routines yet.</Text>
                        )
                    }

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
        marginHorizontal: 20,
        marginTop: 6,
        flex: 1,
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
        marginLeft: 10,
        marginBottom: 10,
    },
    editButton: {
        color: '#FF69B4',
        fontWeight: '600',
    },
    routineSubtitle: {
        marginTop: 3,
        marginBottom: 10,
        color: '#FF69B4',
        fontSize: 14,
        marginLeft: 10,
    },

});
