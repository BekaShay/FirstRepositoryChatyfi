import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { ContactAlbumsController } from '../../apiController';
import HeaderComponent from '../../UI/components/HeaderComponent';
import { Urls } from './Urls';
const axios = require('axios').default;


const ContactPageScreen = ({navigation, route}) => {
  const [alboms, setAlboms] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await ContactAlbumsController.get({params: {userId: route.params.id}});
      setAlboms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getData = () => {
  //   axios
  //     .get(Urls.ContactAlbumsUrl, {params: {userId: route.params.id}})
  //     .then(response => {
  //       setAlboms(
  //         response.data,
  //       );
  //     })
  //     .catch(error => {
  //       console.error('Error: ' + error);
  //     });
  // };

  const renderAlboms = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactPhotosScreen', item)}>
        <View style={styles.AlbomsItem}>
          <View
            style={{
              borderRadius: 4,
              height: 8,
              width: 8,
              backgroundColor: '#5C33CF',
              marginRight: 8,
            }}></View>
          <Text style={styles.AlbomsTitle}>Album: {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <HeaderComponent
        titleText={route.params.username}
        optionSwitch="flex"
        searchSwitch="flex"
        moonSwitch="flex"
        qrSwitch="none"
      />
      <View style={styles.Page}>
        <TouchableOpacity
          style={styles.ButtonBack}
          onPress={() => navigation.goBack()}>
          <View style={styles.GoBack}>
            <Text style={styles.GoBackTitle}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.ContactInfo}>
          <View style={styles.Text1}>
            <Text style={{fontSize: 20, top: -24}}>{route.params.name}</Text>
            <Text style={{fontSize: 12, top: -20}}>
              Email: {route.params.email}
            </Text>
            <Text style={{fontSize: 12, top: -14}}>
              Address: {route.params.address.city}/{route.params.address.street}
              /{route.params.address.suite}
            </Text>
            <Text style={{fontSize: 12, top: -10}}>
              Company: {route.params.address.city}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, top: -6}}>
                Phone: {route.params.phone}
              </Text>
              <View style={{flex: 1}}></View>
              <Text style={{fontSize: 16, top: -6}}>
                {route.params.website}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactPostScreen')}>
          <View style={styles.ButtonPostImage}>
            <Text style={styles.ButtonPostTitle}>Post</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.ElementFrame}>
          <Text style={styles.Title}>Albums</Text>
          <FlatList
            style={styles.FlatList}
            data={alboms}
            renderItem={renderAlboms}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default ContactPageScreen;

const styles = StyleSheet.create({
  ButtonBack: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  GoBack: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#5C33CF',
    alignItems: 'center',
    paddingTop: 6,
  },
  GoBackTitle: {
    color: 'white',
  },
  AlbomsItem: {
    height: 48,
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  Title: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#5C33CF',
  },

  ContactInfo: {
    // backgroundColor: 'silver',
    height: 100,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  Text1: {
    marginLeft: 28,
    marginTop: 10,
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
  ElementFrame: {
    // backgroundColor: 'green',
    height: '100%',
    width: '100%',
    borderTopWidth: 1.5,
    borderColor: 'black',
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
});
