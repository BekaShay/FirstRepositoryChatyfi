import React, { useContext } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import { MyContext } from '../../../ContextToken';
import HeaderComponent from '../../UI/components/HeaderComponent';

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const {token, setToken} = useContext(MyContext);

  return (
    <>
      <HeaderComponent
        titleText="Profile"
        optionSwitch="none"
        searchSwitch="none"
        moonSwitch="none"
        qrSwitch="none"
      />
      <View style={styles.Page}>
        <View style={styles.Setting}>
          <TextInput
            style={{margin: 24}}
            placeholder="Login"
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={{margin: 24}}
            placeholder="Password"
            onChangeText={onChangePassword}
            value={password}
          />
          <TouchableOpacity
            onPress={() => {
              if (text && password) setToken(true);
            }}>
            <View style={styles.EnterAuth}>
              <Text style={{marginTop: 6, fontSize: 24}}>Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Page: {
    //Y
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 2,
    top: 108,
  },

  EnterAuth: {
    width: '80%',
    height: 48,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'purple',
    marginTop: 24,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
