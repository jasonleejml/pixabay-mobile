import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: (Dimensions.get('window').height/2),
        width: (Dimensions.get('window').width),
        // resizeMode: 'contain',                       // Consider using 'contain' to make sure that the full image is displayed.
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {     
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 50,
        height: 50,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
    },
    buttonDownload: {
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 70,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        backgroundColor: '#0aa847',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    userImage: {
        marginLeft: 20,
        height: 75,
        width: 75,
        borderRadius: 50    
    },
    userInfo: {
        marginLeft: 14,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: "bold",
        color: '#8e9490',
    },
    tagsList: {
        flexDirection: 'row'
    },
    tag: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#e3dfde'
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    stats: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 40,
        borderColor: 'lightgrey',
        borderRightWidth: 1
    }
});

export default styles;