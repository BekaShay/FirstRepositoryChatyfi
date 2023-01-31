import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import RenderImage from './Components/RenderImage';
import { ContactPhotosController } from '../../apiController';

const axios = require('axios').default;
const API = axios.create();

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const ContactPhotosScreen = ({route}) => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('Rendering');
  useEffect(() => {
    getData();
    }, []);

    const getData = async () => {
      try {
        const response = await ContactPhotosController.get({params: {albumId: route.params.id}});
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

  // const getData = () => {
  //   axios
  //     .get(Urls.ContactPhotosUrl, {params: {albumId: route.params.id}})
  //     .then(response => {
  //       setPhotos(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error: ' + error);
  //     });
  // };

  const RenderItem = ({item}) => {
    const ImageCallBack = useCallback(() => {
      return <RenderImage item={item} widthImage={widthScreen} />;
    }, [item]);
    return <ImageCallBack />;
  };

  return (
    <View>
      <ActivityIndicator
        style={styles.PhotosIndicator}
        size="large"
        color="#5C33CF"
        animating={loading}
      />
      <FlatList
        numColumns={4}
        style={styles.FlatList}
        data={photos}
        renderItem={({item, index}) => {
          return <RenderItem item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactPhotosScreen;

const styles = StyleSheet.create({
  PhotosIndicator: {
    position: 'absolute',
    top: heightScreen / 2,
    left: widthScreen / 2,
  },
});
