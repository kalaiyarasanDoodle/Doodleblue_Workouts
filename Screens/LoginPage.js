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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from '../Src/assets/logo.png';
import googleL from '../Src/assets/googleL.png';
import {NavigationContainer} from '@react-navigation/native';

const LoginPage = ({navigation}) => {
const [inputFields,setInputFields] = useState({email:"",password:""})
//   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkVaildEmail, setCheckEmail] = useState(false);

  const handleCheckEmail = text => {
    var re = /\S+@\S+\.\S+/;
    var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };


  const handleChange=(fieldName,text)=>{
    setInputFields((prevState)=>({
      ...prevState,
      [fieldName]:text}))
      }
      console.log(inputFields)



  const checkPasswordValidty = value => {
    // const isNonWhiteSpace = /^\$*$/;
    // if (!isNonWhiteSpace.test(value)) {
    //   return 'password must not contain whitespace.';
    // }
    // const isContainUpperCase = /^(?=.*[A-Z])/;
    // if (!isContainUpperCase.test(value)) {
    //   return 'password must have One UpperCase Character .';
    // }
    // const isContainLowerCase = /^(?=.*[a-z])/;
    // if (!isContainLowerCase.test(value)) {
    //   return 'password must have One LowerCase Character .';
    // }
    // const isContainNumber = /^(?=.*[0-9])/;
    // if (!isContainNumber.test(value)) {
    //   return 'password must have one Number .';
    // }
    // const isVaildLength = /^.{0-9}$/;
    // if (!isVaildLength.test(value)) {
    //   return 'Password must be 8 - 16  characters  Long .';
    // }
    return null;
  };

  const handleLogin = () => {
    const PassValidity = checkPasswordValidty(password);
    if (!PassValidity) {
      alert('sucessfully login!');
    } else {
      alert(' please check password');
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#002d71'}}>
      {/* logo_flex  */}
      <View style={styles.logo_flex}>
        <Image style={styles.logo} source={logo} />
      </View>
      {/* login text big _flex */}
      <View style={styles.login_text_flex}>
        <Text style={styles.TextStyle}>Login Account</Text>
      </View>
      {/* login text small _flex  */}
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
      {/* main content  */}
      <View style={styles.main_content_flex}>
        <View style={styles.login_gap}></View>
        {/* main  */}
        <View style={styles.login_main_flex}>
          <View style={styles.main_gap}></View>
          {/* email  */}
          <View style={styles.login_main_email}>
            <View style={styles.mail_text}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                Email
              </Text>
            </View>
            <View style={styles.mail_input_flex}>
              {/* l  */}
              <View style={styles.mail_input_logo_flex}>
                <View style={styles.mail_input_logo}>
                  <Icon name="email" size={17} color="#334e80" />
                </View>
              </View>
              {/* 2  */}
              <View style={styles.mail_input_text_flex}>
                <TextInput
                keyboardType="email-address"
                  value={inputFields.email}
                  onChangeText={text => handleChange('email',text)}
                  placeholderTextColor={'#677a9e'}
                  placeholder="Enter your email"
                  style={styles.textinput_mail_password}></TextInput>
              </View>
              {/* 3  */}
              <View style={styles.mail_input_logo_flex}>
                <View style={styles.mail_input_logo_l}></View>
              </View>
            </View>

            {/* error fonts  */}
            {checkVaildEmail ? (
              <Text style={{color: 'red', fontSize: 10}}>
                wrong format Email
              </Text>
            ) : (
              <Text></Text>
            )}
          </View>
          {/* paswword */}
          <View style={styles.login_main_email}>
            <View style={styles.mail_text}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                Password
              </Text>
            </View>
            <View style={styles.mail_input_flex}>
              {/* l_p  */}
              <View style={styles.mail_input_logo_flex}>
                <View style={styles.mail_input_logo}>
                  <Icon1 name="lock" size={20} color="#334e80" />
                </View>
              </View>
              {/* 2_p  */}
              <View style={styles.mail_input_text_flex}>
                <TextInput
                  value={inputFields.password}
                  secureTextEntry={seePassword}
                  onChangeText={text => handleChange('password',text)}
                  placeholderTextColor={'#677a9e'}
                  placeholder="Enter your Password"
                  style={styles.textinput_mail_password}></TextInput>
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
          </View>
          {/* forgetpassword text  */}
          <View style={styles.forgot_t_f}>
            <Text
              style={{
                fontSize: 14,
                color: '#327ff8',
                textDecorationLine: 'underline',
              }}>
              Forgot Password ?
            </Text>
          </View>
          {/* login button  */}
          <View style={styles.login_button_f}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.login_b_touch}>
              <Text style={styles.TextStyle}>Login</Text>
            </TouchableOpacity>
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
          <View style={styles.login_main_email}>
            <View style={styles.mail_input_flex}>
              {/* l_p  */}
              <View style={styles.mail_input_logo_flex}>
                <View style={styles.mail_input_logo}>
                  <Image style={styles.logoG} source={googleL} />
                </View>
              </View>
              {/* 2_p  */}
              <View style={styles.mail_input_text_flex}>
                <TouchableOpacity style={styles.loginin_button_main}>
                  <Text style={styles.logingooleText}>Login with google</Text>
                </TouchableOpacity>
              </View>
              {/* 3_p  */}
              <View style={styles.mail_input_logo_flex}>
                <TouchableOpacity
                  style={styles.mail_input_logo_l}></TouchableOpacity>
              </View>
            </View>
          </View>

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
  );
};

export default LoginPage;

const styles = StyleSheet.create({
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
    backgroundColor: '#327ff8',
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
