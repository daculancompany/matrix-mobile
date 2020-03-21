import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal,ActivityIndicator, Colors  } from 'react-native-paper';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HTMLView from 'react-native-htmlview';
const myIcon = <Icon name="circle" size={10} color="#212529" />;

const Loading = ({ ...props }) => (
    <View>
        <Portal>
            <Dialog
                visible={props.visible}
                >
               <Dialog.Title>{props.message} ...</Dialog.Title>
                <Dialog.Content>
                    
                <Text></Text><ActivityIndicator size="large" animating={true} color={theme.colors.color2} />
                </Dialog.Content>
            </Dialog>
        </Portal>
    </View>
);

  
export default memo(Loading);
