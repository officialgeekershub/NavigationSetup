import React from 'react';
import {Image, View} from 'react-native';

export default function ({navigation}) {
  setTimeout(() => {
    navigation.navigate('AppIntro');
  }, 3000);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff'}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{height: '80%', width: '80%'}}
        resizeMode={'contain'}
      />
    </View>
  );
}
