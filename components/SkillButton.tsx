import { Pressable, PressableStateCallbackType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';
import { Button } from '../utils/types';
import Colors from '../utils/Colors';

interface Props {
  button: Button;
  addSkill: (button: Button) => void;
}

const SkillButton = ({ button, addSkill }: Props) => {
  const pressableStyle = useCallback((status: PressableStateCallbackType, additionalStyles?: {}) => {
    return {
      margin: '1%',
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
    <Pressable onPress={() => addSkill(button)} style={pressableStyle}>
      <Text style={styles.text}>{button.skill}</Text>
    </Pressable>
  );
};

export default React.memo(SkillButton);

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
  },
  button: {
    margin: 5,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.accent,
  },
});
