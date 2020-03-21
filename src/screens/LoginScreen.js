import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Keyboard } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import Service from '../helpers/service';
import 'localstorage-polyfill';
import { showMessage, hideMessage } from "react-native-flash-message";
import stylesGlobal from '../styles';
import Loading from '../components/Loading';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setloading] = useState({ text: 'Login', value: false});
    const [spinner, setSpinner] = useState(false);

    const _onLoginPressed = () => {
        Keyboard.dismiss();
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        setSpinner(true);

        let parameter = {
            username: email.value,
            password: password.value
        };

        setloading({ text: 'Checking', value: true});
        Service.checkLogin(parameter).then(function (result) {
            setSpinner(false);
            localStorage.setItem('loginDetails', JSON.stringify(result.data));
            navigation.navigate('Dashboard');
        }).catch(function (error) {
            showMessage({
                message: "Eror Notifcation",
                description: "Invalid credentials provided.",
                type: "danger",
                icon: "danger",
                position: "top",
                animated: true,
                autoHide: true,
                style: styles.flashStyle,
                duration: 2500,

            });
            setSpinner(false);
            // console.log('Error List : '+error);
        });

    };

    return (
     
        <Background> 
               <Loading
                   visible={spinner}
                   message={"Checking"}
                />
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
                <View style={stylesGlobal.container}>
                    <Logo />
                    <Header>Welcome back.</Header>
                    <TextInput
                        label="Email"
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={text => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Password"
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={text => setPassword({ value: text, error: '' })}
                        error={!!password.error}
                        errorText={password.error}
                        secureTextEntry
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPasswordScreen')}
                        >
                            <Text style={styles.label}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Button  mode="contained" onPress={_onLoginPressed}>
                        Login
                    </Button>
                    <View style={styles.row}>
                        <Text style={styles.label}>Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={styles.link}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 40
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    flashStyle: {
        marginTop: 0
    },
});

export default memo(LoginScreen);
