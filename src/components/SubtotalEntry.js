import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const SubtotalEntry = () => {
	return (
		<View>
			<Text style={styles.header}>Step 1: Input Subtotal</Text>
			<Input keyboardType={'decimal-pad'} placeholder='$$$' />
		</View>
	);
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default SubtotalEntry;