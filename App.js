import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AppHeader from './src/components/AppHeader';
import SubtotalEntry from './src/components/SubtotalEntry';


const App = () => {
  return (
  <View  style={styles.container}>
    <View style={styles.header}>
      <AppHeader />
    </View>
    <View style={styles.subtotal}>
      <SubtotalEntry />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#379683',
  },
  header: {

  },
  subtotal: {
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: '#5CDb95',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});



export default App;