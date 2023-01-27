import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Chats from './src/Screens/ChatsBottom/ChatsScreen';
import Profile from './src/Screens/ProfileScreen';
import Groups from './src/Screens/GroupsScreen';
import {ChatsLogo, ContactsLogo, GroupsLogo, ToDoLogo} from './src/assets/iconsFile';
import {MainUser} from './src/data/Data';
import Navigate from './src/Screens/ContactBottom/Navigate';
import ToDo from './src/Screens/ToDo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: [styles.tabBarS, null],
          tabBarActiveTintColor: '#5C33CF',
          tabBarinactiveTintColor: '#C1CBD7',
          tabBarLabelStyle: [styles.tabBarLabel, null],

          tabBarIcon: ({focused, size, color}) => {
            var iconName;

            if (route.name === 'Chats')
              iconName = <ChatsLogo colorFocus={focused ? true : false} />;
            else if (route.name === 'Groups')
              iconName = <GroupsLogo colorFocus={focused ? true : false} />;
            else if (route.name === 'Contacts')
              iconName = <ContactsLogo colorFocus={focused ? true : false} />;
            else if (route.name === 'ToDo')
              iconName = <ToDoLogo colorFocus={focused ? true : false} />;
            else if (route.name === 'Profile') {
              iconName = (
                <View
                  style={[
                    styles.BorderProfile,
                    focused
                      ? {
                          borderColor: '#6776F8',
                        }
                      : {
                          borderColor: '#FFFFFF',
                        },
                  ]}>
                  <View style={styles.backGr}></View>
                  <Image
                    style={[
                      styles.ProfileImage,
                      focused ? {opacity: 1} : {opacity: 0.5},
                    ]}
                    source={MainUser.imageUri}
                  />
                </View>
              );
            }
            return iconName;
          },
        })}>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Contacts" component={Navigate} />
        <Tab.Screen name="ToDo" component={ToDo} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
  },
  tabBarS: {
    backgroundColor: '#FFFFFF',
    height: 98,
    flexDirection: 'row',
    padding: 20,
  },
  ProfileImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    position: 'absolute',
    top: 2,
    left: 2,
  },
  BorderProfile: {
    // backgroundColor: 'green',
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 15,
    position: 'absolute',
  },
  backGr: {
    backgroundColor: 'grey',
    height: 24,
    width: 24,
    borderRadius: 12,
    position: 'absolute',
    top: 2,
    left: 2,
  },
});

export default App;
