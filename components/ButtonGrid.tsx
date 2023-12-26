import React from 'react';
import { FlatList, View } from 'react-native';
import { buttons } from '../utils/buttons';
import { Button } from '../utils/types';
import SkillButton from './SkillButton';

interface Props {
  addSkill: (button: Button) => void;
}

const ButtonGrid = ({ addSkill }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1 }} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        numColumns={6}
        data={buttons}
        scrollEnabled={true}
        renderItem={({ item: button }) => <SkillButton button={button} addSkill={addSkill} />}
      />
    </View>
  );
};

export default React.memo(ButtonGrid);
