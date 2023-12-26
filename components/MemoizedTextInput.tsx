import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

interface Props {
  score: string;
  scoreRef: React.RefObject<TextInput>;
  handleScoreChange: (score: string) => void;
}

const MemoizedTextInput = ({ score, scoreRef, handleScoreChange }: Props) => {
  return (
    <TextInput
      ref={scoreRef}
      placeholder="0.0"
      keyboardType="decimal-pad"
      inputMode="decimal"
      value={score}
      textAlign="center"
      placeholderTextColor={Colors.opacAccent}
      style={styles.textInput}
      onChangeText={handleScoreChange}
    />
  );
};

export default React.memo(MemoizedTextInput);

const styles = StyleSheet.create({
  textInput: {
    color: Colors.accent,
    fontWeight: 'bold',
  },
});
