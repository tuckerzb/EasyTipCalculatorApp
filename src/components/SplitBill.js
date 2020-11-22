import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Slider} from 'react-native-elements';

const SplitBill = (props) => {
	return (
		<View>
			<Text style={styles.header}>Split Bill?</Text>
			<Text style={styles.split}>{props.split} {props.split > 1 ? 'People' : 'Person'}</Text>
			<Slider 
				minimumValue={1}
				maximumValue={10}
				step={1}
				value={props.split}
				onValueChange={(value) => props.handleSplitChange(value)}
			/>
			<Text style={styles.header}>Tip Per Person</Text>
			<Text style={styles.total}>{(Number.isNaN(props.tipPer) || props.tipPer == '0') ? '' : props.tipPer}</Text>
			<Text style={styles.header}>Total Per Person</Text>
			<Text style={styles.total}>{(Number.isNaN(props.totalPer) || props.totalPer == '0') ? '' : props.totalPer}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  split: {
  	fontSize: 20,
  	textAlign: 'center',
  },
  total: {
  	fontSize: 20,
  	textAlign: 'center',
  },
});

export default SplitBill;