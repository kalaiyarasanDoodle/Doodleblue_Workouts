import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import LoginPage from './Screens/LoginPage';
import SigninPage from './Screens/SIgninPage';
import LoginScreen from './Screens/LoginScreen';
import ValidationFileds from './Screens/ValidationFileds';
import TodoListHome from './Screens/TodoListHome';
import DummyList from './Screens/DummyList';
import NativeSectionList from './Screens/NativeSectionList';
import AccordianList from './Screens/AccordianList';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// redux
import {Provider} from 'react-redux';
import {Store} from './Screens/ReduxScreens/store';
import ReduxHome from './Screens/ReduxScreens/ReduxHome';
// icon
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from './Src/assets/logo.png';

// class Components
import FirstClassComSC from './Src/ClassComponents/FirstClassComSC';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* 
      <Stack.Screen options={{headerShown:false}} 
         name="LoginPage" component={LoginPage} />  */}

          {/* <Stack.Screen
          options={{headerShown: false}}
          name="SigninPage"
        component={SigninPage}/>  */}

          {/* <Stack.Screen
            options={{headerShown: false}}
            name="ValidationFileds"
            component={ValidationFileds}
          />  */}

          {/* <Stack.Screen 
             options={{
              title: 'Create New Associate',
              headerTitleAlign: 'center',
              headerLeft:()=>(
                <Icon name="arrow-back-ios" size={25} color={"#404040"}  style={{marginLeft:10}}/>),
              headerRight:()=>(
                <Image style={{height:70,width:70,}} source={logo} />)
            }} name="AccordianList" component={AccordianList} /> */}

          {/* <Stack.Screen
          options={{headerShown: false}}
          name="TodoListHome"
          component={TodoListHome}
        />  */}
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="ReduxHome"
            component={ReduxHome}
          /> */}

          <Stack.Screen
              options={{
                title: 'Medicine Details',
                headerLeft:()=>(
                  <Icon name="arrow-back-ios" size={20} color={"#404040"}  style={{marginLeft:10}}/>)
            }}
            name="FirstClassComSC"
            component={FirstClassComSC}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
