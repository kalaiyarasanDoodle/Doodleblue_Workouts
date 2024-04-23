import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  View,
  StatusBar,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import RenterTodoComponent from '../../Src/Components/TodolistComponents/RenterTodoComponent';
//Async stroge
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {string} from 'yup';

// Redux
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addTodoList} from './Slices/TodoSlice';
import {addfunc} from './Slices/TodoSlice';

const ReduxHome = ({navigation}) => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  const dispatch = useDispatch();
  const reduxRenderList = useSelector(state => state.kalai);

  // console.log('todos valuessss----->', reduxRenderList);

  // const onSubmitTask = () => {
  //   if (todo.trim().length === 0) {
  //     Alert.alert(' please enter the task ');
  //     setTodo('');
  //     return;
  //   }
  //   dispatch({
  //     task: task,
  //   });
  //   setTodo('');
  // };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('todo');
        if (storedTasks !== null) {
          setTodoList(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, []);

  const HandleAddTodo = async index => {
    // console.log('indexxxx --->>>>>>>', index);
    try {
      if (todo === '') {
        return;
      }
      const id_gen = Math.random().toString(10).slice(2);
      const time=moment()
      const updateAsyncTask = [
        ...todoList,
        {create_at: time, title: todo, id: id_gen},
      ];
      console.log('id here=======>', updateAsyncTask[updateAsyncTask.length - 1]);
      await AsyncStorage.setItem('todo', JSON.stringify(updateAsyncTask));
      dispatch(addfunc({create_at:time,id:id_gen, title:todo}));
      setTodoList(updateAsyncTask);
      setTodo('');
      Keyboard.dismiss();
    } catch (error) {
      console.error('Error adding item and saving list:', error);
    }
  };

  const handleDeleteTodo = async index => {
    try {
      let updatedTodoList = [...todoList];
      updatedTodoList.splice(index, 1);
      setTodoList(updatedTodoList);
      await AsyncStorage.setItem('todo', JSON.stringify(updatedTodoList));
    } catch (error) {
      console.error('set error while deled after store :', error);
    }
  };

  const handleEditTodo = (item, index) => {
    setTodo(item.title);
    setEditedTodo(true);
    setItemIndex(index);
    // console.log('item oda id ', index);
  };

  const handleUpdateTodo = async () => {
    try {
      if (todo !== null) {
        const copyArray = [...todoList];
        let updateindexitem = copyArray[itemIndex];
        console.log('copied item===>', updateindexitem);
        updateindexitem['title'] = todo;
        await AsyncStorage.setItem('todo', JSON.stringify(copyArray));
        setTodoList(copyArray);
        setTodo('');
        setEditedTodo(false);
        Keyboard.dismiss();
      }
    } catch (error) {
      console.error('set error update:', error);
    }
  };

  const renderTodoSingleItem = ({item, index}) => {
    // console.log(" props log ===",props)
    return (
      <RenterTodoComponent
        item={item}
        index={index}
        // props={item.title,index}
        handleEdit={() => handleEditTodo(item, index)}
        handleDelete={handleDeleteTodo}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.TodoView}>
        <Text style={styles.TodotextS}>TODO LIST - REDUX_</Text>
        <View style={styles.todoTypeView}>
          <TextInput
            // key={id.toString()}
            value={todo}
            onChangeText={setTodo}
            placeholderTextColor="#afadb0"
            placeholder="Enter  Your List"
            onSubmitEditing={Keyboard.dismiss}
            style={styles.textinputTo}></TextInput>

          {editedTodo ? (
            <TouchableOpacity
              onPress={() => handleUpdateTodo()}
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

        <FlatList
          data={reduxRenderList}
          keyExtractor={item => item.id}
          renderItem={renderTodoSingleItem}
        />
      </View>
    </View>
  );
};

export default ReduxHome;

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
