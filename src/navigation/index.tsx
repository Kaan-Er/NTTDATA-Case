import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import StackNavigator from './stackNavigator';
import {StatusBar} from 'react-native';
import colors from '../themes/colors';
import AlertBox from '../components/molecules/AlertBox';
import Toast from '../components/molecules/Toast';
import {persistor, store} from '../redux/store';

const NavigationStack = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white.default,
    },
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          backgroundColor={colors.white.default}
          barStyle="dark-content"
        />
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <SafeAreaView style={{flex: 1}}>
              <GestureHandlerRootView style={{flex: 1}}>
                <SafeAreaProvider>
                  <StackNavigator />
                </SafeAreaProvider>
              </GestureHandlerRootView>
            </SafeAreaView>
            <Toast />
            <AlertBox />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default NavigationStack;
