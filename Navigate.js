import React from 'react';
import Chats from './src/Screens/ChatsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Chats' component={Chats} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}