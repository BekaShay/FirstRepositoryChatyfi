import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {AddGroupLogo, FlatButton} from '../assets/iconsFile';
import HeaderComponent from '../UI/components/HeaderComponent';
import CircleButton from '../UI/components/CircleButton';
import {GroupData} from '../data/Data';

const GroupsScreen = () => {
  const Item = ({title = '', shortInfo = '', followers = '', imgUri = ''}) => {
    return (
      <View style={styles.FlatElement}>
        <View style={styles.FlatIcon}>
          <Image source={imgUri} />
        </View>
        <View style={styles.FlatText}>
          <Text style={styles.FlatTitle}>{title}</Text>
          <Text style={styles.FlatShortInfo}>{shortInfo}</Text>
          <Text style={styles.FlatFollowers}>{followers} participands</Text>
        </View>
        <View style={{flex: 1}} />
        <View style={styles.FlatButton}>
          <FlatButton />
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <Item
      title={item.name}
      shortInfo={item.shortInfo}
      followers={item.followers}
      imgUri={item.imageUri}
    />
  );

  return (
    <>
      <HeaderComponent
        titleText="Groups"
        optionSwitch="flex"
        searchSwitch="flex"
        moonSwitch="flex"
        qrSwitch="none"
      />
      <View style={styles.Page}>
        <FlatList
          style={styles.FlatList}
          data={GroupData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <CircleButton logo={<AddGroupLogo />} />
    </>
  );
};

export default GroupsScreen;

const styles = StyleSheet.create({
  NavigateBar: {
    backgroundColor: 'blue',
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
  FlatList: {
    marginTop: 51,
  },
  FlatElement: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 83,
    marginBottom: 15,
    borderRadius: 18,
    padding: 15,
    paddingLeft: 17,
    paddingRight: 31,
    flexDirection: 'row',
  },
  FlatIcon: {
    // backgroundColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 0,
  },
  FlatText: {
    paddingLeft: 24,
    flexDirection: 'column',
  },
  FlatTitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },
  FlatShortInfo: {
    fontSize: 10,
    color: '#8497AF',
    marginBottom: 2,
  },
  FlatFollowers: {
    fontSize: 10,
    color: '#8497AF',
  },
  FlatButton: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
