import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';

const axios = require('axios').default;

const PhotosDataUri = 'https://jsonplaceholder.typicode.com/photos';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const ContactPhotosScreen = ({route}) => {
  const [photos, setPhotos] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(PhotosDataUri, {params: {albumId: route.params.id}})
      .then(response => {
        setPhotos(
          response.data,
        );
        setLoading(false);
      })
      .catch(error => {
        console.error('Error: ' + error);
      });
  };

  const renderPhotos = ({item}) => {
    return (
      <View style={{width: widthScreen / 4, height: widthScreen / 4}}>
        <Image
          style={{width: widthScreen / 4, height: widthScreen / 4}}
          source={{uri: item.url}}
        />
      </View>
    );
  };

  return (
    <View>
      <ActivityIndicator style={styles.PhotosIndicator} size="large" color="#5C33CF" animating={loading}/>
      <FlatList
        numColumns={4}
        style={styles.FlatList}
        data={photos}
        renderItem={renderPhotos}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactPhotosScreen;

const styles = StyleSheet.create({
  PhotosIndicator: {
    position: 'absolute',
    top: heightScreen/2,
    left: widthScreen/2,
  },  
});
