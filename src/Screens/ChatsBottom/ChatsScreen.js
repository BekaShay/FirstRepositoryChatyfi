import React from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import {AddChatLogo} from '../../assets/iconsFile';
import {GroupData, UsersData} from '../../data/Data';
import CircleButton from '../../UI/components/CircleButton';
import HeaderComponent from '../../UI/components/HeaderComponent';

const AllData = GroupData.concat(UsersData);

const ChatsScreen = () => {
  const StatusItem = ({item}) => {
    const live = item.stream ? (
      <View style={styles.StatusLiveBlock}>
        <Text style={styles.StatusLive}>LIVE</Text>
      </View>
    ) : null;
    if (item.status)
      return (
        <View style={styles.StatusElement}>
          <View style={styles.StatusImmageBorder}>
            <Image style={styles.StatusImage} source={item.imageUri} />
          </View>
          {live}
          <Text style={styles.StatusTitle}>{item.name}</Text>
        </View>
      );
  };

  const MessageItem = ({item}) => {
    const message = item.message ? (
      <View style={styles.MessageCountBox}>
        <Text style={styles.MessageCount}>{item.message}</Text>
      </View>
    ) : null;

    const onlineI = item.online?<View style={styles.Online}></View>:null;

    if(item.messageBool) return (
      <View style={styles.MessageItem}>
        <View style={styles.MessageImage}>
          <Image source={item.imageUri} />
          {onlineI}
        </View>
        <View style={styles.MessageText}>
          <Text style={styles.MessageTitle}>{item.name}</Text>
          <Text style={styles.MessageInfo}>{item.shortInfo}</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.MessageNoti}>
          <Text style={styles.MessageTIme}>{item.LastMessageTime}</Text>
          {message}
        </View>
      </View>
    );
  };

  return (
    <>
      <HeaderComponent
        titleText="Chatify"
        optionSwitch="flex"
        searchSwitch="flex"
        moonSwitch="flex"
        qrSwitch="none"
      />
      <View style={styles.Page}>
        <View style={styles.HorizontalFlatList}>
          <FlatList
            // style={styles.FlatList}
            horizontal={true}
            data={AllData}
            renderItem={StatusItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.Line}></View>
        <View style={styles.MessageList}>
          <FlatList
            // style={styles.FlatList}
            data={AllData}
            renderItem={MessageItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <CircleButton logo={<AddChatLogo />} />
    </>
  );
};

const styles = StyleSheet.create({
  Online: {
    backgroundColor: '#4CE417',
    height: 9.72,
    width: 9.72,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    right: 0.28,

  },
  MessageList: {
    // backgroundColor: 'green',
    width: '100%',
    height: 500,
    marginTop: 163,
    position: 'absolute',
  },
  MessageItem: {
    // backgroundColor: 'silver',
    height: 67,
    width: '100%',
    flexDirection: 'row',
    paddingRight: 16,
  },
  MessageImage: {
    // backgroundColor: 'gold',
    width: 49,
    height: 49,
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 10,
    borderRadius: 25,
  },
  MessageText: {
    // backgroundColor: 'blue',
    flexDirection: 'column',
    width: 189,
    paddingLeft: 26,
  },
  MessageTitle: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 16,
  },
  MessageInfo: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 10,
    lineHeight: 12,
    color: '#999CA0',
  },
  MessageNoti: {
    // backgroundColor: 'green',
    marginTop: 8,
  },
  MessageTIme: {
    fontSize: 10,
    lineHeight: 16,
    color: '#8497AF',
    marginBottom: 11,
  },
  MessageCountBox: {
    backgroundColor: '#734DDE',
    height: 20,
    width: 31,
    alignSelf: 'flex-end',
    borderRadius: 10,
    alignItems: 'center',
  },
  MessageCount: {
    fontSize: 10,
    lineHeight: 16,
    color: '#FFFFFF',
  },

  StatusElement: {
    // backgroundColor: 'green',
    height: '100%',
    width: 83,
    flexDirection: 'column',
    alignItems: 'center',
  },
  StatusImmageBorder: {
    // backgroundColor: 'blue',
    width: 56,
    height: 56,
    padding: 2,
    borderWidth: 1,
    borderColor: '#9271EF',
    borderRadius: 50,
  },
  StatusImage: {
    height: 50,
    width: 50,
  },
  StatusTitle: {
    fontSize: 12,
    lineHeight: 16,
    position: 'absolute',
    marginTop: 68,
  },
  StatusLiveBlock: {
    backgroundColor: 'red',
    height: 14,
    width: 38,
    borderRadius: 7,
    alignItems: 'center',
    position: 'absolute',
    marginTop: 47,
  },
  StatusLive: {
    color: 'white',
    fontSize: 8,
    marginTop: 3,
  },

  Line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EDEDED',
    marginTop: 148,
    position: 'absolute',
  },

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
  HorizontalFlatList: {
    // backgroundColor: 'grey',
    marginTop: 38,
    marginLeft: 12,
    height: 84,
    width: '115%',
  },
});

export default ChatsScreen;
