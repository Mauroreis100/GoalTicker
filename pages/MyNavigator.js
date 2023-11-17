// MyNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  />
      <Stack.Screen name="Details"  />
    </Stack.Navigator>
  );
};

export default MyNavigator;
