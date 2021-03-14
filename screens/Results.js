import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ['No_DR', 'Mild', 'Moderate', 'Severe', 'Proliferate_DR'];

const messages = [
  'You do not have Diabetic retinopathy disease. So, according to the current circumstances , There is no need for you to go to hospital.',
  'You do have diabetic retinopathy. Your case is Mild. You do not have to go to hospital but you must follow your medications.',
  'You do have diabetic retinopathy. Your case is moderate . You must go to hospital as soon as possible.',
  'You do have diabetic retinopathy. Your case is Severe . You must go to hospital as soon as possible.',
  'You do have diabetic retinopathy. Your case is proliferative  . You must go to hospital as soon as possible.',
];

const renderLabel = ({position, label, currentPosition}) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }>
      {label}
    </Text>
  );
};

const Results = ({route, navigation}) => {
  const {result} = route.params;
  const resultIndex = labels.indexOf(result);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Case is {result}</Text>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={5}
          currentPosition={resultIndex}
          labels={labels}
          renderLabel={renderLabel}
        />
      </View>
      <Text style={styles.message}>{messages[resultIndex]}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}>
        <Text style={styles.goBackButtonText}>Take another scan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  stepIndicator: {
    margin: 30,
    width: Dimensions.get('screen').width - 10,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#1c88d6',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2d302f',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2d302f',
    marginHorizontal: 10,
  },
  image: {
    height: 280,
    width: 280,
  },
  goBackButton: {
    margin: 20,
    paddingHorizontal: 45,
    paddingVertical: 10,
    backgroundColor: '#1c88d6',
    borderRadius: 5,
  },
  goBackButtonText: {
    color: '#fff',
  },
});

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#1c88d6',
  separatorUnFinishedColor: '#68bbf7',
  stepIndicatorFinishedColor: '#1c88d6',
  stepIndicatorUnFinishedColor: '#68bbf7',
  stepStrokeCurrentColor: '#1c88d6',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#1c88d6',
};
