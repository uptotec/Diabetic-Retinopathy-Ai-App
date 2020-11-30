import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ImagePreview = ({image, onPressSendReq, OnPressPick, loading}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image.uri}} style={styles.image} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={onPressSendReq}
          style={styles.getResults}
          disabled={loading}>
          {!loading ? (
            <Text style={styles.buttonsText}>Get Results</Text>
          ) : (
            <ActivityIndicator size="small" color="#D65780" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={OnPressPick}
          style={styles.changeImage}
          disabled={loading}>
          <Text style={styles.buttonsText}>Change Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 244,
    width: 244,
  },
  buttons: {
    alignItems: 'center',
    margin: 10,
  },
  getResults: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#016FB9',
    width: 244,
    height: 30,
    marginBottom: 10,
    borderRadius: 3,
  },
  changeImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D65780',
    width: 244,
    height: 30,
    marginBottom: 10,
    borderRadius: 3,
  },
  buttonsText: {
    color: '#fff',
  },
});
