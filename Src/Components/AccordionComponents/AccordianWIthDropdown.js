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


// formik 
import { useFormik } from 'formik';

const AccordianWIthDropdown = ({title, inputs,open,openComponent}) => {

  // checkbox 
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const toggleCheckbox1 = () => {
    setCheckbox1(!checkbox1);
  };

  const toggleCheckbox2 = () => {
    setCheckbox2(!checkbox2);
  };
 
  const { handleChange, handleBlur, values, errors, touched, handleSubmit } = useFormik({
    initialValues: { accordionField: '' },
    onSubmit,
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      accordionField: Yup.string().required('Accordion field is required'),
    }),
  });


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
          {inputs.map((input, index) => (
            <View key={index} style={styles.inputContainer}>
              {input.type === 'text' ? (
                <TextInput
                  style={styles.input}
                  placeholder={input.placeholder}
                  value={values[input.title]}
                  onChangeText={handleChange(input.title)}
                  onBlur={handleBlur(input.title)}
                />
              ) : (
                <ModalDropdown
                  isFullWidth={true}
                  options={input.options}
                  defaultValue={input.placeholder}
                  style={styles.inputDropdown}
                  textStyle={styles.dropdownText}
                  dropdownStyle={styles.DropdownListSTYLE}
                  dropdownTextStyle={styles.dropdowninTEXT}
                  onSelect={(optionIndex, option) => handleChange(input.title)(option)}
                />
              )}
                 {touched[input.name] && errors[input.name] && (
                <Text style={styles.errorText}>{errors[input.name]}</Text>
              )}
            </View>
          ))}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={toggleCheckbox1} style={styles.checkbox}>
              <Icon
                name={checkbox1 ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={25}
                color="black"
              />
              <Text style={styles.checkboxText}>I have not Hold a Tower </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheckbox2} style={styles.checkbox}>
              <Icon
                name={checkbox2 ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={25}
                color="black"
              />
              <Text style={styles.checkboxText}>Bussincess is a Residence</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Collapsible>
    </View>

    //   <View style={styles.container}>
    //   <TouchableOpacity onPress={toggleAccordion} style={styles.titleContainer}>
    //     <Text style={styles.title}>{title}</Text>
    //   </TouchableOpacity>
    //   <Collapsible collapsed={isCollapsed}>
    //     <View style={styles.content}>
    //       {inputs.map((input, index) => (
    //         <View key={index} style={styles.inputContainer}>
    //           {input.type === 'text' ? (
    //             <TextInput
    //               style={styles.input}
    //               placeholder={input.placeholder}
    //             />
    //           ) : (
    //             <ModalDropdown
    //               options={input.options}
    //               defaultValue={input.placeholder}
    //               style={styles.dropdown}
    //               textStyle={styles.dropdownText}
    //               dropdownStyle={styles.dropdownOptions}
    //               onSelect={(optionIndex, option) => handleOptionSelect(index, option)}
    //             />
    //           )}
    //         </View>
    //       ))}
    //     </View>
    //   </Collapsible>
    // </View>
  );
};

export default AccordianWIthDropdown;
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

  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 50,
    // justifyContent: 'center',
    // backgroundColor: 'lime',
  },
  inputDropdown: {
    borderWidth: 0.7,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
 
  },

  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    borderRadius: 5,

    margin: 10,
  },
  DropdownListSTYLE: {
    // backgroundColor: 'lime',
    justifyContent:'space-between',
    // backgroundColor:'pink'
  
   
  },

  dropdowninTEXT: {
    fontSize: 16,
    color:'black',
    fontWeight:'600',
    borderWidth:0.5,
    
  },

  // check
  checkboxContainer: {
    padding: 20,
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  // error 
  error: {
    color: 'red',
  },
  errorText:{
    color:'red',
    fontSize:10,
  }
});
