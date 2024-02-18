import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from './OnBoardScreen';
import FoodDetailsScreen from './FoodDetailsScreen';
import COLORS from '../Config/colors';
import BottomNavigator from '../Config/BottomNavigator';
import SplashScreen from './SplashScreen';

const Stack = createNativeStackNavigator();

const FoodApp = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={FoodDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FoodApp;
