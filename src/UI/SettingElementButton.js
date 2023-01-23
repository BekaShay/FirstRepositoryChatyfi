import React from "react";
import { StyleSheet, View, Text } from "react-native";


const SettingElementButton = ({logo, title='', info='', event}) => {
    const infoText = () => {
        if(info) {return <Text style={styles.SettingInfo}>{info}</Text>};
    };
    return (
        <View style = {[styles.SettingBlock, {marginBottom: title=="Dark mode"? 26: 18, marginBottom: title=="Help"? 0: 18,}]}>
            <View style={styles.SettingLogo}>{logo}</View>
            <View style={styles.SettingText}>
                <View>
                    <Text style={styles.Settingtitle}>{title}</Text>
                    {infoText()}
                </View>
            </View>
            <View style={{ flex: 1}}/>
            <View style={styles.SettingEvent}>{event}</View>
        </View>
    );
};

export default SettingElementButton;


const styles = StyleSheet.create({
    SettingBlock: {
        color: 'black',
        marginBottom: 18,
        flexDirection: 'row',
    },
    SettingLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    SettingText: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    SettingInfo: {
        fontSize: 10,
        color: '#8497AF',
    },
    SettingEvent: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});