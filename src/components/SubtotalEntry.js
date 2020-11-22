import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubtotalEntry = (props) => {
	return (
		<View>
			<Text style={styles.header}>Input Subtotal</Text>
			<Input 
			leftIcon={{ type: 'font-awesome', name: 'dollar' }}
			keyboardType={'decimal-pad'} 
			placeholder='Click to Enter' 
			value={props.subtotal} 
			onChangeText={props.handleSubtotalChange} />
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