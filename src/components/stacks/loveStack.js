import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';

import Love from '../../routes/Love/index';
import ImageGallary from '../../routes/Love/ImageGallary';

const Stack = createStackNavigator();

const myOptions = {
  title: 'Ask jackie',
  headerTintColor: 'primary',
  headerTitleStyle: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'normal',
  },
  headerStyle: {
    backgroundColor: '#006aff',
  },
};
export default function LoveStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Love"
        component={Love}
        options={{...myOptions, title: 'Love'}}
      />
      <Stack.Screen
        name="ImageGallary"
        component={ImageGallary}
        options={{...myOptions, title: 'Image Gallary'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
