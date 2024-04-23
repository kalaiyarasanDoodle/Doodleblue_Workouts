import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalDropdown from 'react-native-modal-dropdown';

const AccodianCreateComponent = ({title, textinputs,open,openComponent}) => {
  // const [open, setopen] = useState(true);


  // const toggleAccordion = () => {
  //   setopen(!open);
  // };

  return (
    <View>
       {open ? (
        <TouchableOpacity
        onPress={openComponent}
        style={styles.MainTiTleFlexStyleSelected}>
        <View style={styles.TitleStyle}>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              fontWeight: 'bold',
              padding: 10,
            }}>
            {title}
          </Text>
        </View>
        <View style={styles.titleIconstyle}>
          <Icon
            name="check-circle-outline"
            style={{marginRight: 20}}
            size={25}
            color="grey"
          />
          <Icon
            name="chevron-up"
            style={{marginRight: 10}}
            size={25}
            color="black"
          />
        </View>
      </TouchableOpacity>
       
      ) : (
        <TouchableOpacity
        onPress={openComponent}
        style={styles.MainTiTleFlexStyle}>
        <View style={styles.TitleStyle}>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              fontWeight: 'bold',
              padding: 10,
            }}>
            {title}
          </Text>
        </View>
        <View style={styles.titleIconstyle}>
          <Icon
            name="check-circle-outline"
            style={{marginRight: 20}}
            size={25}
            color="grey"
          />
          <Icon
            name="chevron-down"
            style={{marginRight: 10}}
            size={25}
            color="black"
          />
        </View>
      </TouchableOpacity>
      )}


      <Collapsible collapsed={!open}>
        <View style={styles.Collapsibleupdownstyle}>
          {textinputs.map((input, index) => (
            <View key={index}>
              <TextInput
                placeholderTextColor={'black'}
                style={styles.input}
                // value={input.value}
                // onChangeText={input.onChangeText}
                placeholder={input.placeholder}
              />
            </View>
          ))}
        
        </View>
      </Collapsible>

 
    </View>
  );
};

export default AccodianCreateComponent;

const styles = StyleSheet.create({
  MainTiTleFlexStyle: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#fefeff',
  },
  MainTiTleFlexStyleSelected: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#eaf3fc',
    borderWidth: 2,
    borderColor: 'skyblue',
  },

  TitleStyle: {
    flex: 0.5,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  collapsedStyle: {
    margin: 10,
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomEndRadius: 20,
  },
  titleIconstyle: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  CollapsibleStyle: {
    margin: 10,
    borderRadius: 10,
  },

  // input: {
  //   borderWidth: 0.5,
  //   borderColor: 'grey',
  //   borderRadius: 5,
  //   padding: 10,
  //   height: 50,
  //   backgroundColor: '#fefeff',
  // },
  Collapsibleupdownstyle: {
    backgroundColor: '#fefeff',
    margin: 10,
    marginBottom: 10,
  },
  activeAccordian: {
    backgroundColor: 'red',
  },
  inactiveAccordian: {
    backgroundColor: '#fefeff',
  },

  input: {
    borderWidth: 0.7,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  // drop

 
});
