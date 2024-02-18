import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Config/colors';
import {View} from 'react-native';
import FoodHomeScreen from '../Screens/FoodHomeScreen';
import FoodCartScreen from '../Screens/FoodCartScreen';
import FoodFavoriteScreen from '../Screens/FoodFavoriteScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel:false,
        headerShown:false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="FoodHomeScreen"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home" style={{color:'#FF5733'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="clipboard"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="clipboard" style={{color:'#FF5733'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={FoodHomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FoodFavoriteScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="heart" style={{color:'#FF5733'}} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={FoodCartScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-cart" style={{color:'#FF5733'}} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
