import * as React from 'react';
import {
  StyleProp,
  View,
  Text,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors} from '../../../../shared/colors/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScaledSheet} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface StyledButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  styleIcon?: StyleProp<ViewStyle>;
  disabled?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  onPress?: () => void;
  onLongPress?: () => void;
}

export default PrimaryButton = (props: StyledButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      disabled={props.disabled}
      style={[
        styles.container,
        props.style,
        props.disabled && {backgroundColor: Colors.GRAY},
      ]}>
      {props.icon ? (
        typeof props.icon === 'string' ? (
          <Ionicons
            name={props.icon}
            size={props.iconSize || 24}
            color={props.iconColor || Colors.WHITE}
          />
        ) : null
      ) : null}
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30@s',
    backgroundColor: Colors.COLOR_BUTTON,
  },
  title: {
    color: Colors.WHITE,
    fontWeight: '500',
    fontSize: '18@ms0.3',
    marginLeft: 5,
  },
});
