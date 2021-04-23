import React from 'react';
import { View } from 'react-native';

import Icon from 'components/Icon';

import styles from './styles';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Icon name="account" color="#000" size={100} />
    </View>
  );
}