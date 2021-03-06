import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';

import Breathe from '../../routes/breathe/index';
import VideoLibrary from '../../routes/breathe/VideoLibrary';
import Video from '../../routes/breathe/Video';

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
export default function BreatheStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Breathe"
        component={Breathe}
        options={{...myOptions, title: 'Breathe'}}
      />
      <Stack.Screen
        name="VideoLibrary"
        component={VideoLibrary}
        options={{...myOptions, title: 'Video Library'}}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{...myOptions, title: 'Video'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
