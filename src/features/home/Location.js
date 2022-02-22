import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Card } from '@components/card/Card';
import { Colors } from '@shared/colors/index';
import MQTT from 'sp-react-native-mqtt';
import Header from '@components/header/Header';

const styles = StyleSheet.create({
	loading: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 250
	},
	list: {
		paddingBottom: 14,
		paddingHorizontal: 14
	},
	listItem: {
		marginTop: 14,
	},
	loadingText:{
		color: 'black',
		fontSize: 16,
		marginBottom: 14,
	}
});

class Location extends React.Component {
	mqttClient = MQTT.createClient({
		uri: 'mqtt://broker.hivemq.com:1883',
		clientId: 'clientId' + Date.now()
	});

	constructor(props) {
		// console.log('Location fragment constructs');
		super(props);
		this.state = {
			data: []
		};

		this.mqttClient
			.then(client => {
				client.on('connect', () => {
					// console.log('MQTT Connection is successful');
					client.subscribe('/aqi/#', 2);
				});

				client.on('message', msg => {
					let dataObj = JSON.parse(msg.data);
					// console.log(dataObj.deviceId);
					if (Object.keys(dataObj).length !== 0) {
						this.updateCurrentData(dataObj);
					}
				});

				client.on('closed', () => {
					// console.log('MQTT Connection is closed');
					MQTT.removeClient(client);
				});

				client.on('error', msg => {
					console.log('MQTT Error: ', msg);
				});

				client.connect();
			})
			.catch(err => {
				console.log('MQTT Exception: ' + err);
			});
	}

	componentWillUnmount() {
		// console.log('Location fragment unmounts');
		this.mqttClient.then(client => {
			client.disconnect();
		});
	}
		

	render() {
		// console.log('Location fragment renders');
		
		return (
			<View style={{flex: 1}}>
      			<Header />
				{this.state.data.length == 0 ? 
					(
						<View style={styles.loading}>
							<Text style={styles.loadingText}>Đang tìm kiếm các trạm...</Text>
							<ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
						</View>
					) : (
						<FlatList
							contentContainerStyle={styles.list}
							data={this.state.data}
							renderItem={({ item }) => (
								<Card outerLayout={styles.listItem} {...item} navigation={this.props.navigation}/>
							)}
							keyExtractor={(item) => item.deviceId}
						/>
					)}
			</View>
		)
	}

	updateCurrentData(newPiece) {
		let newData = this.state.data;
		let newPieceHasExistentId = false;

		for (let item of newData) {
			if (item['deviceId'] === newPiece['deviceId']) {
				item['deviceType'] = newPiece['deviceType'];
				item['data'] = newPiece['data'];
				newPieceHasExistentId = true;
				break;
			}
		}

		if (!newPieceHasExistentId) {
			newData.push(newPiece);
		}
		this.setState({data: newData});
	}
}

export { Location as LocationFragment };
