import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const AppHeader = (props) => {
 return (
		<Header
		leftComponent={
			<TouchableOpacity  onPress={props.handleClear}>
                <Icon
                    name="clear"
                    size={30}
                    color="#fff"/>
            </TouchableOpacity>
		}
		  centerComponent={{ text: 'EASY TIP CALCULATOR', style: { margin: 0, padding: 0, color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
		  containerStyle={{
		  	backgroundColor: '#002335'
		  }}
		/>
	);
};

const ClearIcon = () => {
	return (
		<Icon name="clear" color="#fff" />
	);
};

export default AppHeader;