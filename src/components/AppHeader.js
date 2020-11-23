import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const AppHeader = (props) => {
 return (
		<Header
		// leftComponent={{ icon: 'clear', color: '#fff' }}
		leftComponent={
			<TouchableOpacity  onPress={props.handleClear}>
                <Icon
                    // containerStyle={{paddingRight: 16}}
                    name="clear"
                    size={30}
                    color="#fff"/>
            </TouchableOpacity>
		}
		  centerComponent={{ text: 'EASY TIP CALCULATOR', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
		  containerStyle={{
		  	backgroundColor: '#05386B'
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