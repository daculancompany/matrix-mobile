import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
       // resizeMode: 'cover', // or 'stretch'
    },
    container: {
        // backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 40
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        // paddingVertical: 5,
        // paddingHorizontal: 15,
        width: window.width - 30,
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    register: {
        marginBottom: 20,
        width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ffae',
    }
});

