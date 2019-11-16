import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import ExplorePage from './Telas/Explore';
import SavedPage from './Telas/Saved';
import TripsPage from './Telas/Trips';
import InboxPage from './Telas/Inbox';
import ProfilePage from './Telas/Profile';

const TabBar = createBottomTabNavigator(
  {
    Explore: {
      screen: ExplorePage,
    },
    Saved: {
      screen: SavedPage,
    },
    Trips: {
      screen: TripsPage,
    },
    Inbox: {
      screen: InboxPage,
    },
    Profile: {
      screen: ProfilePage,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

export default createAppContainer(TabBar);
