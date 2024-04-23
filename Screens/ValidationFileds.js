import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import logo from '../Src/assets/logo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

import Cinputs from '../Src/Components/Cinputs';
import Cbutton from '../Src/Components/Cbutton';
import googlelogo from '../Src/assets/googleL.png';

import {NavigationContainer} from '@react-navigation/native';

import {Formik} from 'formik';
import * as Yup from 'yup';

const ValidationFileds = ({navigation}) => {
  const [seePassword, setSeePassword] = useState(true);

  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required('email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = values => {
    if (values.email === '' || values.password === '') {
      alert('Fill the email or password');
    } else {
      navigation.navigate('Accordion');
    }
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginValidationSchema}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <>
          <View style={styles.container}>
            {/* top  */}
            <View style={styles.Top_view}>
              <Image style={styles.LogoimageS} source={logo}></Image>
              <Text style={styles.TtextB}>Login Account</Text>
              <Text style={styles.TtextS}>
                Please enter your credentials to
              </Text>
              <Text style={styles.TtextS}>access your Account and details</Text>
            </View>
            {/* center  */}
            <View>
              <ScrollView style={styles.MainScrollS}>
                {/* email  */}
                <View style={styles.TextinputView}>
                  <Cinputs
                    secureTextEntry={false}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                    lable={'Email'}
                    placeholder={'Enter your email '}
                    Icon={
                      <Icon
                        style={{marginLeft: 10}}
                        name="email"
                        size={17}
                        color="#334e80"
                      />
                    }
                    TextinputStyle={styles.Textinput}
                  />
                </View>
                {/* password  */}
                <View style={styles.TextinputView}>
                  <Cinputs
                    lable={'password'}
                    placeholder={'Enter your password '}
                    secureTextEntry={seePassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={errors.password}
                    Icon={
                      <Icon
                        style={{marginLeft: 10}}
                        name="lock"
                        size={17}
                        color="#334e80"
                      />
                    }
                    TextinputStyle={styles.TextinputPassword}
                    Icon2={
                      <TouchableOpacity
                        onPress={() => setSeePassword(!seePassword)}>
                        {seePassword ? (
                          <Icon2
                            name="eye-off"
                            style={{marginRight: 10}}
                            size={18}
                            color="#334e80"
                          />
                        ) : (
                          <Icon2
                            name="eye"
                            style={{marginRight: 10}}
                            size={18}
                            color="#334e80"
                          />
                        )}
                      </TouchableOpacity>
                    }
                  />
                </View>

                {/* text  */}
                <View style={styles.BottomTextViewForgot}>
                  <TouchableOpacity>
                    <Text style={styles.forgottextstyle}>ForgotPassword?</Text>
                  </TouchableOpacity>
                </View>

                {/* login button  */}
                <View style={styles.LoginbuttonView}>
                  <Cbutton
                    onPress={handleSubmit}
                    text={'Login'}
                    buttonstyle={{
                      elevation: 5,
                      borderRadius: 5,
                      backgroundColor: '#327ff8',
                    }}
                  />
                </View>
                {/* line  */}
                <View style={styles.lineflexView}>
                  <View style={styles.line}></View>
                  <Text> Or Login With</Text>
                  <View style={styles.line}></View>
                </View>
                {/* login with google  */}
                <View style={styles.LoginwithgoogleButton}>
                  <Cbutton
                    LogoImage={
                      <Image source={googlelogo} style={styles.icon} />
                    }
                    text="login with google"
                    textStyle={{color: 'black', marginRight: '20%'}}
                    buttonstyle={{
                      height: hp('6%'),
                      width: wp('80%'),
                      marginBottom: 10,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      backgroundColor: '#bcc6d4',
                    }}
                  />
                </View>

                {/* text  */}
                <View style={styles.BottomTextView}>
                  <Text style={{fontSize: 12}}> Don't have an account?</Text>
                  <Text style={styles.Bottomsignuptext}>signup</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default ValidationFileds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002d71',
  },
  Top_view: {
    alignItems: 'center',
    height: hp('30%'),
  },
  LogoimageS: {
    height: hp('15%'),
    width: wp('45%'),
  },
  TtextB: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  TtextS: {
    fontSize: 14,
    color: 'white',
  },
  MainScrollS: {
    height: hp('70%'),
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  TextinputView: {
    // height: hp('13%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  BottomTextViewForgot: {
    alignItems: 'flex-end',
    marginRight: 40,
  },
  forgottextstyle: {
    fontSize: 14,
    color: '#327ff8',
    textDecorationLine: 'underline',
  },
  Textinput: {
    height: hp('7%'),
    backgroundColor: '#bcc6d4',
    width: wp('70%'),
    borderRadius: 10,
    marginLeft: 10,
  },
  icon: {
    height: hp('3%'),
    width: wp('5%'),
  },
  TextinputPassword: {
    height: hp('7%'),
    backgroundColor: '#bcc6d4',
    width: wp('65%'),
    borderRadius: 10,
  },
  LoginbuttonView: {
    alignItems: 'center',
    paddingTop: 20,
  },
  lineflexView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 40,
  },
  LoginwithgoogleButton: {
    alignItems: 'center',
    paddingTop: 20,
  },
  BottomTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 40,
  },
  Bottomsignuptext: {
    fontSize: 12,
    color: '#327ff8',
    textDecorationLine: 'underline',
  },
});
