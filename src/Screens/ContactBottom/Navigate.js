import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactsScreen from './ContactsScreen';
import ContactPageScreen from './ContactPageScreen';
import ContactPhotosScreen from './ContactPhotosScreen';
import ContactPostScreen from './ContactPostScreen';
import ProfileScreen from '../Profile/ProfileScreen'
import HooksScreen from '../HooksScreen';
import {useContext} from 'react';
import {MyContext} from '../../../ContextToken';

const Stack = createStackNavigator();

export default function Navigate() {
  const {token, setToken} = useContext(MyContext);
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            component={token?ContactsScreen:ProfileScreen}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}
