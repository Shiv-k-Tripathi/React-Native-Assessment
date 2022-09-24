import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from './Account';
import Profile from './Profile';
import AddTeanent from './AddTeanent';
import TeanentDetail from './TeanentDetail';
import React from 'react';
const Stack = createNativeStackNavigator();
const NavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTeanent"
        component={AddTeanent}
        options={{
          headerStyle: {
            backgroundColor: '#0198c7',
          },
        }}
      />
      <Stack.Screen
        name="TeanentDetail"
        component={TeanentDetail}
        options={{
          headerStyle: {
            backgroundColor: '#0198c7',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NavStack;

const styles = StyleSheet.create({});
