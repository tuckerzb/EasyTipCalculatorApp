import React from 'react';
import {Text} from 'react-native';
import {Header} from 'react-native-elements';

const AppHeader = () => {
 return (
		<Header
		leftComponent={{ icon: 'clear', color: '#fff' }}
		  centerComponent={{ text: 'EASY TIP CALCULATOR', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
		  containerStyle={{
		  	backgroundColor: '#05386B'
		  }}
		/>
	);
};

export default AppHeader;