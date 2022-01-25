import { Colors } from '@shared/colors';

export const viewColor = [
    {
        name: 'good',
        color: Colors.GOOD,
        color2: Colors.GOOD_2,
        faceIcon: 0,
        description: 'Tốt',
    },
    {
        name: 'MODERATE',
        color: Colors.MODERATE,
        color2: Colors.MODERATE_2,
        faceIcon: 1,
        description: 'Trung bình',
    },
    {
        name: 'UNHEALTHY_1',
        color: Colors.UNHEALTHY_1,
        color2: Colors.UNHEALTHY_1_2,
        faceIcon: 2,
        description: 'Không tốt cho nhóm nhạy cảm',
    },
    {
        name: 'UNHEALTHY_2',
        color: Colors.UNHEALTHY_2,
        color2: Colors.UNHEALTHY_2_2,
        faceIcon: 3,
        description: 'Có hại cho sức khoẻ',
    },
    {
        name: 'UNHEALTHY_3',
        color: Colors.UNHEALTHY_3,
        color2: Colors.UNHEALTHY_3_2,
        faceIcon: 4,
        description: 'Rất có hại cho sức khoẻ',
    },
    {
        name: 'HAZARDOUS',
        color: Colors.HAZARDOUS,
        color2: Colors.HAZARDOUS_2,
        faceIcon: 5,
        description: 'Nguy hại',
    },
]

export const viewAQI = (AQI)=>{
    if(AQI !== undefined || AQI !== null){
        if(AQI >= 0 && AQI <=50){
            return viewColor[0];
        }else if (AQI > 50 && AQI <=100){
            return viewColor[1];
        }else if (AQI > 100 && AQI <=150){
            return viewColor[2];
        }else if (AQI > 150 && AQI <=200){
            return viewColor[3];
        }else if (AQI > 200 && AQI <=300){
            return viewColor[4];
        }else{
            return viewColor[5];
        } 
    }
    return 0;
}