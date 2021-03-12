import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';

const SubtotalEntry = (props) => {
	return (
		<View>
			<Text style={styles.header}>Input Subtotal</Text>
			<Input 
			leftIcon={
				<Icon
      				name='dollar'
					type='font-awesome'
      				size={24}
      				color='black'
    		/>}
			keyboardType={'numeric'} 
			placeholder='Touch to Enter' 
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
        backgroundColor: '#45778c',
     marginBottom: 10,
  },
});

export default SubtotalEntry;