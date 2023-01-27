import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HeaderComponent from '../UI/components/HeaderComponent';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const toDoList = [
  {
    id: '1',
    text: 'Just Do It!',
  },
  {
    id: '2',
    text: 'Again Just Do It!',
  },
];

const ToDo = () => {
  const [isSelected, setSelection] = useState(false);

  const renderItemToDO = ({item}) => {
    return (
      <View style={styles.ToDoView}>
        <BouncyCheckbox 
        size={32}
        fillColor='#5C33CF'
        isChecked={isSelected}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={() => {}} />
        <Text style={[styles.ToDoText,]}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      <HeaderComponent
        titleText="Contacts"
        optionSwitch="flex"
        searchSwitch="flex"
        moonSwitch="flex"
        qrSwitch="none"
      />
      <View style={styles.Page}>
        <FlatList
            style={{margin: 24}}
          data={toDoList}
          renderItem={renderItemToDO}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  Page: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 2,
    top: 108,
  },
  ToDoView: {
    backgroundColor: 'gold',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ToDoText: {
    fontSize: 16,
  },
});
