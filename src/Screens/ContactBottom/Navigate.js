import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactsScreen from './ContactsScreen';
import ContactPageScreen from './ContactPageScreen';
import ContactPhotosScreen from './ContactPhotosScreen';
import ContactPostScreen from './ContactPostScreen';
import HooksScreen from '../HooksScreen';

const Stack = createStackNavigator();

export default function Navigate() {
    

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name='Contacts' component={ContactsScreen} options={{headerShown: false}} />
                <Stack.Screen name='ContactPageScreen' component={ContactPageScreen} options={{headerShown: false}} />
                <Stack.Screen name='ContactPhotosScreen' component={ContactPhotosScreen} options={{headerShown: true, title: 'Photos'}} />
                <Stack.Screen name='ContactPostScreen' component={ContactPostScreen} options={{headerShown: true, title: 'Post'}} />
                <Stack.Screen name='HooksScreen' component={HooksScreen} options={{headerShown: true, title: 'Hooks'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}