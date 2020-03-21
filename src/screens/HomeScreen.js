import React, { memo, useContext } from 'react';
import { Text, View, StyleSheet , Dimensions, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import Service from '../helpers/service';
import stylesGlobal from '../styles';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const HomeScreen = ({ navigation }) => { 
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
    
    //console.log(books);
    return (
        <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="repeat"
        style={stylesGlobal.background}
    >
            {/* <View style={styles.containerView}>
                <Text style={styles.centeredText}>I'm centered</Text>
            </View> */}
            <View style={styles.containerView}>
                <Logo />
                <Header>Login Page Design theme{theme.iu}</Header>
                <Paragraph>
                    The easiest way to start with your amazing application.
                </Paragraph>
                <Button mode="contained" icon="login" onPress={() => navigation.navigate('LoginScreen')}>
                    Login
               </Button>
                <Button
                    icon="plus"
                    mode="outlined"
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    Sign Up
                </Button>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    containerView: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1,
        height: screenHeight,
        width: '100%',
        padding: 20,
  },
  
    centeredText: {
        fontSize: 28,
    textAlign: 'center',
    }
})

export default memo(HomeScreen);
