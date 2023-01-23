import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  MoonLogo,
  OptionsLogo,
  QRLogo,
  SearchLogo,
} from '../../assets/iconsFile';

const HeaderComponent = ({
  titleText,
  optionSwitch = 'flex',
  searchSwitch = 'none',
  moonSwitch = 'none',
  qrSwitch = 'none',
}) => {
  return (
    <View style={styles.Header}>
      <View style={styles.HeaderComponentLine1}>
        <Text style={styles.HeaderTitle}>{titleText}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <View style={styles.HeaderComponentLine2}>
        <TouchableOpacity style={[styles.HeaderButton, {display: qrSwitch}]}>
          <QRLogo />
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.HeaderButton, {display: moonSwitch}]}>
          <MoonLogo />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.HeaderButton, {display: searchSwitch}]}>
          <SearchLogo />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.HeaderButton, {display: optionSwitch}]}>
          <OptionsLogo />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#5C33CF',
    width: '100%',
    height: 159,
    zIndex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 64,
    flexDirection: 'row',
  },
  HeaderTitle: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  HeaderComponentLine1: {
    flexDirection: 'row',
    
  },
  HeaderComponentLine2: {
    
    flexDirection: 'row',
  },
  HeaderButton: {
    marginLeft: 20
  },
});
