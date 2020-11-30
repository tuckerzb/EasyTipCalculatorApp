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
				thumbStyle={{backgroundColor: '#58a26a'}}
				onValueChange={(value) => props.handleSplitChange(value)}
				style={{     marginBottom: 10}}
			/>
			<Text style={styles.subHeader}>Tip Per Person</Text>
			<Text style={styles.total}>{(props.tipPer == 'NaN') ? '' : props.tipPer}</Text>
			<Text style={styles.subHeader}>Total Per Person</Text>
			<Text style={styles.total}>{(props.totalPer == '0.00') ? '' : props.totalPer}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
        backgroundColor: '#45778c',
             marginBottom: 10,
  },
    subHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
             marginBottom: 10,
  },
  split: {
  	fontSize: 20,
  	textAlign: 'center',
  	     marginBottom: 10,
  },
  total: {
  	fontSize: 20,
  	textAlign: 'center',
  	     marginBottom: 10,
  },
});

export default SplitBill;