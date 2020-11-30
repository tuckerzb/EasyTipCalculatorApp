import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Slider} from 'react-native-elements';

const TipEntry = (props) => {
	return (
		<View>
			<Text style={styles.header}>Select Tip %</Text>
			<Text style={styles.percent}>{props.tipPercent}%</Text>
			<Slider 
				minimumValue={10}
				maximumValue={50}
				step={1}
				value={props.tipPercent}
				thumbStyle={{backgroundColor: '#58a26a'}}
				onValueChange={(value) => props.handleTipPercentChange(value)}
				style={{     marginBottom: 10}}
			/>
			<Text style={styles.subHeader}>Total With Tip</Text>
			<Text style={styles.total}>{props.billTotalFloat}</Text>
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
  percent: {
  	fontSize: 20,
  	textAlign: 'center',
  	     marginBottom: 10,
  },
  total: {
  	fontSize: 20,
  	textAlign: 'center',
  	     marginBottom: 10,
  },
      subHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
             marginBottom: 10,
  },
});

export default TipEntry;