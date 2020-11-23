import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AppHeader from './src/components/AppHeader';
import SubtotalEntry from './src/components/SubtotalEntry';
import TipEntry from './src/components/TipEntry';
import SplitBill from './src/components/SplitBill.js';


const App = () => {
  const [subtotal, setSubtotal] = useState('');
  const [tipPercent, setTipPercent] = useState(20);
  const [split, setSplit] = useState(1);

  const [subtotalFloat, setSubtotalFloat] = useState(0.0);
  const [tipPercentFloat, setTipPercentFloat] = useState(.2);
  const [billTotalFloat, setBillTotalFloat] = useState(0.0);

  const [tipPer, setTipPer] = useState(0.0);
  const [totalPer, setTotalPer] = useState(0.0);

  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
    setSubtotalFloat(Number.parseFloat(newSubtotal));
  };

  const handleTipPercentChange = (newTipPercent) => {
    setTipPercent(newTipPercent);
    setTipPercentFloat(Number.parseFloat(newTipPercent / 100));
  };

  const handleSplitChange = (newSplit) => {
    setSplit(newSplit);
    // setTipPer(calculateTipPer().toFixed(2));
    // setTotalPer(billTotalFloat / newSplit);
  }

  const handleClear = () => {
    setSubtotal('');
    setTipPercent(20);
    setSplit(1);
  }

  useEffect(() => {
    console.log("Subtotal: " + subtotal);
    console.log("Tip Percent:" + tipPercent);
    console.log("Split: " + split);
    console.log("Suntotal Float: " + subtotalFloat);
    console.log("Tip Percent Float: " + tipPercentFloat);
    console.log("Bill Total Float: " + billTotalFloat);
    console.log("Tip Per:" + tipPer);
    console.log("Total Per: " + totalPer);
    console.log("------------------------");

    setSubtotalFloat(Number.parseFloat(subtotal));
    setTipPercentFloat(Number.parseFloat((tipPercent) / 100));
    setTipPer(calculateTipPer().toFixed(2));
    setTotalPer(calculateTotalPer().toFixed(2));

    if (Number.isNaN(calculateBillTotal())) {
      setBillTotalFloat('');
    } else {
      setBillTotalFloat(calculateBillTotal().toFixed(2));
    }

  })

  const calculateTipPer = () => {
    return (((subtotalFloat * tipPercentFloat) + subtotalFloat) / split);
  };

  const calculateTotalPer = () => {
    return (billTotalFloat / split);
  };

  const calculateBillTotal = () => {
    return (subtotalFloat + (subtotalFloat * tipPercentFloat));
  };



  return (
  <View  style={styles.container}>
    <View style={styles.header}>
      <AppHeader {...{handleClear}} />
    </View>
    <View style={styles.subtotal}>
      <SubtotalEntry {...{subtotal, handleSubtotalChange}} />
    </View>
    <View style={styles.tip}>
      <TipEntry {...{tipPercent, billTotalFloat, handleTipPercentChange}} />
    </View>
        <View style={styles.split}>
      <SplitBill {...{split, tipPer, totalPer, handleSplitChange}} />
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
      split: {
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