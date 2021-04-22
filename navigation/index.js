import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './dashboard';

export default function Main() {
  return (
    <NavigationContainer>
      <Dashboard />
    </NavigationContainer>
  );
}