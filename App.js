import React, {useState, useEffect} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Overlay, Text} from 'react-native-elements';
import AppHeader from './src/components/AppHeader';
import SubtotalEntry from './src/components/SubtotalEntry';
import TipEntry from './src/components/TipEntry';
import SplitBill from './src/components/SplitBill.js';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const App = () => {
  const [subtotal, setSubtotal] = useState('');
  const [tipPercent, setTipPercent] = useState(20);
  const [split, setSplit] = useState(1);

  const [subtotalFloat, setSubtotalFloat] = useState(0.0);
  const [tipPercentFloat, setTipPercentFloat] = useState(.2);
  const [billTotalFloat, setBillTotalFloat] = useState(0.0);

  const [tipPer, setTipPer] = useState(0.0);
  const [totalPer, setTotalPer] = useState(0.0);

  const [modalVisible, setModalVisible] = useState(false);

  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
    setSubtotalFloat(Number.parseFloat(newSubtotal));
  };

  const handleTipPercentChange = (newTipPercent) => {
    Keyboard.dismiss();
    setTipPercent(newTipPercent);
    setTipPercentFloat(Number.parseFloat(newTipPercent / 100));
  };

  const handleSplitChange = (newSplit) => {
    Keyboard.dismiss();
    setSplit(newSplit);
  }

  const handleClear = () => {
    Keyboard.dismiss();
    setSubtotal('');
    setTipPercent(20);
    setSplit(1);
  }

  useEffect(() => {
    // console.log("Subtotal: " + subtotal);
    // console.log("Tip Percent:" + tipPercent);
    // console.log("Split: " + split);
    // console.log("Suntotal Float: " + subtotalFloat);
    // console.log("Tip Percent Float: " + tipPercentFloat);
    // console.log("Bill Total Float: " + billTotalFloat);
    // console.log("Tip Per:" + tipPer);
    // console.log("Total Per: " + totalPer);
    // console.log("------------------------");

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
    return (((subtotalFloat * tipPercentFloat)) / split);
  };

  const calculateTotalPer = () => {
    return (billTotalFloat / split);
  };

  const calculateBillTotal = () => {
    return (subtotalFloat + (subtotalFloat * tipPercentFloat));
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  }



  return (
  <SafeAreaProvider>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppHeader {...{handleClear, handleModal}} />
          </View>
          <View style={styles.contentContainer}>
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
        </View>
      </TouchableWithoutFeedback>
        <Overlay isVisible={modalVisible} onBackdropPress={handleModal}>
          <View style={styles.helpModal}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Thank You for Using Easy Tip Calculator!</Text>
            <Text style={{fontSize: 15, marginTop: 10}}>This app was developed and is maintained by Zach Tucker (
                <Text onPress={() => Linking.openURL('https://zachtucker.dev')}>https://zachtucker.dev</Text>)
            </Text>
            <Text style={{fontSize: 15, marginTop: 10}}>Powered by React Native (
                <Text onPress={() => Linking.openURL('https://reactnative.dev')}>https://reactnative.dev</Text>)
            </Text>
          </View>
        </Overlay>
    </KeyboardAvoidingView>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f6',
  },
  contentContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  subtotal: {
    marginTop: 10,
    backgroundColor: '#e1e2e1',
    borderWidth: 1,
  },
    tip: {
        marginTop: 10,
        backgroundColor: '#e1e2e1',
        borderWidth: 1,
  },
    split: {
      marginTop: 10,
      backgroundColor: '#e1e2e1',
      borderWidth: 1,
  },
  helpModal: {
    
  }
});

export default App;