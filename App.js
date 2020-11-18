import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AppHeader from './src/components/AppHeader';


const App = () => {
  return (
  <View  style={styles.container}>
    <View style={styles.header}>
      <AppHeader />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    
  },
});



export default App;