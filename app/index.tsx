I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nManager, Keyboard, Platform, Pressable, StyleSheet, View } from 'react-native';
import BottomButtons from '../components/BottomButtons';
import ButtonGrid from '../components/ButtonGrid';
import SkillTable from '../components/SkillTable';
import SumTable from '../components/SumTable';
import Colors from '../utils/Colors';
import { Button, Skill } from '../utils/types';

const index = () => {
  const [totalDD, setTotalDD] = useState(0.0);
  const [index, setIndex] = useState(1);
  const [eScore, setEScore] = useState('');
  const [totalScore, setTotalScore] = useState('');

  const OGSkills: Skill[] = useMemo(
    () => [
      { skillIndex: 1, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 2, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 3, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 4, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 5, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 6, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 7, value: 0.0, name: '--', bonus: 0.0 },
      { skillIndex: 8, value: 0.0, name: '--', bonus: 0.0 },
    ],
    []
  );

  const [skills, setSkills] = useState<Skill[]>(OGSkills);

  useEffect(() => {
    const totalValue = skills.reduce((total, presentor) => total + presentor.value, 0);
    const totalBonus = skills.reduce((total, presentor) => total + presentor.bonus, 0);
    const calculatedTotalDD = totalValue + totalBonus;
    setTotalDD(calculatedTotalDD);
  }, [skills]);

  const addSkill = useCallback(
    (button: Button) => {
      if (index <= 8) {
        const newSkills = skills.map((skill) =>
          skill.skillIndex === index ? { ...skill, value: button.value, name: button.skill } : skill
        );
        setSkills(newSkills);
        setIndex((prevIndex) => prevIndex + 1);
      }
    },
    [skills, index]
  );

  const handleBonus = useCallback(
    (bonus: number, skillIndex: number) => {
      setSkills(skills.map((skill) => (skill.skillIndex === skillIndex ? { ...skill, bonus: bonus } : skill)));
    },
    [skills]
  );

  const deleteSkill = useCallback(() => {
    setSkills(skills.map((skill) => (skill.skillIndex === index - 1 ? { ...skill, value: 0.0, name: '--', bonus: 0.0 } : skill)));
    setIndex(() => (index > 1 ? index - 1 : 1));
  }, [skills, index]);

  const clearSkills = useCallback(() => {
    setSkills(OGSkills);
    setIndex(1);
    setEScore('');
    setTotalScore('');
  }, [OGSkills]);

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <StatusBar hidden={Platform.OS === 'android' ? true : false} />

      <SkillTable skills={skills} handleBonusChange={handleBonus} />

      <SumTable totalDD={totalDD} eScore={eScore} setEScore={setEScore} totalScore={totalScore} setTotalScore={setTotalScore} />

      <ButtonGrid addSkill={addSkill} />

      <BottomButtons onClear={clearSkills} onDelete={deleteSkill} />
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
  },
});
