import React from 'react';
import {Text} from 'react-native';
import {Header} from 'react-native-elements';

const AppHeader = () => {
 return (
		<Header
		leftComponent={{ icon: 'clear', color: '#000' }}
		  centerComponent={{ text: 'EASY TIP CALCULATOR', style: { color: '#000', fontSize: 20, fontWeight: 'bold' } }}
		  containerStyle={{
		  	backgroundColor: '#5CDB95'
		  }}
		/>
	);
};

export default AppHeader;