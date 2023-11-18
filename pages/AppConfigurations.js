import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
// import { Button } from 'react-native-web';

const AppConfigurations = () => {
  return (
    <View style={styles.settings}>
      <Button title='Press'></Button>
      <Button title='Press'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default AppConfigurations;