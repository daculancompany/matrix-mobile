/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContextProvider from './src/contexts/ThemeContext';
import BookContextProvider from './src/contexts/BookContext';
import App from './src';
import { theme } from './src/core/theme';
import {name as appName} from './app.json';
import FlashMessage from "react-native-flash-message";



export default function Main() {
  return (
    <ThemeContextProvider>
      <BookContextProvider>
      <PaperProvider>
        <App />
        <FlashMessage position="top" /> 
      </PaperProvider>
      </BookContextProvider>
    </ThemeContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
