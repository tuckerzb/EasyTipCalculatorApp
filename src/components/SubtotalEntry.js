import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const SubtotalEntry = (props) => {
	return (
		<View>
			<Text style={styles.header}>Input Subtotal</Text>
			<Input keyboardType={'decimal-pad'} placeholder='$$$' value={props.subtotal} onChangeText={props.handleSubtotalChange} />
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