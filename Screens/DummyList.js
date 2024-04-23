import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon from 'react-native-vector-icons/Entypo';
  
  const DummyList = ({navigation}) => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);
  
    const HandleAddTodo = () => {
      if(todo === ""){
          return;
      }
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
      setTodo('');
    };
  
    const handleDeleteTodo = id => {
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedTodoList);
      
    };
  
    const handleEditTodo = todo => {
        console.log(todo,"todo list ===")
      setEditedTodo(todo);
      setTodo(todo.title);
    };
  
    const HandleUpdateTodo = () =>{
       const updatedTodoList = todoList.map((item)=>{
          if (item.id === editedTodo.id)
           return{...item,title:todo}
          return item
        //   console.log("------>>>>>>>",item)
       });
       setTodoList(updatedTodoList)
          setEditedTodo(null)
          setTodo("")
    }
  
    const renderTodo = ({item, index}) => {
        console.log('im list=====>',index,item)
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
            <TouchableOpacity onPress={() => handleEditTodo(item)}>
              <Icon1 name="playlist-edit" size={25} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
              <Icon1 name="delete" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.TodoView}>
          <Text style={styles.TodotextS}>TODO LIST</Text>
          <View style={styles.todoTypeView}>
            <TextInput
              value={todo}
              onChangeText={setTodo}
              placeholderTextColor="#afadb0"
              placeholder="Enter  Your List"
              style={styles.textinputTo}></TextInput>
  
            {editedTodo ? (
              <TouchableOpacity
                onPress={() => HandleUpdateTodo()}
                style={styles.AddButtonStyle}>
                <Icon name="check" size={20} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => HandleAddTodo()}
                style={styles.AddButtonStyle}>
                <Icon name="plus" size={20} color="black" />
              </TouchableOpacity>
            )}
          </View>
  
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginTop: 40,
              fontWeight: 800,
            }}>
            Today
          </Text>
  
          <FlatList data={todoList}
           renderItem={renderTodo} />
        </View>
      </View>
    );
  };
  
  export default DummyList;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:'yellow',
      // margin:20,
      padding: 30,
      backgroundColor: '#f3f4f8',
    },
    TodoView: {
      // marginLeft: 40,
      // backgroundColor:'red',
      // alignItems: 'center',
    },
    TodotextS: {
      marginTop: 15,
      fontSize: 20,
      textAlign: 'center',
      // marginLeft: 100,
      color: '#585d69',
      fontWeight: 'bold',
    },
    listtext: {
      marginTop: 10,
      fontSize: 20,
      color: '#606060FF',
    },
    todoTypeView: {
      marginTop: 5,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#f3f4f8',
    },
    textinputTo: {
      color: 'black',
      height: hp('5%'),
      backgroundColor: 'white',
      width: wp('70%'),
      borderRadius: 20,
      marginRight: 6,
      // borderColor: 'grey',
      // borderWidth: 0.8,
      marginTop: 30,
      fontSize: 13,
      letterSpacing: 2,
    },
    AddButtonStyle: {
      height: hp('5%'),
      width: wp('10%'),
      // borderWidth: 0.7,
      // borderColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      marginTop: 30,
      marginRight: 5,
    },
  });
  