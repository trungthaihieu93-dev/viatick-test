import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SENSORS,
  SENSOR_DETAIL,
} from 'constants/screens';
import Sensors from 'screens/Sensors';
import SensorDetail from 'screens/SensorDetail';

const SensorStack = createStackNavigator();

export default function Stack() {
  return (
    <SensorStack.Navigator>
      <SensorStack.Screen
        name={SENSORS}
        component={Sensors}
      />
      <SensorStack.Screen
        name={SENSOR_DETAIL}
        component={SensorDetail}
      />
    </SensorStack.Navigator>
  );
}