import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import DialogPage from '../components/Dialog';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import Loading from '../components/Loading';



import {
    emailValidator,
    passwordValidator,
    nameValidator,
} from '../core/utils';
import stylesGlobal from '../styles';
import Service from '../helpers/service';

let arrayErrorHtml = '';



const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [phone, setPhone] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [password2, setPassword2] = useState({ value: '', error: '' });
    const [dialog, setDialog] = useState({ value: false, data: [] });
    const [spinner, setSpinner] = useState(false);



    const _onSignUpPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        setSpinner(true);
        Keyboard.dismiss();

        let parameter = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            password: password.value
        };


        Service.register(parameter).then(function (result) {
            setName({ value: '', error: '' });
            setEmail({ value: '', error: '' });
            setPassword({ value: '', error: '' });
            setPhone({ value: '', error: '' });
            setSpinner(false);
            showMessage({
                message: "Success Notifcation",
                description: "Sucessfully registered.",
                type: "success",
                icon: "success",
                position: "top",
                animated: true,
                autoHide: true,
                duration: 2500,
            });
            navigation.navigate('LoginScreen');
        }).catch(function (error) {
            arrayErrorHtml = '';
            let errorArray = [];
            let arrayError = [];
            arrayErrorHtml += '<ul className="ulRegister">';
            if (error.response.data.length > 0) {
                let array = error.response.data;
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    //console.log(element);
                    let error_data = array[index].errors;
                    let label_data = array[index].label;
                    errorArray.push(label_data);
                    //arrayError.push("Eror #" + index + ", "+label_data);

                    //setDialog({ ...dialog, value: true, data: arrayError });
                    for (let index2 = 0; index2 < error_data.length; index2++) {
                        //arrayError.push(label_data+' - '+ error_data[index2]+'');
                        //console.log(error_data[index2]);
                        //<li><strong '++'>' + label_data + '</strong> - <p>' + error_data[index2] + '' + '</p></li>
                        arrayErrorHtml += "<li><strong >" + label_data + "</strong> - <p>"+ error_data[index2] + "</p></li>";

                    }

                } console.log(arrayErrorHtml);
                arrayErrorHtml += '</ul>';
                setSpinner(false);
                setDialog({ ...dialog, value: true });
            }
        });

    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />
            <View style={stylesGlobal.container}>
                <Logo />

                <Header>Create Account</Header>
                <DialogPage
                    dialog={dialog}
                    message={arrayErrorHtml}
                    title={'Please complete following'}
                    closeButton={'Close'}
                    closeAction={() => setDialog({ ...dialog, value: false, data: [] })}
                />
                <Loading
                    visible={spinner}
                    message={"Submitting"}
                    title={'Please complete following'}
                />
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={text => setName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                />

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

                <TextInput
                    label="Phone"
                    returnKeyType="next"
                    value={phone.value}
                    onChangeText={text => setPhone({ value: text, error: '' })}
                    error={!!phone.error}
                    errorText={phone.error}
                    placeholder="+121255551212"
                />

               <TextInput
                    label="Company Name"
                    returnKeyType="next"
                />

                <TextInput
                    label="Street Address-1"
                    returnKeyType="next"
                />

                <TextInput
                    label="Street Address-2"
                    returnKeyType="next"
                />

                <TextInput
                    label="Zip-code/Postcode"
                    returnKeyType="next"
                />

                <TextInput
                    label="City"
                    returnKeyType="next"
                />


                <TextInput
                    label="State"
                    returnKeyType="next"
                />

                

                {/* <TextInput
                    label="Repeat password"
                    returnKeyType="done"
                    value={password2.value}
                    onChangeText={text => setPassword2({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                /> */}


                <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
                    Sign Up
                </Button>

                <View style={styles.row}>
                    <Text style={styles.label}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background >
    );
};

const styles = StyleSheet.create({

    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default memo(RegisterScreen);
