import {StyleSheet, Text, View, SectionList} from 'react-native';
import React from 'react';

const NativeSectionList = () => {
  const newTaskData = [
    {
      title: 'New Tasks',
      data: [
        {
          id: '1',
          task: 'UI',
        },
        {
          id: '2',
          task: 'Validation manual',
        },
        {
          id: '3',
          task: 'Validation using Formik',
        },
        {
          id: '4',
          task: 'TodoList',
        },
        {
          id: '5',
          task: 'Flatlist',
        },
      ],
    },
  ];
  const completedTaskData = [
    {
      title: 'Completed Tasks',
      data: [
        {
          id: '6',
          task: 'learn the Basics',
        },
        {
          id: '7',
          task: 'Props and States',
        },
        {
          id: '8',
          task: 'Flatlist Props',
        },
        {
          id: '9',
          task: 'Section list Workout',
        },
        {
          id: '10',
          task: 'WORKED !!!!!',
        },
        
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Selection List</Text>
      <SectionList
        sections={[...newTaskData, ...completedTaskData]}
        renderSectionHeader={({section})=>(
          <Text style={styles.taskTitle}>{section.title}</Text>)}
        renderItem={({item}) => (
          <Text style={styles.itemRenderS}>{item.task}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NativeSectionList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  itemRenderS:{
    backgroundColor: 'red',
              borderRadius: 5,
              padding: 10,
              margin: 10,
  },
  taskTitle:{
    backgroundColor:'green',
    padding:10,
  }
});
