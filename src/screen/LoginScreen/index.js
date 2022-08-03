import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {showInfoToast, showSuccessToast} from '../../utils/Lib/Toast';
import {size} from 'lodash';
//import Toast from 'react-native-tiny-toast';
//import Toast from 'react-native-toast-message';

const LoginScreen = ({label, onPress, navigation}) => {
  const [mobileno, setMobileno] = useState('9999999999');
  const [checked, setChecked] = useState(true);


  const onSubmit = () => {
    if (mobileno && size(mobileno) === 10) {
      if (checked) {
        navigation.navigate('Verification');
        
        console.log('Checked');
      } else {
        console.log('Not Checked');
        ToastAndroid.show(
          'Please Select Terms & Conditions !',
          ToastAndroid.SHORT,
        );
      }
    } else {
      console.log('No');
      ToastAndroid.show(
        'Please Enter 10 Digit Mobile Number',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#C2ECC4'}}>
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
          paddingHorizontal: 15,
        }}>
        <Text style={{textAlign: 'center', fontSize: 25}}>
          Enter Your Mobile Number
        </Text>
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 5}}>
          We will send an sms to verify this mobile number.
        </Text>
        <TextInput
          mode="outlined"
          label="Mobile Number"
          left={<TextInput.Affix text="+91" />}
          underlineColor="#18721A"
          outlineColor="#18721A"
          activeOutlineColor="#58B15C"
          keyboardType="number-pad"
          maxLength={10}
          returnKeyType="done"
          value={mobileno}
          onChangeText={mobileno => setMobileno(mobileno)}
          style={{backgroundColor: '#fff', marginTop: 40}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
         color='#18721A'
         />
          <Text style={{fontSize: 17}}>
            I agree to the Terms and Conditions.
          </Text>
        </View>
        <CustomButton label={'Request For OTP'} onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
