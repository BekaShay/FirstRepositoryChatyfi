import React, {useContext, useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import ContextProvider from './ContextToken';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigationScreen from './TabNavigationScreen';
import ContactPhotosScreen from './src/Screens/ContactBottom/ContactPhotosScreen';
import ContactPostScreen from './src/Screens/ContactBottom/ContactPostScreen';
import HooksScreen from './src/Screens/HooksScreen';
import ContactPageScreen from './src/Screens/ContactBottom/ContactPageScreen';
import LoginScreen from './src/Screens/Profile/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BOTTOM_TAB"
            component={TabNavigationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ContactPageScreen"
            component={ContactPageScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ContactPhotosScreen"
            component={ContactPhotosScreen}
            options={{headerShown: true, title: 'Photos'}}
          />
          <Stack.Screen
            name="ContactPostScreen"
            component={ContactPostScreen}
            options={{headerShown: true, title: 'Post'}}
          />
          <Stack.Screen
            name="HooksScreen"
            component={HooksScreen}
            options={{headerShown: true, title: 'Hooks'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
