import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Row } from 'react-native-reanimated-table';
import Colors from '../utils/Colors';
import { Skill } from '../utils/types';

interface Props {
  skill: Skill;
  index: number;
  handleBonusChange: (bonus: number, index: number) => void;
}

const bonuses = [
  { label: '0.0', value: 0.0 },
  { label: '0.1', value: 0.1 },
  { label: '0.2', value: 0.2 },
  { label: '0.3', value: 0.3 },
  { label: '0.4', value: 0.4 },
  { label: '0.5', value: 0.5 },
  { label: '0.6', value: 0.6 },
  { label: '0.7', value: 0.7 },
  { label: '0.8', value: 0.8 },
  { label: '0.9', value: 0.9 },
  { label: '1.0', value: 1.0 },
  { label: '1.1', value: 1.1 },
  { label: '1.2', value: 1.2 },
  { label: '1.3', value: 1.3 },
  { label: '1.4', value: 1.4 },
  { label: '1.5', value: 1.5 },
  { label: '1.6', value: 1.6 },
  { label: '1.7', value: 1.7 },
  { label: '1.8', value: 1.8 },
  { label: '1.9', value: 1.9 },
  { label: '2.0', value: 2.0 },
];

const MemoizedRow = ({ skill, index, handleBonusChange }: Props) => {
  return (
    <Row
      style={styles.style}
      textStyle={styles.textStyle}
      key={'row8'}
      data={[
        skill.skillIndex,
        skill.name,
        skill.value,
        <Dropdown
          data={bonuses}
          labelField={'label'}
          onChange={({ value }) => handleBonusChange(value, index)}
          value={{ label: skill.bonus.toFixed(1), value: skill.bonus }}
          maxHeight={10}
          valueField={'value'}
          placeholder="0.0"
          placeholderStyle={styles.dropdownPlaceholder}
          selectedTextStyle={styles.dropdownPlaceholder}
          activeColor="transparent"
          iconColor={Colors.accent}
          mode="modal"
          containerStyle={styles.dropdownContainer}
          itemContainerStyle={styles.dropdownItemContainer}
          itemTextStyle={styles.dropdownItemText}
          showsVerticalScrollIndicator={false}
          autoScroll={false}
        />,
      ]}
    />
  );
};

export default React.memo(MemoizedRow);

const styles = StyleSheet.create({
  style: { height: 35, borderBottomWidth: 1, borderColor: Colors.accent, width: '90%' },
  textStyle: { color: Colors.accent, textAlign: 'center' },

  dropdownContainer: {
    width: 80,
    height: 250,
    borderWidth: 1,
    borderColor: Colors.accent,
    backgroundColor: Colors.background,
    top: -125,
  },
  dropdownItemContainer: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.accent,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownItemText: {
    color: Colors.accent,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  dropdownPlaceholder: { color: Colors.accent, textAlign: 'right', paddingRight: 10 },
});
