import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
  SENSOR_STACK,
  PROFILE_STACK,
} from 'constants/screens';
import Icon from 'components/Icon';

import SensorStack from './sensors';
import ProfileStack from './profile';

const MaterialBottomTab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  return (
    <MaterialBottomTab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <MaterialBottomTab.Screen
        name={SENSOR_STACK}
        component={SensorStack}
        options={{
          tabBarLabel: 'Sensors',
          tabBarIcon: () => (
            <Icon name="coolant-temperature" color="#FFF" size={23} />
          ),
        }}
      />
      <MaterialBottomTab.Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon name="account" color="#FFF" size={23} />
          ),
        }}
      />
    </MaterialBottomTab.Navigator>
  );
}