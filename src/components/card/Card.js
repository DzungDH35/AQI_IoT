import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GreenFace from '@assets/icons/face-green.svg';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		borderWidth: 1,
	},
	leftInfoWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		flexBasis: '30%',
		paddingVertical: 10,
		backgroundColor: '#a8e05f'
	},
	rightInfoWrapper: {
		paddingHorizontal: 20,
		paddingVertical: 8
	},
	location1: {
		fontWeight: 'bold',
		fontSize: 18
	},
	location2: {
		fontSize: 14
	}
	
});

export class Card extends React.Component {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<View style={styles.leftInfoWrapper}>
					<Text>Good</Text>
					<Icon name="comments" size={30} color="#900" />
					<GreenFace/>
					<View>
						<Text>104</Text>
						<Text>US AQI</Text>
					</View>
				</View>
				<View>
					<View style={styles.rightInfoWrapper}>
						<Text style={styles.location1}>Hà nội: Trường Chinh</Text>
						<Text style={styles.location2}>Hanoi, Vietnam</Text>
					</View>
					<View></View>
					<View></View>
				</View>
			</View>
		);
	}
}