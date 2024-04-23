import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from '../Src/assets/logo.png';
import googleL from '../Src/assets/googleL.png';

import googlelogo from '../Src/assets/googleL.png';
import fb_logo from'../Src/assets/Logo_fb.png';

import {NavigationContainer} from '@react-navigation/native';

import CustomTextInput from '../Src/Components/CustomTextInput';
import CustomLoginButtons from '../Src/Components/CustomLoginButtons';

import {Formik} from 'formik';
import * as Yup from 'yup';

const SigninPage = ({navigation}) => {
  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = values => {
    console.log(values);
    if (values.email === '' && values.password === '') {
      alert('Invalid email or password');
    } else {
      navigation.navigate('Home');
    }
  };
  const [seePassword, setSeePassword] = useState(true);

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginValidationSchema}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <>
          <ScrollView style={{flex: 1, backgroundColor: '#002d71'}}>
            {/* logo_flex  */}
            <View style={styles.logo_flex}>
              <Image style={styles.logo} source={logo} />
            </View>
            {/* login text big _flex */}
            <View style={styles.login_text_flex}>
              <Text style={styles.TextStyle}>Login Account</Text>
            </View>

            <View style={styles.login_text_small_flex}>
              <View style={styles.gap}></View>

              <View style={styles.inside_text_flex}>
                <View style={styles.inside_text_flex_1}>
                  <Text style={styles.TextStyleS}>
                    Please enter your credentials to
                  </Text>
                </View>
                <View style={styles.inside_text_flex_2}>
                  <Text style={styles.TextStyleS}>
                    access your Account and details
                  </Text>
                </View>
              </View>

              <View style={styles.gap}></View>
            </View>

            <View style={styles.main_content_flex}>
              <View style={styles.login_gap}></View>

              <View style={styles.login_main_flex}>
                <View style={styles.main_gap}></View>
                {/* email  */}
                <View style={styles.login_main_email}>
                  {/* <View style={styles.mail_text}>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                      Email
                    </Text>
                  </View> */}
                  <View style={styles.mail_input_flex}>
                    {/* l  */}
                    <View style={styles.mail_input_logo_flex}>
                      <View style={styles.mail_input_logo}>
                        <Icon name="email" size={17} color="#334e80" />
                      </View>
                    </View>
                    {/* 2  */}
                    <View style={styles.mail_input_text_flex}>
                      <CustomTextInput
                        label="Email"
                        placeholder="Enter your email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={errors.email}
                        placeholder="Enter Your Email"
                      />

                      {/* <TextInput
                      keyboardType="email-address"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      //   onChangeText={text => handleChange('email',text)}
                      placeholderTextColor={'#677a9e'}
                      placeholder="Enter your email"
                      style={styles.textinput_mail_password}></TextInput> */}
                    </View>

                    {/* 3  */}
                    <View style={styles.mail_input_logo_flex}>
                      <View style={styles.mail_input_logo_l}></View>
                    </View>
                  </View>
                  {/* {errors.email && touched.email && (
                    <Text style={{color: 'red', fontSize: 10}}>
                      {errors.email}
                    </Text>
                  )}   */}
                  {/* error fonts  */}
                </View>
                {/* paswword */}
                <View style={styles.login_main_email}>
                  {/* <View style={styles.mail_text}>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                      Password
                    </Text>
                  </View> */}
                  <View style={styles.mail_input_flex}>
                    {/* l_p  */}
                    <View style={styles.mail_input_logo_flex}>
                      <View style={styles.mail_input_logo}>
                        <Icon1 name="lock" size={20} color="#334e80" />
                      </View>
                    </View>
                    {/* 2_p  */}
                    <View style={styles.mail_input_text_flex}>
                      <CustomTextInput
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry={seePassword}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password}
                        // onChangeText={handleChange('password')}
                        // onBlur={handleBlur('password')}
                        // value={values.password}
                        // error={errors.password}
                        // secureTextEntry={seePassword}

                        // onChangeText={handleChange('password')}
                      />

                      {/* 
                      <TextInput
                        value={values.password}
                        secureTextEntry={seePassword}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholderTextColor={'#677a9e'}
                        placeholder="Enter your password"
                        style={styles.textinput_mail_password}></TextInput> */}
                    </View>

                    {/* 3_p  */}
                    <View style={styles.mail_input_logo_flex}>
                      <TouchableOpacity
                        onPress={() => setSeePassword(!seePassword)}
                        style={styles.mail_input_logo_l}>
                        {seePassword ? (
                          <Icon2 name="eye-off" size={18} color="#334e80" />
                        ) : (
                          <Icon2 name="eye" size={18} color="#334e80" />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* error fonts ==========================>  */}
                  {/* {errors.password && touched.password && (
                    <Text style={{color: 'red', fontSize: 10}}>
                      {errors.password}
                    </Text>
                  )}  */}
                </View>
                {/* forgetpassword text  */}
                <View style={styles.forgot_t_f}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#327ff8',
                      textDecorationLine: 'underline',
                    }}>
                    Forgot password ?
                  </Text>
                </View>
                {/* login button  */}
                <View style={styles.login_button_f}>
                  <CustomLoginButtons
                    onPress={handleSubmit}
                    text={'Login'}
                    buttonstyle={{
                      elevation: 5,
                      borderRadius: 5,
                      backgroundColor: '#327ff8',
                    }}/>
                  
                </View>
                {/* or text  */}
                <View style={styles.or_f}>
                  <View style={styles.or_bar}></View>
                  <View style={{flex: 0.05}}></View>
                  <View style={styles.or_text_f}>
                    <Text style={{fontSize: 13}}>Or login with</Text>
                  </View>
                  <View style={{flex: 0.05}}></View>
                  <View style={styles.or_bar}></View>
                </View>
                {/* login google button  */}
                
                
              
                      <CustomLoginButtons
                      message={true}
                      name={'kalai'}
                      LogoImage={<Image source={googlelogo} style={styles.icon} />}
                        buttonstyle={{
                          height: hp('6%'),
                          width: wp('80%'),
                          marginBottom:10,
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          backgroundColor: '#bcc6d4',
                        }}
                        text="login with google"
                        textStyle={{color: 'black', marginRight: '20%'}}
                      />
                  
               
                
                <CustomLoginButtons
                        LogoImage={<Image source={fb_logo} style={styles.icon} />}
                        buttonstyle={{
                          height: hp('6%'),
                          width: wp('80%'),
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          backgroundColor: '#bcc6d4',
                        }}
                        text="login with Facebook"
                        textStyle={{color: 'black', marginRight: '20%'}}
                      />

                {/* forgetpassword text  */}
                <View style={styles.Dont_have_account_F}>
                  <View style={{flex: 0.2}}></View>
                  <View style={{flex: 0.5}}>
                    <Text style={{fontSize: 12}}> Don't have an account?</Text>
                  </View>
                  <View style={{flex: 0.3}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#327ff8',
                        textDecorationLine: 'underline',
                      }}>
                      signup
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.login_gap}></View>
            </View>
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default SigninPage;

