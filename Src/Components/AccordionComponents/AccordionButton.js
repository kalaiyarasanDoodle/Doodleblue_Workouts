import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const AccordionButton = ({Icon, label,onpress ,buttonstyle,LableTextColor}) => {
  return (
    <View style={styles.TouchmainView}>
      <TouchableOpacity onPress={onpress}
       style={styles.touchStyle,buttonstyle}>
        {Icon}
        <Text style={styles.textLableStyle,LableTextColor}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccordionButton;

const styles = StyleSheet.create({
  TouchmainView:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#0050bb',
    backgroundColor: 'white',
  },
  textLableStyle: {
    fontSize: 17,
    color: '#0050bb',
    fontWeight: 'bold',
  },
});
