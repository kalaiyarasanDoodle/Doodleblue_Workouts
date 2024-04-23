import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Cinputs = ({
  lable,
  error,
  value,
  TextinputStyle,
  onChangeText,
  placeholder,
  Icon,
  Icon2,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={{fontSize: 15,marginBottom:5}}>{lable}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#bcc6d4',
          borderRadius: 10,
        }}>
        {Icon}
        <TextInput
        secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={TextinputStyle}></TextInput>
        {Icon2}
        
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Cinputs;

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    color: 'red',
  },
  icon: {
    height: hp('3%'),
    width: wp('5%'),
  },
});
