import React from 'react';
import {View, Alert} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  Bar,
} from 'victory-native';
import {Colors} from '@shared/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {Svg} from 'react-native-svg';

const data = [
  {x: 0, y: Math.floor(Math.random() * 200) + 30},
  {x: 1, y: Math.floor(Math.random() * 200) + 30},
  {x: 2, y: Math.floor(Math.random() * 200) + 30},
  {x: 3, y: Math.floor(Math.random() * 200) + 30},
  {x: 4, y: Math.floor(Math.random() * 200) + 30},
  {x: 5, y: Math.floor(Math.random() * 200) + 30},
  {x: 6, y: Math.floor(Math.random() * 200) + 30},
  {x: 7, y: Math.floor(Math.random() * 200) + 30},
  {x: 8, y: Math.floor(Math.random() * 200) + 30},
  {x: 9, y: Math.floor(Math.random() * 200) + 30},
  {x: 10, y: Math.floor(Math.random() * 200) + 30},
  {x: 11, y: Math.floor(Math.random() * 200) + 30},
  {x: 12, y: Math.floor(Math.random() * 200) + 30},
  {x: 13, y: Math.floor(Math.random() * 200) + 30},
  {x: 14, y: Math.floor(Math.random() * 200) + 30},
  {x: 15, y: Math.floor(Math.random() * 200) + 30},
  {x: 16, y: Math.floor(Math.random() * 200) + 30},
  {x: 17, y: Math.floor(Math.random() * 200) + 30},
  {x: 18, y: Math.floor(Math.random() * 200) + 30},
  {x: 19, y: Math.floor(Math.random() * 200) + 30},
  {x: 20, y: Math.floor(Math.random() * 200) + 30},
  {x: 21, y: Math.floor(Math.random() * 200) + 30},
  {x: 22, y: Math.floor(Math.random() * 200) + 30},
  {x: 23, y: Math.floor(Math.random() * 200) + 30},
];

const chartColor = y => {
  if (y < 51) {
    return Colors.GOOD;
  } else if (y > 50 && y < 101) {
    return Colors.MODERATE;
  } else if (y > 100 && y < 151) {
    return Colors.UNHEALTHY_1;
  } else if (y > 150 && y < 201) {
    return Colors.UNHEALTHY_2;
  } else if (y > 200 && y < 301) {
    return Colors.UNHEALTHY_3;
  }
  return Colors.HAZARDOUS;
};

const ChartContent = () => {
  return (
    <View style={{width: '100%', backgroundColor: '#fff'}}>
      <Svg>
        <VictoryChart
          theme={VictoryTheme.material}
          barRatio={10}
          domain={{x: [0, 23]}}
          // externalEventMutations={externalMutations}
          events={[
            {
              target: "data",
              childName: "Bar-1",
              eventHandlers: {
                onClick: () => ({
                  target: "data",
                  mutation: () => ({ style: { fill: "orange" } })
                })
              }
            }
          ]}
          >
          <VictoryBar
            data={data}
            barWidth={10}
            style={{
              data: {
                fill: ({datum}) => chartColor(datum.y),
              },
            }}
            alignment="start"
            eventKey="x"
            // events={[
            //   {
            //     eventHandlers: {
            //       onPress: () => {
            //         return [
            //           {
            //             target: 'data',
            //             mutation: props => {
            //               console.log(props.datum);
            //               const fill = props.style && props.style.fill;
            //               return fill === 'black'
            //                 ? null
            //                 : {style: {fill: 'black'}};
            //             },
            //           },
            //         ];
            //       },
            //     },
            //   },
            // ]}
          />
        </VictoryChart>
      </Svg>
    </View>
  );
};

const styles = ScaledSheet.create({});

export default ChartContent;
