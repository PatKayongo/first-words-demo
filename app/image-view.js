import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ImageView extends Component {
	static navigationOptions = ({ navigation }) => ({
    	title: navigation.state.params.items[navigation.state.params.index].name
  	});

	render() {
		const { params } = this.props.navigation.state;
		const currentItem = params.items[params.index];
		const { navigate } = this.props.navigation;

		return (
			<View style={ [styles.container, { backgroundColor: currentItem.backgroundColor }]}>
				<View>
					<Image resizeMode='contain' source={currentItem.image} />
				</View>
				<Text style={[ styles.name, { color: currentItem.textColour}]}>{ currentItem.name }</Text>
				
				{
					(params.index < (params.items.length - 1)) &&
						<TouchableOpacity style={styles.button} onPress={() => navigate('Image', { items: params.items, index: params.index + 1 } )}>
							<Text style={styles.buttonText}>Next</Text>
						</TouchableOpacity>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	name: {
		fontSize: 50,
		fontWeight: 'bold',
		marginTop: 10
	},
	button: {
		marginTop: 20,
		backgroundColor: '#EBE994',
		width: 90,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 20
	}
})