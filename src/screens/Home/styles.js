import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    homeImage: {
        marginTop: 24,
        width: '100%',
        height: 700,
    },
    searchButton: {
        backgroundColor: 'white',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        top: 50,
        paddingLeft: 25,
        opacity: .75,
    },
    searchText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        width: 300
    },
});

export default styles;