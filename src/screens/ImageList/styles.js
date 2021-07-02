import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3),
        width: (Dimensions.get('window').width),
        // resizeMode: 'contain',                       // Consider using 'contain' to make sure that the full image is displayed.
    },
    searchButton: {
        backgroundColor: 'lightgrey',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        opacity: .75,
        marginTop: 30,
        marginBottom: 10
    },
    searchText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        width: 300
    },
});

export default styles;