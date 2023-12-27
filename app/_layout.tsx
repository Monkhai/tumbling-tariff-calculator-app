import { I18nManager, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../utils/Colors';

const _layout = () => {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.navBar },
        headerTintColor: Colors.accent,
        headerShown: false,
      }}
    />
  );
};

export default _layout;

const styles = StyleSheet.create({});
