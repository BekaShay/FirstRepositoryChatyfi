import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderComponent from '../UI/components/HeaderComponent';
import CircleButton from '../UI/components/CircleButton';

const Contacts = () => {
  return (
    <>
      <HeaderComponent
        titleText="Contacts"
        optionSwitch="flex"
        searchSwitch="flex"
        moonSwitch="flex"
        qrSwitch="none"
      />
      <View style={styles.Page}></View>
      <CircleButton logo={<Text style={styles.circleButtonPlus}>+</Text>}/>
    </>
  );
};

const styles = StyleSheet.create({
  NavigateBar: {
    width: '100%',
    height: '50%',
  },
  Page: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 2,
    top: 108,
  },
  circleButtonPlus: {
    fontSize: 36,
    color: 'white',
    position: 'absolute',
    top: 2,
    left: 14,
  },
});

export default Contacts;
