import React, {useCallback, useState} from 'react';
import {Modal, TouchableOpacity, View, Image, StyleSheet} from 'react-native';

const RenderImage = ({item, widthImage}) => {
  const [modalVisible, SetModalVisible] = useState(false);
  return (
    <>
      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity onPress={() => SetModalVisible(false)}>
          <View style={styles.ModalView} />
        </TouchableOpacity>

        <Image style={styles.ModalImage} source={{uri: item.url}} />
      </Modal>
      <TouchableOpacity onPress={() => SetModalVisible(true)}>
        <View style={{width: widthImage / 4, height: widthImage / 4}}>
          <Image
            style={{width: widthImage / 4, height: widthImage / 4}}
            source={{uri: item.url}}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RenderImage;

const styles = StyleSheet.create({
  ModalView: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    opacity: 0.5,
  },
  ModalImage: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
    marginTop: 64,
    position: 'absolute',
  },
});
