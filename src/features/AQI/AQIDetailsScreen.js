import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {viewAQI} from '@shared/viewData';
import {Colors} from '@shared/colors';
import Header from '@components/header/Header';
import CardDetails from '@components/card/CardDetails';
import ListPollutants from '@components/listPollutants/ListPollutants';
import Chart from '@components/chart/Chart';

const AQIScreen = ({navigation, route}) => {
  const data = route.params.data;
  // console.log(data.deviceId);
  const [view, setView] = useState();
  useEffect(() => {
    setView(viewAQI(data.aqi));
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header showBackIcon onPress={()=>{navigation.goBack()}}/>
      {view == undefined ? (
        <ActivityIndicator
          size={'large'}
          color={Colors.TEXT_NORMAL}
          style={{marginTop: 20}}
        />
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <CardDetails 
            view={view} 
            AQI={data.aqi} 
            temperature={data.temperature} 
            humidity={data.humidity} 
            time={data.time}
            address={data.address}
          />
          {/* AQI tổng quan */}
          <ListPollutants CO={data.co} PM2_5={data.pm25}/>
          {/* Các Chất gây ô nhiễm */}
          <Chart deviceId={data.deviceId}/>
          {/* BIỂU ĐỒ AQI VÀ CÁC CHẤT KHÁC */}
        </ScrollView>
      )}
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.GREY,
    flex: 1,
  },
});
export default AQIScreen;
