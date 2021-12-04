import * as React from 'react';

import {
  StyleProp,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
  Text,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../shared/colors/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface StyleTextInputProps {
  style?: StyleProp<TextStyle>;
  title?: string;
  placeholder?: string;
  placeholderColor?: string;
  titleStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  label?: string;
  showTitle?: boolean;
  isRequired?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  keyboardType?: string;
}

export default PrimaryTextInput = (props: StyleTextInputProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={props.labelStyle}>{props.label}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput
          keyboardType={props.keyboardType}
          underlineColorAndroid="transparent"
          placeholderTextColor={props.placeholderTextColor || Colors.GREY}
          placeholder={props.showTitle ? '' : props.placeholder}
          style={[styles.textInput, props.style]}
        />
        {props.iconName ? (
          <TouchableOpacity>
            <Ionicons
              style={styles.iconTextInput}
              name={props.iconName}
              size={props.iconSize}
              color={props.iconColor}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    borderColor: '#2C2C2E',
    borderBottomWidth: 1.5,
  },
  textInput: {
    width: '100%',
    paddingLeft: 0,
    fontSize: '15@ms0.3',
    height: '42@s',
    color: Colors.GREY,
  },
});
