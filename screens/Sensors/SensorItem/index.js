import React from 'react';
import { View, Text } from 'react-native';
import {
  TouchableRipple,
  Title,
  Subheading,
  Paragraph,
} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

import { tintColor } from 'constants/colors';
import Icon from 'components/Icon';

import styles from './styles';

export default function SensorItem(props) {
  const {
    name,
    active,
    temperature,
    region,
    latitude,
    longitude,
    floor,
    distance,
    remark,
    onPress,
  } = props;

  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => onPress ? onPress() : null}
      rippleColor={tintColor}
    >
      <>
        <View style={styles.leftCol}>
          <Title>
            {name}
          </Title>
          <Subheading style={active ? styles.online : styles.offline}>
            {active ? 'Online' : 'Offline'}
          </Subheading>
          <View style={styles.location}>
            <Entypo name="location-pin" color="#000" size={20} />
            <Paragraph>
              Lat: {latitude || 'Unknown'}, Lon: {longitude || 'Unknown'}
            </Paragraph>
          </View>
        </View>
        <View style={styles.rightCol}>
          <Icon name="coolant-temperature" color="red" size={18} />
          <Paragraph style={styles.temp}>
            {temperature || 'Unknown'} C degree
          </Paragraph>
        </View>
      </>
    </TouchableRipple>
  );
};