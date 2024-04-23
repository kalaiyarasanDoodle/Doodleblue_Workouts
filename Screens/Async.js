import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Async = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from AsyncStorage
    const fetchTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        
        }
      } catch (error) {
        console.error('Error fetching tasks', error);
        
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    // Add a new task and save to AsyncStorage
    try {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      console.log('list updated!!',tasks)
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTask('');
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Async;