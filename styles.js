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
     search: {
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        color: "#FFAAB8",
        fontSize: 18,
        width: '95%',
        borderWidth: 1,
        borderColor: '#F39EB6',
        marginBottom: 12,

    },
    searchBar: {
        alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  noItemText: {
    fontSize: 22,
    color: '#555',
    fontWeight: '600',
    marginTop: 10,
  },
  suggestionText: {
    fontSize: 18,
    color: '#F39EB6',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },

})