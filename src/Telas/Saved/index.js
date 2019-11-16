import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Saved() {
  return <View />;
}
Saved.navigationOptions = {
  tabBarLabel: 'explore',
  tabBarIcon: ({tintColor}) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};
