import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,
    },
    title: {
        alignItems: 'center',
        margin: 10
    },
    image: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3),
        width: (Dimensions.get('window').width),
        // resizeMode: 'contain',                       // Consider using 'contain' to make sure that the full image is displayed.
    },
});

export default styles;