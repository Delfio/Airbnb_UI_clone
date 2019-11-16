/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

import StarRating from 'react-native-star-rating';

// import { Container } from './styles';

export default function Home({
  widhSize,
  imgUri,
  totalStars,
  titleHome,
  typeHome,
  priceHome,
}) {
  return (
    <View
      style={{
        width: widhSize / 2 - 30,
        height: widhSize / 2 - 30,
        borderWidth: 0.5,
        borderColor: '#dddddd',
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
          }}
          source={imgUri}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 10, color: '#b63838'}}>{titleHome}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{typeHome}</Text>
        <Text style={{fontSize: 10}}>{priceHome}$</Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={totalStars}
          starSize={10}
        />
      </View>
    </View>
  );
}
