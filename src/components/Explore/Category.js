/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

// import { Container } from './styles';

export default function Explore({imgUri, txtName}) {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}>
      <View style={{flex: 2}}>
        <Image
          source={imgUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
          }}
        />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
        <Text>{txtName} </Text>
      </View>
    </View>
  );
}
