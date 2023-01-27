import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SecondViewFun from './ContactBottom/Hooks/SecondViewFun';

const HooksScreen = () => {
  const [number, setNumber] = useState(0);

  console.log("HooksScreen", number);

  const PlusNumber = () => {
    let n = number;
    n++;
    setNumber(n);
    console.log('\nNumber:', number, '\n');
  };

  return (
    <View style={styles.MainView}>
      <View style={styles.FirstView}>
        <View style={styles.NumberIndicator}>
          <Text style={styles.Number}>{number}</Text>
        </View>
        <TouchableOpacity onPress={PlusNumber}>
          <View style={styles.ButtonPlusNumber}></View>
        </TouchableOpacity>
      </View>

      <SecondViewFun />

      <View style={styles.ThirdsView}>
        <Text>Thirds</Text>
      </View>
    </View>
  );
};

export default HooksScreen;

const styles = StyleSheet.create({
  MainView: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  FirstView: {
    backgroundColor: 'green',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  NumberIndicator: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    height: 100,
  },
  Number: {
    fontSize: 72,
  },
  ButtonPlusNumber: {
    height: 100,
    width: 100,
    marginTop: 20,
    backgroundColor: 'red',
  },

  ThirdsView: {
    backgroundColor: 'red',
    width: '100%',
    flex: 1,
  },
});
