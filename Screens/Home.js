import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={styles.Home_flex}>
      <Text style={styles.TextStyle}>WELCOME TO Home PAGE </Text>

      <View
        style={{
          flex: 0.4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}
          style={{
            height: 70,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'lime',
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: '500'}}>
            CLick Me!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Home_flex: {
    flex: 1,
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor: 'blue',
  },
  TextStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  button: {
    height: 60,
    width: 200,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: 15,
    color: 'white',
  },
});

// login
{
  /* <View style={styles.textinputF}>
<View style={styles.empty}></View> */
}
{
  /* email  */
}
{
  /* <View style={styles.textinputF_email}>
  <TextInput
    placeholder="enter your email"
    style={styles.textinput}></TextInput>
</View> */
}
{
  /* password  */
}
{
  /* <View style={styles.textinputF_pass}>
  <TextInput
    placeholder="enter your Password"
    style={styles.textinput}></TextInput>
</View>
</View> */
}

{
  /* button  */
}
//    <View style={styles.buttonF}>
//    <View style={styles.button}>
//      <Text style={styles.button_text}>LOGIN</Text>
//    </View>
//  </View>
