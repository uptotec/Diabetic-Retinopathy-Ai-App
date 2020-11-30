import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HowToUse = () => {
  return (
    <View style={styles.container}>
      <Text>How to Use</Text>
    </View>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
