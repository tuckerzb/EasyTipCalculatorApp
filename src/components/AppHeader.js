import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const AppHeader = (props) => {
 return (
		<Header
		leftComponent={
			<TouchableOpacity  onPress={props.handleClear}>
                <Icon
                    name="backspace"
                    size={30}
                    color="#fff"/>
            </TouchableOpacity>
		}
		  centerComponent={{ text: 'EASY TIP CALCULATOR', style: { margin: 0, padding: 0, color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
		  containerStyle={{
		  	backgroundColor: '#002335'
		  }}

		  rightComponent={
			<TouchableOpacity  onPress={props.handleModal}>
				<Icon
				name="help"
				size={30}
				color="#fff"/>
			</TouchableOpacity>
		  }
		/>
	);
};

export default AppHeader;