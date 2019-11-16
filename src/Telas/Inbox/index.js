import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Inbox() {
  return <View />;
}

Inbox.navigationOptions = {
  tabBarLabel: 'explore',
  tabBarIcon: ({tintColor}) => (
    <Icon name="inbox" size={20} color={tintColor} />
  ),
};
