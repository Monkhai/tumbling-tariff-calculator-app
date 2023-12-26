import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { Platform, Pressable, PressableStateCallbackType, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../utils/Colors';

interface Props {
  onClear: () => void;
  onDelete: () => void;
}

const BottomButtons = ({ onClear, onDelete }: Props) => {
  const pressableStyle = useCallback((status: PressableStateCallbackType, additionalStyles?: {}) => {
    return {
      margin: 5,
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 50,
      borderColor: Colors.accent,
      opacity: status.pressed ? 0.5 : 1,
      ...additionalStyles,
    } as StyleProp<ViewStyle>;
  }, []);

  return (
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
      <Pressable onPress={onClear} style={(a) => pressableStyle(a, styles.button)}>
        <MaterialIcons name="autorenew" size={34} color={Colors.background} />
      </Pressable>
      <Pressable onPress={onDelete} style={(a) => pressableStyle(a, styles.button)}>
        <MaterialIcons name="keyboard-backspace" size={34} color={Colors.background} />
      </Pressable>
    </View>
  );
};

export default BottomButtons;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    height: Platform.OS === 'android' ? 40 : 60,
    borderColor: Colors.background,
    borderRadius: 0,
    margin: 0,
  },
});
