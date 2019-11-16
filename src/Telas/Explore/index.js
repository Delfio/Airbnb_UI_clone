/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';

import Category from '../../components/Explore/Category';
import HomePage from '../../components/Home';
import TapPage from '../../components/Tag';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Experiences from '../../assets/experiences.jpg';
import Restaurant from '../../assets/restaurant.jpg';
import Home from '../../assets/home.jpg';

// import { Container } from './styles';

const {height, width} = Dimensions.get('window');

export default function Explore() {
  const [scrolY, setScrolY] = useState(0);
  const [headerHeigt, setHeaderHeight] = useState(80);
  const [endHeaderHeight, setendHeaderHeight] = useState(50);

  useEffect(() => {
    if (Platform.OS === 'android') {
      setHeaderHeight(120), setendHeaderHeight(90);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 107,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#dddddd',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 62,
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              marginTop: 6,
              borderRadius: 15,
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
            }}>
            <Icon
              name="search"
              size={20}
              style={{marginRight: 10, marginTop: 12}}
            />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Encontrar Novas Expriências"
              placeholderTextColor="grey"
              style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
            />
          </View>
          <Animated.View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              position: 'relative',
              top: 10,
            }}>
            <TapPage name="Guest" />
            <TapPage name="Dates" />
          </Animated.View>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrolY}}},
          ])}>
          <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
            <Text
              style={{fontSize: 20, fontWeight: '700', paddingHorizontal: 20}}>
              No que eu posso ajudar Hoje?
            </Text>

            <View style={{height: 130, marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Category imgUri={Home} txtName="Home" />
                <Category imgUri={Experiences} txtName="Experiências" />
                <Category imgUri={Restaurant} txtName="Restaurantes" />
              </ScrollView>
            </View>
            <View style={{marginTop: 40, paddingHorizontal: 20}}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                Bem Vindo ao Airbnb Plus
              </Text>
              <Text style={{fontWeight: '100', marginTop: 5}}>
                Uma nova seleção de casas verificadas pela qualidade e conforto
              </Text>
              <View style={{width: width - 40, height: 200, marginTop: 20}}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                  }}
                  source={Home}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: 40}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                paddingHorizontal: 20,
              }}>
              Casa espalhadas pelo mundo!
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <HomePage
                widhSize={width}
                imgUri={Home}
                totalStars={4}
                titleHome="Casa Luxo"
                typeHome="Luxo"
                priceHome="200"
              />
              <HomePage
                widhSize={width}
                imgUri={Home}
                totalStars={3.5}
                titleHome="Ipanema Suite"
                typeHome="Hotel"
                priceHome="180"
              />
              <HomePage
                widhSize={width}
                imgUri={Home}
                totalStars={4.5}
                titleHome="Pousada RJ"
                typeHome="Pousada"
                priceHome="150"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'explore',
  tabBarIcon: ({tintColor}) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
