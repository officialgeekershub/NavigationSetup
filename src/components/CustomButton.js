import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        //zIndex: 10,
        padding: 10,
        backgroundColor: '#18721A',
        borderRadius: 10,
        marginTop:40,
        //position: 'absolute',
        //top: '80%',
        alignSelf: 'center',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
