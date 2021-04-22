import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        <ActivityIndicator
          style={styles.indicator}
          size="large" color="#694fad" />
      </View>
    </View>
  );
}