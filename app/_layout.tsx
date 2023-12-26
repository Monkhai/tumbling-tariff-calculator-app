import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '../utils/Colors';

const _layout = () => {
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
