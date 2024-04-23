import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import googlelogo from '../assets/googleL.png';
import fb_logo from'../assets/Logo_fb.png'

const CustomLoginButtons = ({
  text,
  textStyle,
  onPress,
  buttonstyle,
  LogoImage,
message=false,
  
}) => {
  console.log('hi message',message)
  return (
    <TouchableOpacity  onPress={onPress} style={[styles.textinput, buttonstyle,]}>
      {LogoImage &&  LogoImage }
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomLoginButtons;
const styles = StyleSheet.create({
  textinput: {
    height: hp('6%'),
    width: wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {fontSize: 17, color: 'white', fontWeight: '700'},
  icon: {
    height: hp('3%'),
    width: wp('5%'),
  },
});
