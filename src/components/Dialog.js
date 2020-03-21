import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HTMLView from 'react-native-htmlview';

const myIcon = <Icon name="circle" size={10} color="#212529" />;

const DialogPage = ({ ...props }) => (
    <View>
        <Portal>
            <Dialog
                visible={props.dialog.value}
                onDismiss={""}>
                <Dialog.Title>{props.title}</Dialog.Title>
                <Dialog.Content>
                    <HTMLView
                        value={props.message}
                        stylesheet={styles}
                    />
                    {/* <View >
                        {props.dialog.data.map((item, key) => (
                            <Text key={key} >{myIcon} {item} </Text>)
                        )}
                    </View> */}
                </Dialog.Content>
                <Dialog.Actions>
                    <Button color={theme.colors.defaults} onPress={props.closeAction}>{props.closeButton}</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    </View>
);

const styles = StyleSheet.create({
    strong:{
        fontWeight: "bold" ,
        color:'#636060',
    },
    p:{
      color : '#ff5722',
    }
  });
  
export default memo(DialogPage);
