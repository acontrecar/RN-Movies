import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScren} from '../screens/details/DetailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScren} />
    </Stack.Navigator>
  );
};