import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from 'react-native-reanimated-table';
import Colors from '../utils/Colors';

const HeaderRow = () => {
  const tableHead = React.useMemo(() => ['No.', 'Skill', 'DD', 'Bonus'], []);

  return <Row data={tableHead} style={styles.style} textStyle={styles.textStyle} />;
};

export default React.memo(HeaderRow);

const styles = StyleSheet.create({
  style: { height: 35, borderBottomWidth: 1, borderColor: Colors.accent, width: '90%' },
  textStyle: { color: Colors.accent, textAlign: 'center' },
});
