import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {
  AccountLogo,
  ChatsSLogo,
  DevicesLogo,
  FlatButton,
  HelpLogo,
  MoonLogo,
  NotificationsLogo,
  SecurityAndPrivacyLogo,
  StorageLogo,
} from '../assets/iconsFile';
import {MainUser} from '../data/Data';
import HeaderComponent from '../UI/components/HeaderComponent';
import SettingElementButton from '../UI/SettingElementButton';

const Profile = () => {
  return (
    <>
      <HeaderComponent
        titleText="Profile"
        optionSwitch="flex"
        searchSwitch="none"
        moonSwitch="none"
        qrSwitch="flex"
      />
      <View style={styles.Page}>
        <View style={styles.Profile}>
          <View style={styles.PhotoProfile}>
            <Image source={MainUser.imageUri} />
          </View>
          <View style={styles.TextProfile}>
            <Text style={styles.UserNameProfile}>{MainUser.name}</Text>
            <Text style={styles.UserInfoProfile}>{MainUser.shortInfo}</Text>
          </View>
        </View>
        <View style={styles.Setting}>
          
            <SettingElementButton
              logo={<MoonLogo color="#5C33CF" />}
              title="Dark mode"
              info=""
              event={<Switch style={styles.SwitchS} />}
            />
          
          <View style={{borderBottomWidth: 1, borderBottomColor: '#D2D2D6', marginBottom: 30,}}></View>
          
            <SettingElementButton
              logo={<AccountLogo />}
              title="Account"
              info="Name, City, Phone"
              event={<FlatButton />}
            />
          
          
            <SettingElementButton
              logo={<NotificationsLogo />}
              title="Notifications"
              info=""
              event={<FlatButton />}
            />
          
          
            <SettingElementButton
              logo={<SecurityAndPrivacyLogo />}
              title="Security and Privacy"
              info=""
              event={<FlatButton />}
            />
          

            <SettingElementButton
              logo={<StorageLogo />}
              title="Storage"
              info=""
              event={<FlatButton />}
            />
          
          
            <SettingElementButton
              logo={<ChatsSLogo />}
              title="Account"
              info="Themes and Personalization"
              event={<FlatButton />}
            />
          
          
            <SettingElementButton
              logo={<DevicesLogo />}
              title="Devices"
              info=""
              event={<FlatButton />}
            />
          
          
            <SettingElementButton
              logo={<HelpLogo />}
              title="Help"
              info=""
              event={<FlatButton />}
            />
        </View>
      </View> 
    </>
  );
};

const styles = StyleSheet.create({
  NavigateBar: {
    backgroundColor: 'blue',
    width: '100%',
    height: '50%',
  },
  Page: { //Y
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 2,
    top: 108,
  },
  Profile: { //Y
    position: 'absolute',
    marginLeft: 16,
    marginTop: 60,
    flexDirection: 'row',
  },
  PhotoProfile: { //Y
    backgroundColor: 'blue',
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  TextProfile: { //Y
    marginLeft: 29,
    marginTop: 6,
    flexDirection: 'column',
  },
  UserNameProfile: {
    fontSize: 18,
    lineHeight: 16,
  },
  UserInfoProfile: { //Y
    color: '#707070',
    fontSize: 12,
    lineHeight: 12,
    marginTop: 7,
  },
  Setting: { //Y
    marginTop: 156,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 24,
    paddingRight: 20,
    paddingTop: 33,
    paddingBottom: 33,
  },
  SwitchS: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
});

export default Profile;
