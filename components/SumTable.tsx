import * as NavigationBar from 'expo-navigation-bar';
import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, StyleSheet, TextInput } from 'react-native';
import { Row, Table } from 'react-native-reanimated-table';
import Colors from '../utils/Colors';
import MemoizedTextInput from './MemoizedTextInput';

interface Props {
  totalDD: number;
  eScore: string;
  setEScore: React.Dispatch<React.SetStateAction<string>>;
  totalScore: string;
  setTotalScore: React.Dispatch<React.SetStateAction<string>>;
}

const SumTable = ({ totalDD, eScore, setEScore, totalScore, setTotalScore }: Props) => {
  const [lastUpdated, setLastUpdated] = useState<'eScore' | 'totalScore'>();
  const eScoreRef = React.useRef<TextInput>(null);
  const totalScoreRef = React.useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      eScoreRef.current && eScoreRef.current.blur();
      totalScoreRef.current && totalScoreRef.current.blur();
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
      }
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (lastUpdated === 'totalScore') {
      const newEScore = (parseFloat(totalScore) - totalDD).toFixed(1);
      if (newEScore !== eScore) {
        if (newEScore !== 'NaN') {
          setEScore(newEScore);
        } else {
          setEScore('');
        }
      }
    } else if (lastUpdated === 'eScore') {
      const newTotalScore = (parseFloat(eScore) + totalDD).toFixed(1);
      if (newTotalScore !== totalScore) {
        if (newTotalScore !== 'NaN') {
          setTotalScore(newTotalScore);
        } else {
          setTotalScore('');
        }
      }
    } else {
      if (eScore !== '') {
        const newTotalScore = (parseFloat(eScore) + totalDD).toFixed(1);
        if (newTotalScore !== totalScore) {
          setTotalScore(newTotalScore);
        }
      } else {
        setTotalScore(totalDD.toFixed(1));
      }
    }
  }, [totalScore, totalDD, lastUpdated, eScore]);

  const handleEScoreChange = (value: string) => {
    if (value.includes('.')) {
      const parts = value.split('.');
      const decimalPart = parts[1];
      if (decimalPart!.length > 1) {
        value = parts[0] + '.' + decimalPart!.substring(0, 1);
      }
    }

    if (parseFloat(value) > 20) {
      value = '20';
    }

    if (value === 'NaN') {
      setEScore('');
    } else {
      setEScore(value);
    }
    setLastUpdated('eScore');
  };

  const handleTotalScoreChange = (value: string) => {
    if (value.includes('.')) {
      const parts = value.split('.');
      const decimalPart = parts[1];
      if (decimalPart!.length > 1) {
        value = parts[0] + '.' + decimalPart!.substring(0, 1);
      }
    }

    setLastUpdated('totalScore');
    setTotalScore(value);
  };

  const sumData = [
    'DD:',
    totalDD.toFixed(1),
    'E Score:',
    <MemoizedTextInput score={eScore} scoreRef={eScoreRef} handleScoreChange={handleEScoreChange} />,
    'Total: ',
    <MemoizedTextInput score={totalScore} scoreRef={totalScoreRef} handleScoreChange={handleTotalScoreChange} />,
  ];

  return (
    <Table>
      <Row data={sumData} textStyle={{ color: Colors.accent, textAlign: 'left', fontWeight: 'bold' }} style={styles.rowStyle} />
    </Table>
  );
};

export default SumTable;

const styles = StyleSheet.create({
  rowStyle: { height: 35, borderBottomWidth: 2, borderColor: Colors.accent, width: '90%' },
});
