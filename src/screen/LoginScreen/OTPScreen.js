import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../../components/CustomButton';

const OTPScreen = ({navigation}) => {
    const [mobileOTP, setMobileOTP] = useState();
    const otpRef = useRef();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#C2ECC4'}}
    >
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{height: '70%', width: '70%', marginTop: -40}}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '70%',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingVertical: 30,
          //paddingHorizontal: 5,
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 25,
            fontWeight: '400',
            paddingHorizontal: 5,
          }}>
          Enter verification code sent on given number.
        </Text>
        <View style={{marginTop: 30}}>
          <OTPTextView
             ref={otpRef}
            //containerStyle={styles.textInputContainer}
            //handleTextChange={(text) => this.setState({otpInput: text})}
            inputCount={6}
            keyboardType="numeric"
            defaultValue='123456'
            
            
          />
        </View>
        <CustomButton label={'Submit'} onPress={() => navigation.navigate('Complete Profile')} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal:10,
            marginTop:20
          }}>
          <Text style={{fontSize:16}}>0.25 min left</Text>
          <TouchableOpacity>
          <Text style={{fontSize:16, color:'#18721A', fontWeight:'bold'}}>RESEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
