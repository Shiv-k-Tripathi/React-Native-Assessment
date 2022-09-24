import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/Home';
import Notification from './src/Notification';
import Social from './src/Social';
import Society from './src/Society';
import NavStack from './src/NavStack';

const Tab = createBottomTabNavigator();
const App = () => {
  const TabNavigater = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Notification') {
              iconName = focused
                ? 'notifications-outline'
                : 'notifications-outline';
            } else if (route.name === 'Social') {
              iconName = focused
                ? 'share-social-outline'
                : 'share-social-outline';
            } else if (route.name === 'Society') {
              iconName = focused ? 'people-outline' : 'people-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }
            // <ion-icon name="notifications-outline"></ion-icon>
            // <ion-icon name="person-outline"></ion-icon>
            // <ion-icon name="people-outline"></ion-icon>
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#74ADE7',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Social"
          component={Social}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Society"
          component={Society}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Account"
          component={NavStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <TabNavigater />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
