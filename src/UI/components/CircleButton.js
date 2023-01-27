import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CircleButton = ({logo, back = false}) => {
  return (
    <View
      style={[
        styles.CircleButton,
        back ? {left: 20, top: 20} : {right: 26, bottom: 18},
      ]}>
      {logo}
    </View>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  CircleButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#734DDE',
    zIndex: 10,
    position: 'absolute',
    alignItems: 'center',
    padding: 13,
  },
});
