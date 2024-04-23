import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  Platform,
  UIManager,
  LayoutAnimation,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AccordionButton from '../Src/Components/AccordionComponents/AccordionButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import AccodianCreateComponent from '../Src/Components/AccordionComponents/AccodianCreateComponent';
import AccordianWIthDropdown from '../Src/Components/AccordionComponents/AccordianWIthDropdown';

// validation

import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name 1 is required'),
  Code: Yup.string().required('Code 2 is required'),
});

const AccordianList = ({navigation}) => {
  const [openBasic, setOpenBasic] = useState(false);
  const [OpenAddress, setOpenAddress] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const Dropdowninputs = [
    {type: 'text', title: 'Name', placeholder: ' Company Name*'},
    {type: 'text', title: 'Code', placeholder: 'Code'},
    {
      type: 'dropdown',
      title: 'Type',
      placeholder: 'Type*',
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    {type: 'text', title: 'Contact', placeholder: ' Contact name*'},
    {type: 'text', title: 'Mobile', placeholder: ' Mobile'},
    {type: 'text', title: 'Office', placeholder: 'Office'},
    {type: 'text', title: 'Email', placeholder: 'Email'},
    {type: 'text', title: 'Website', placeholder: 'Website'},
  ];
  // const BasicInformationObjects = [
  //   {
  //     // value: '',
  //     //  onChangeText: (text) => console.log(text),
  //     placeholder: ' Company Name*',
  //   },
  //   {
  //     placeholder: 'Code',
  //   },
  //   {
  //     placeholder: 'Type*',
  //   },
  //   {
  //     placeholder: 'Contact name*',
  //   },
  //   {
  //     placeholder: 'Mobile',
  //   },
  //   {
  //     placeholder: 'Office',
  //   },
  //   {
  //     placeholder: 'Email',
  //   },
  //   {
  //     placeholder: 'Website',
  //   },
  // ];

  const AddressInputs = [
    {
      placeholder: 'Address *',
    },
    {
      placeholder: 'Suit/Unit',
    },
    {
      placeholder: 'City *',
    },
    {
      placeholder: 'State *',
    },
    {
      placeholder: 'Zip Code *',
    },
  ];
  const Locationinput = [
    {
      placeholder: 'Enter Your Location',
    },
  ];

  const inputsbasic = [
    {
      placeholder: ' placeHolder 1',
    },
    {
      placeholder: 'placeHolder 2',
    },
    {
      placeholder: 'placeHolder 3',
    },
  ];
  // statw handle ---
  const handleOpenBasic = () => {
    setOpenBasic(!openBasic);
    setOpenAddress(false);
    setOpenLocation(false);
  };
  const handleOpenAddress = () => {
    setOpenAddress(!OpenAddress);
    setOpenBasic(false);
    setOpenLocation(false);
  };
  const handleOpenLocation = () => {
    setOpenLocation(!openLocation);
    setOpenBasic(false);
    setOpenAddress(false);
  };
  // functions ---
  const handleCreate = () => {
    Alert.alert('im clicked');
  };
  // validation
  const handleSubmit = (values, { resetForm }) => {
    console.log('enteewrfjewbdf');
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    // Optionally reset the form after submission
    resetForm();
  };
  return (
   
      <Formik
      initialValues={{
        name: '',
        Code: '',
      }}
        validationSchema={validationSchema}
         onSubmit={handleSubmit}
      >
  {({ handleSubmit }) => (
    console.log('here------'),
 <>
      <View style={styles.MainContainer}>
          <View style={{flex: 0.9, backgroundColor: '#f8f9fd'}}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <AccordianWIthDropdown
                title="Basic Information"
                inputs={Dropdowninputs}
                open={openBasic}
                openComponent={handleOpenBasic}
              />
              {/* <AccodianCreateComponent
                title="Address"
                textinputs={AddressInputs}
                open={OpenAddress}
                openComponent={handleOpenAddress}
              />
              <AccodianCreateComponent
                title="Location"
                textinputs={Locationinput}
                open={openLocation}
                openComponent={handleOpenLocation}
              /> */}
              {/* <AccodianCreateComponent
            title="Primary sales person"
            textinputs={inputsbasic}
          />
          <AccodianCreateComponent title="Notes" textinputs={inputsbasic} /> */}
            </ScrollView>
          </View>
          {/* bottom tab  botton  */}
          <View style={{flex: 0.1, flexDirection: 'row'}}>
            <AccordionButton
              buttonstyle={styles.Cancelbutton}
              Icon={
                <Icon
                  name="close"
                  style={{marginRight: 10}}
                  size={17}
                  color="#0050bb"
                />
              }
              label={'CANCEL'}
              LableTextColor={styles.Cancellablestyle}
            />

            <AccordionButton
           onPress={handleSubmit}
              buttonstyle={styles.Createbutton}
              Icon={
                <Icon
                  name="plus-box-outline"
                  style={{marginRight: 10}}
                  size={17}
                  color="white"
                />
              }
              label={'CREATE'}
              LableTextColor={styles.Createlablestyle}
            />
          </View>
      </View>
      </>
    )}
      </Formik>
   
 
  );
};

export default AccordianList;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fd',
  },
  Cancelbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#0050bb',
    backgroundColor: 'white',
  },
  Createbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 150,
    borderRadius: 5,
    backgroundColor: '#0050bb',
  },
  Cancellablestyle: {
    fontSize: 16,
    color: '#0050bb',
    fontWeight: 'bold',
  },
  Createlablestyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  // acc
  contentContainer: {
    justifyContent: 'center',
  },
});
