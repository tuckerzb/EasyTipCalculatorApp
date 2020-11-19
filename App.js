import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AppHeader from './src/components/AppHeader';
import SubtotalEntry from './src/components/SubtotalEntry';
import TipEntry from './src/components/TipEntry';


const App = () => {
  const [subtotal, setSubtotal] = useState('');
  const [tipPercent, setTipPercent] = useState(20);

  const [subtotalFloat, setSubtotalFloat] = useState(0.0);
  const [tipPercentFloat, setTipPercentFloat] = useState(.2);
  const [billTotalFloat, setBillTotalFloat] = useState(0.0);

  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

  const handleTipPercentChange = (newTipPercent) => {
    setTipPercent(newTipPercent);
  };

  useEffect(() => {
    setSubtotalFloat(Number.parseFloat(subtotal));
    setTipPercentFloat(Number.parseFloat((tipPercent) / 100));

    if (Number.isNaN(calculateBillTotal())) {
      setBillTotalFloat('');
    } else {
      setBillTotalFloat(calculateBillTotal().toFixed(2));
    }

  })

  const calculateBillTotal = () => {
    return (subtotalFloat + (subtotalFloat * tipPercentFloat));
  };



  return (
  <View  style={styles.container}>
    <View style={styles.header}>
      <AppHeader />
    </View>
    <View style={styles.subtotal}>
      <SubtotalEntry {...{subtotal, handleSubtotalChange}} />
    </View>
    <View style={styles.tip}>
      <TipEntry {...{tipPercent, billTotalFloat, handleTipPercentChange}} />
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
    tip: {
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