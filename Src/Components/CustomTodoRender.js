import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const dummyiteams = [
  {
    id: '01',
    title: 'bath',
  },
  {
    id: '02',
    title: 'had breakfast',
  },
];


const HandleAddTodo = () => {
  if (todo === '') {
    return;
  }
  setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
  setTodo('');
};
const CustomTodoRender = ({item}) => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);


  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: hp('10%'),
        width: wp('80%'),
        justifyContent: 'space-between',
        borderTopWidth: 3,
        elevation: 5,
        borderTopColor: 'red',
        // borderWidth: 0.2,
        borderRadius: 10,
        margin: 20,
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
            marginLeft: 30,
            color: 'black',
            fontWeight: '800',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginLeft: 30,
            color: 'black',
            fontWeight: '400',
          }}>
          today
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity>
          <Icon name="playlist-edit" size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTodoRender();
