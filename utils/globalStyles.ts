import { PressableStateCallbackType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Colors from './Colors';
import { useCallback } from 'react';

export const textStyle: StyleProp<TextStyle> = {
  color: Colors.accent,
};

export const rowStyle: StyleProp<ViewStyle> = { height: 35, borderBottomWidth: 1, borderColor: Colors.accent, width: '90%' };
