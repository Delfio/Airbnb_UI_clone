import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/airbnb.png';
// import { Container } from './styles';

export default function Trips() {
  return <View />;
}
Trips.navigationOptions = {
  tabBarLabel: 'explore',
  tabBarIcon: ({tintColor}) => (
    <Image
      source={Logo}
      style={{height: 20, width: 20, tintColor: tintColor}}
    />
  ),
};
