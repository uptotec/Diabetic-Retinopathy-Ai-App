import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UploadButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.uploadButton} onPress={onPress}>
        <Icon name="upload" size={70} color="#1c88d6" />
        <Text>Pick Scan Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
