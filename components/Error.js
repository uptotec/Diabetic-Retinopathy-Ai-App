import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Error = ({errorMessage}) => {
  return (
    <View style={styles.container}>
      <Icon name="alert" color="#fff" size={20} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    margin: 5,
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
