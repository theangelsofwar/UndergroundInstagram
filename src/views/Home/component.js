import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../assets/theme/styles/app';

const HomeComponent = () => (
  <View style={[styles.ceteredItemsContainer, { flex: 1 }]}>
    <Text> {`Let's fuck it uppppppppppppp {}`}</Text>
  </View>
);

HomeComponent.propTypes={};

export default HomeComponent;