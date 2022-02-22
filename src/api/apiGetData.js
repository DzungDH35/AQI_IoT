import { api } from './index';

export const apiGetData = {
  getByDay: ( BASE_URL, deviceId, dateTime) => {
    return api.get(BASE_URL + '/getInformationbydate2', {
      headers: {
        deviceId : deviceId,
        dateTime: dateTime
      }
    });
  },
  getByMonth: (BASE_URL, deviceId, dateTime) => {
    return api.get(BASE_URL + '/getInformationbymonth',{
      headers: {
        deviceId : deviceId,
        dateTime: dateTime
      }
    });
  },
  getAll: ()=>{
    return api.get('/getInformation', {
      deviceId : "3cec62d2-c37b-4ac1-b698-d8d255ef016c"
    });
  }
};
