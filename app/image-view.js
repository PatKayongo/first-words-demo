import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class ImageView extends Component {
	static navigationOptions = ({ navigation }) => ({
    	title: navigation.state.params.items[navigation.state.params.index].name
  	});

	render() {
		const { params } = this.props.navigation.state;
		const currentItem = params.items[params.index];
		const { navigate } = this.props.navigation;

		return (
			<View style={{ backgroundColor: currentItem.backgroundColor, flex: 1 }}>
				<Image source={currentItem.image} />
				<Text style={{ color: currentItem.textColour}}>{ currentItem.name }</Text>
				
				{
					(params.index < (params.items.length - 1)) &&
						<TouchableOpacity onPress={() => navigate('Image', { items: params.items, index: params.index + 1 } )}>
							<Text>Next</Text>
						</TouchableOpacity>
				}
			</View>
		)
	}
}