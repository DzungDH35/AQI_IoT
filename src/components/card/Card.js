import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {AqiQuality} from '@models/AirQuality';
import {FaceStatus} from '@components/card/FaceStatus';
import {Colors} from '@shared/colors';

import {mockAirQuality} from '@shared/mock-data';
import {AirQuality} from '../../models/AirQuality';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 7,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    width: '100%',
  },
  containerShadow: {
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  leftInfoWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.GOOD,
    width: '35%',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  textStatus: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.TEXT_NORMAL,
  },
  faceStatus: {
    marginTop: 12,
  },
  aqiNumber: {
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.TEXT_NORMAL,
  },
  aqiUnit: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.TEXT_NORMAL,
  },
  rightInfoWrapper: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  location1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.TEXT_NORMAL,
  },
  location2: {
    color: Colors.TEXT_NORMAL,
    fontSize: 14,
  },
  detailWrapper: {
    flexDirection: 'row',
    height: 80,
    color: Colors.TEXT_NORMAL,
  },
  time: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.TEXT_NORMAL,
  },
  angleRight: {
    bottom: 8,
    position: 'absolute',
    right: 8,
    color: Colors.TEXT_NORMAL,
  },
});

export class Card extends React.Component {
  aqiObject = new AirQuality(mockAirQuality.Good);
  aqiLevel = this.aqiObject.getLevelOfAqi();
  status = this.aqiObject.getStatus();
  aqi = this.aqiObject.getAqi();

  getLeftInfoWrapperBackground() {
    let aqiColor;
    switch (this.aqiLevel) {
      case 0:
        aqiColor = Colors.GOOD;
        break;
      case 1:
        aqiColor = Colors.MODERATE;
        break;
      case 2:
        aqiColor = Colors.UNHEALTHY_1;
        break;
      case 3:
        aqiColor = Colors.UNHEALTHY_2;
        break;
      case 4:
        aqiColor = Colors.UNHEALTHY_3;
        break;
      case 5:
        aqiColor = Colors.HAZARDOUS;
        break;
    }
    return {
      backgroundColor: aqiColor,
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, styles.containerShadow, this.props.style]}
        onPress={() => {}}
        activeOpacity={0.8}>
        <View
          style={[styles.leftInfoWrapper, this.getLeftInfoWrapperBackground()]}>
          <Text style={styles.textStatus}>{this.status}</Text>
          <FaceStatus status={this.aqiLevel} style={styles.faceStatus} />
          <View>
            <Text style={styles.aqiNumber}>{this.aqi}</Text>
            <Text style={styles.aqiUnit}>US AQI</Text>
          </View>
        </View>
        <View style={styles.rightInfoWrapper}>
          <View>
            <Text style={styles.location1}>Hà nội: Trường Chinh</Text>
            <Text style={styles.location2}>Hanoi, Vietnam</Text>
          </View>
          <View style={styles.detailWrapper}>
            {/* nho style colors cho text la TEXT_NORMAL
						neu khong khi chuyen sang darkmode thi text chuyen thanh mau trang k nhin dc*/}
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
          <Text style={styles.time}>Dec 6, 12:45</Text>
          <Icon style={styles.angleRight} name="angle-right" size={15} />
        </View>
      </TouchableOpacity>
    );
  }
}
