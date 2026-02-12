import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
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
     title: {
        color: '#f376b4',
        fontSize: 24,
        fontWeight: '700',
    },
})