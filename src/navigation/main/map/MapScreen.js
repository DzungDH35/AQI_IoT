import { Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '@components/header/Header';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '@shared/colors';
import GlobalContext from "@context/Context";
import MapView from 'react-native-maps';
import Chart from '@components/chart/Chart';
import moment from 'moment';
import { apiGetData } from '@api/apiGetData';
import axios from 'axios';

const deviceId = "3cec62d2-c37b-4ac1-b698-d8d255ef016c";
const dateTime = "2022-1-1";
const BASE_URL = 'http://2b34-1-55-171-249.ngrok.io';
// const  json = JSON.stringify(params)

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        {/* <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}
        <Chart />
      </View>
    </View>
  )
}

export default MapScreen

const styles = ScaledSheet.create({

})