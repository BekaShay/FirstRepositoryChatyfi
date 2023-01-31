import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../UI/components/HeaderComponent';
import CircleButton from '../../UI/components/CircleButton';
const axios = require('axios').default;
import {ContactController} from '../../apiController';
import { MyContext } from '../../../ContextToken';

const ContactsScreen = ({navigation}) => {
  const [contact, setContact] = useState({});
  const {token, setToken} = useContext(MyContext);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await ContactController.get();
      setContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactPageScreen', item)}>
        <View style={styles.ContactItem}>
          <View style={styles.ContactImage}></View>
          <View style={styles.ContactText}>
            <Text style={styles.ContactTitle}>{item.username}</Text>
            <Text style={styles.ContactInfo}>{item.name}</Text>
          </View>
          <View style={{flex: 1}} />
          <Text style={styles.ContactNumber}>{item.phone}</Text>
        </View>
      </TouchableOpacity>
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
        <TouchableOpacity onPress={() => navigation.navigate('HooksScreen')}>
          <View style={styles.ButtonPostImage}>
            <Text style={styles.ButtonPostTitle}>Hooks</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.ContactListView}>
          <FlatList
            style={styles.FlatList}
            data={contact}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <CircleButton logo={<Text style={styles.circleButtonPlus}>+</Text>} />
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

  ContactListView: {
    marginTop: 12,
  },
  ContactItem: {
    // backgroundColor: '',
    height: 64,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 12,
    paddingTop: 7,
    borderColor: '#8497AF',
    borderTopWidth: 0.2,
  },
  ContactImage: {
    backgroundColor: 'gold',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  ContactText: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  ContactTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  ContactInfo: {
    fontSize: 12,
  },
  ContactNumber: {
    fontSize: 11,
  },
  ButtonPostImage: {
    backgroundColor: '#5C33CF',
    height: 50,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
  ButtonPostTitle: {
    fontSize: 24,
    color: 'white',
  },
});

export default ContactsScreen;
