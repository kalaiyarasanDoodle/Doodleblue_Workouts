import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  error,
  textinputStyle,
}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.lableText}>{label}</Text>
      {}
      <TextInput
        style={styles.textinput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
    // // <Text>{label}</Text>
    // <TextInput
    //   // secureTextEntry={secureTextEntry}
    //   onChangeText={onChangeText}
    //   value={value}
    //   placeholderTextColor={'#677a9e'}
    //   placeholder={placeholder}
    //   style={[styles.textinput, textinputStyle]}>

    // </TextInput>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  conatiner: {flexDirection: 'column', marginBottom: 20},
  textinput: {height: hp('7%'), backgroundColor: '#bcc6d4', width: wp('65%')},
  lableText: {
    right: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});