const styles = StyleSheet.create({
  propstyle: {backgroundColor: 'lime'},

  login_flex: {
    flex: 1,
    backgroundColor: '#002d71',
  },
  logo_flex: {
    width: windowWidth,
    height: (windowHeight * 21) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text_flex: {
    width: windowWidth,
    height: (windowHeight * 7) / 100,

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  login_text_small_flex: {
    width: windowWidth,
    height: (windowHeight * 10) / 100,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  main_content_flex: {
    width: windowWidth,
    height: (windowHeight * 65) / 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  icon: {
    height: hp('3%'),
    width: wp('5%'),
  },
  logo: {
    height: hp('15%'),
    width: wp('45%'),
  },
  logoG: {
    height: hp('3%'),
    width: wp('5%'),
  },
  textF: {
    flex: 0.07,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textFS: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  gap: {
    flex: 0.1,
  },
  googlebuttonStyle: {
    height: hp('6%'),
    width: wp('30%'),
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  inside_text_flex: {
    flex: 0.8,
    flexDirection: 'column',
  },
  inside_text_flex_1: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inside_text_flex_2: {
    flex: 0.4,
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  TextStyleS: {
    fontSize: 14,
    color: '#e1ebfa',
  },

  logoin_text_flex: {
    flex: 0.63,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  login_gap: {
    flex: 0.1,
  },
  login_main_flex: {
    flex: 0.8,
    flexDirection: 'column',
  },
  login_main_email: {
    flex: 0.2,
    flexDirection: 'column',
  },
  mail_text: {
    flex: 0.3,
    backgroundColor: 'lime',
    justifyContent: 'center',
  },
  mail_input_flex: {
    flex: 0.7,
    // backgroundColor: 'green',
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  mail_input_logo_flex: {
    flex: 0.1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  mail_input: {
    height: hp('5%'),
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  mail_input_logo: {
    height: hp('7%'),
    width: wp('10%'),
    backgroundColor: '#bcc6d4',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mail_input_text_flex: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mail_input_text_flex_logingoogle: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinput_mail_password: {
    height: hp('7%'),
    backgroundColor: '#bcc6d4',
    width: wp('65%'),
  },
  mail_input_logo_l: {
    height: hp('7%'),
    width: wp('10%'),
    backgroundColor: '#bcc6d4',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot_t_f: {flex: 0.1, alignItems: 'flex-end', justifyContent: 'flex-start'},
  login_button_f: {
    flex: 0.15,
    alignItems: 'center',
    // backgroundColor: 'skyblue',
  },
  login_b_touch: {
    height: hp('6%'),
    width: wp('80%'),
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#327ff8',
  },
  or_f: {
    flex: 0.07,
    flexDirection: 'row',
  },
  or_bar: {
    flex: 0.3,
    borderTopWidth: 1,
  },
  or_text_f: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -10,
  },
  logingooleText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  loginin_button_main: {
    height: hp('7%'),
    width: wp('65%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bcc6d4',
  },
  Dont_have_account_F: {
    flex: 0.1,
    flexDirection: 'row',
  },
  main_gap: {
    flex: 0.05,
  },
});
