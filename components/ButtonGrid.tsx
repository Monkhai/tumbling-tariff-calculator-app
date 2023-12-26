import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { buttons } from '../utils/buttons';
import { Button } from '../utils/types';
import SkillButton from './SkillButton';

interface Props {
  addSkill: (button: Button) => void;
}

const ButtonGrid = ({ addSkill }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={6}
        data={buttons}
        scrollEnabled={true}
        renderItem={({ item: button }) => <SkillButton button={button} addSkill={addSkill} />}
      />
    </View>
  );
};

export default React.memo(ButtonGrid);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  spacer: { flex: 1 },
  contentContainerStyle: { justifyContent: 'center', alignItems: 'center' },
});
