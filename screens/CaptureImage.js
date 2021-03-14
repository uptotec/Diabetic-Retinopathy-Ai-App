import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Picker from 'react-native-image-picker';
import getPredictions from '../api';
import UploadButton from '../components/UploadButton';
import ImagePreview from '../components/imagePreview';
import Error from '../components/Error';

const CaptureImage = ({navigation}) => {
  const [picked, setPicked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [image, setImage] = React.useState(null);

  const options = {
    mediaType: 'photo',
    maxWidth: 244,
    maxHight: 244,
    includeBase64: false,
  };

  const sendGetPredictionsReq = async () => {
    setLoading(true);

    const prediction = await getPredictions(image);

    if (!prediction) {
      setPicked(false);
      setLoading(false);
      setError(true);
      return;
    }

    setError(false);
    setLoading(false);
    setPicked(false);
    navigation.push('Results', {...prediction, imageUri: image.uri});
  };

  const pickedImage = (res) => {
    if (res.didCancel) {
      return;
    }

    setError(false);
    setImage({uri: res.uri, fileName: res.fileName, type: res.type});
    setPicked(true);
  };

  return (
    <View style={styles.container}>
      {!picked ? (
        <UploadButton
          onPress={() => {
            Picker.launchImageLibrary(options, pickedImage);
          }}
        />
      ) : (
        <ImagePreview
          image={image}
          onPressSendReq={sendGetPredictionsReq}
          loading={loading}
          OnPressPick={() => {
            Picker.launchImageLibrary(options, pickedImage);
          }}
        />
      )}
      {error ? (
        <Error errorMessage="Something has occurred, Please try again" />
      ) : null}
    </View>
  );
};

export default CaptureImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
