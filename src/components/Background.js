import React, { memo } from 'react';
import {
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
    View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import stylesGlobal from '../styles';

const Background = ({ children }) => (
    <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="repeat"
        style={stylesGlobal.background}
    >
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'} >
            <View style={styles.container}>
                {children}
            </View>
        </KeyboardAwareScrollView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(Background);
