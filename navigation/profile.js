import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  PROFILE,
  UPDATE_PROFILE,
} from 'constants/screens';
import Profile from 'screens/Profile';
import UpdateProfile from 'screens/UpdateProfile';

const SensorStack = createStackNavigator();

export default function Stack() {
  return (
    <SensorStack.Navigator>
      <SensorStack.Screen
        name={PROFILE}
        component={Profile}
      />
      <SensorStack.Screen
        name={UPDATE_PROFILE}
        component={UpdateProfile}
      />
    </SensorStack.Navigator>
  );
}