import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ totalSteps, currentStep }) => {
  const indicators = [];

  for (let i = 0; i < totalSteps; i++) {
    indicators.push(
      <View
        key={i}
        style={[
          styles.indicator,
          { backgroundColor: i === currentStep ? colors.primary : colors.grey }
        ]}
      />
    );
  }

  return <View style={styles.container}>{indicators}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default ProgressIndicator;