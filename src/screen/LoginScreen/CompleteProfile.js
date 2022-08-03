import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import CustomButton from '../../components/CustomButton';

const CompleteProfile = ({navigation, route}) => {
  const [name, setName] = useState('vishal');
  const [email, setEmail] = useState('vk@gmail.com');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  

  const onSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name) {
      if (email || reg.test(email) === true) {
        if (date) {
          navigation.navigate('HomeTack');
          console.log('ok');
        } else {
          ToastAndroid.show(
            'Please Select Date',
            ToastAndroid.SHORT,
          );
          console.log('Select Date');
        }
      } else {
        ToastAndroid.show(
          'Please Enter Valid Email Address',
          ToastAndroid.SHORT,
        );
        console.log('Enter Valid Email Address');
      }
    } else {
      ToastAndroid.show(
        'Please Enter Full Name',
        ToastAndroid.SHORT,
      );
      console.log('Enter Full Name');
    }
  };
  
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={{flex: 1, backgroundColor: '#C2ECC4'}}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            margin: 15,
           
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#000',
            }}>
            Complete Your Profile
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 12,
              marginTop: 20,
              color: '#000',
            }}>
            Full Name
          </Text>
          <TextInput
            style={{
              height: 50,
              marginHorizontal: 12,
              marginTop: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              borderColor: '#CFCFCF',
              fontSize: 16,
            }}
            placeholder="Enter Full Name"
            returnKeyType="next"
            value={name}
            onChangeText={name => setName(name)}
          />
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 12,
              marginTop: 20,
              color: '#000',
            }}>
            Email Address
          </Text>
          <TextInput
            style={{
              height: 50,
              marginHorizontal: 12,
              marginTop: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              borderColor: '#CFCFCF',
              fontSize: 16,
            }}
            placeholder="Enter Email Addresss"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 12,
              marginTop: 20,
              color: '#000',
            }}>
            Date of Birth
          </Text>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              height: 50,
              marginHorizontal: 12,
              marginTop: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              borderColor: '#CFCFCF',
            }}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            maximumDate={new Date('2005-01-01')}
            minimumDate={new Date('1980-01-01')}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setDobLabel(date.toDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <CustomButton label={'SAVE'} onPress={onSubmit} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default CompleteProfile;
