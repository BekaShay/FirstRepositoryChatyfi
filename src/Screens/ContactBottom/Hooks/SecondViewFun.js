import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SecondViewFun = () => {

    const [number2, setNumber2] = useState(0);
    
    console.log("SecondViewFun", number2);

    const PlusNumber2 = () => {
        let n2 = number2;
        n2++;
        setNumber2(n2);
        console.log("\nNumber:",number2,"\n");
    }
    
  return (
    <View style={styles.SecondView}>
      <Text>{number2}</Text>
      <TouchableOpacity onPress={PlusNumber2}>
            <View style={styles.ButtonPlusNumber}>
            </View>
        </TouchableOpacity>
    </View>
  );
};



export default SecondViewFun;

const styles = StyleSheet.create({
  SecondView: {
    backgroundColor: 'blue',
    width: '100%',
    flex: 1,
  },
  ButtonPlusNumber: {
    height: 100,
    width: 100,
    marginTop: 20,
    backgroundColor: 'red'
  },
});
