import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.jpg';

const HowToUse = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>
          To construct a{' '}
          <Text style={styles.textRed}>simple home-made prototype</Text> follow
          these instructions:
        </Text>

        <Text style={styles.textPoints}>
          1. A <Text style={styles.textBlue}>20-diopter lens</Text>, with 6.5 cm
          diameter, provided with an antireflection layer, was bought from an
          optician.
        </Text>

        <Text style={styles.textPoints}>
          2. A <Text style={styles.textBlue}>plastic water bottle</Text> was cut
          from both sides such that its length is 20 cm. The side nearer to the
          bottle's neck was cut to be 5 cm diameter to fit the lens. The other
          side was cut to fit the mobile phone.
        </Text>

        <Text style={styles.textPoints}>
          3. The bottle was then covered from inside with a black color sheet,
          or it can be painted with black color to increase contrast, hence
          increasing the retina's photo quality.
        </Text>

        <Text style={styles.textPoints}>
          4. <Text style={styles.textBlue}>Cardboard</Text> was cut to be a
          suitable holder for mobile phone.
        </Text>

        <Text style={styles.textPoints}>
          5. The bottle, lens, cardboard are all attached by the double face
          tape, as shown in the following figures
        </Text>

        <Image source={image1} style={styles.image} resizeMode="contain" />
        <Image source={image2} style={styles.arrow} resizeMode="contain" />
        <Image source={image3} style={styles.image} resizeMode="contain" />

        <Text style={styles.textPoints}>
          <Text style={styles.textBlue}>Patient positioning:</Text> typically,
          the patient is reclined and you are standing. If the patient can lie
          supine and you hover directly over, that would be even better.
        </Text>

        <Text style={{...styles.textPoints, alignSelf: 'baseline'}}>
          <Text style={styles.textBlue}>First:</Text>
        </Text>

        <Text style={{...styles.textPoints, alignSelf: 'baseline'}}>
          1. Make sure all smudges and dust are wiped clean from the lens.
        </Text>

        <Text style={{...styles.textPoints, alignSelf: 'baseline'}}>
          2. Hold the lens about 5 cm from the patient's cornea.
        </Text>

        <Text style={{...styles.textPoints, alignSelf: 'baseline'}}>
          <Text style={styles.textBlue}>second:</Text>
        </Text>

        <Text style={{...styles.textPoints, alignSelf: 'baseline'}}>
          1. Hold the phone about 20 cm from the lens.
        </Text>

        <Text style={styles.textPoints}>
          2. It is critical to maintain a steady axis of alignment between the
          phone's camera and the lens, so imagine the condenser lens is stuck on
          a pole attached to your phone as shown in this figure:
        </Text>

        <Image source={image4} style={styles.image} resizeMode="contain" />

        <Text style={styles.textPoints}>
          <Text style={styles.textRed}>important note:</Text> make sure that
          your phone is in-focus to get a clear image
        </Text>

        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 15,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textPoints: {
    marginTop: 10,
  },
  textRed: {
    color: 'red',
    fontWeight: 'bold',
  },
  textBlue: {
    color: 'blue',
    fontWeight: 'bold',
  },
  image: {
    height: 220,
    margin: 10,
  },
  arrow: {
    height: 100,
  },
});
