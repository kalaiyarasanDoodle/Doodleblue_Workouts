import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  View,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import moment from 'moment';

const RenterTodoComponent = ({item,handleEdit, handleDelete,index}) => {

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        // height: hp('10%'),
        justifyContent: 'space-between',
        borderTopWidth: 3,
        elevation: 5,
        borderTopColor: 'red',
        // borderWidth: 0.2,
        borderRadius: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: 16,
            // marginLeft: 30,
            color: 'black',
            fontWeight: '800',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            // marginLeft: 30,
            color: 'black',
            fontWeight: '400',
          }}>
          {moment(item.created_at).format('LLL')}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity onPress={() => handleEdit(item,index)}>
          <Icon1 name="playlist-edit" size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(index)}>
          <Icon1 name="delete" size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenterTodoComponent;

const styles = StyleSheet.create({});
