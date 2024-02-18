import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dfood from './dumyScreens/Dfood';
import Dhome from './dumyScreens/Dhome';
import Dfav from './dumyScreens/Dfav';
import Dserch from './dumyScreens/Dserch';
import FoodCartScreen from './FoodCartScreen';
import FoodHomeScreen from './FoodHomeScreen';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home" style={{color: '#F9813A'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={Dfood}
        options={{
          tabBarIcon: () => (
            <Icon name="clipboard" style={{color: '#F9813A'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Dserch}
        options={{
          tabBarIcon: () => (
            <Icon name="search" style={{color: '#F9813A'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Dfav}
        options={{
          tabBarIcon: () => (
            <Icon name="heart" style={{color: '#F9813A'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={FoodCartScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-cart" style={{color: '#F9813A'}} size={28} />
          ),
        }}
      />
    
      
    </Tab.Navigator>
  );
};

export default Home;
