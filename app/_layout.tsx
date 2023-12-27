I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

import { Stack } from 'expo-router';
import React from 'react';
import { I18nManager } from 'react-native';
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
