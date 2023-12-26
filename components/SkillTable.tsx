import React from 'react';
import { StyleSheet } from 'react-native';
import { Table } from 'react-native-reanimated-table';
import Colors from '../utils/Colors';
import { Skill } from '../utils/types';
import HeaderRow from './HeaderRow';
import MemoizedRow from './MemoizedRow';

interface Props {
  skills: Skill[];
  handleBonusChange: (bonus: number, index: number) => void;
}

const SkillTable = ({ skills, handleBonusChange }: Props) => {
  return (
    <Table>
      <HeaderRow />
      <MemoizedRow skill={skills[0]} index={0 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[1]} index={1 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[2]} index={2 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[3]} index={3 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[4]} index={4 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[5]} index={5 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[6]} index={6 + 1} handleBonusChange={handleBonusChange} />
      <MemoizedRow skill={skills[7]} index={7 + 1} handleBonusChange={handleBonusChange} />
    </Table>
  );
};

export default SkillTable;

const styles = StyleSheet.create({
  textStyle: { color: Colors.accent, textAlign: 'center' },
});
