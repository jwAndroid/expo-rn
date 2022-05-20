import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View, Share } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const onPress = useCallback(async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable onPress={onPress}>
        <Text>Share</Text>
      </Pressable>
    </View>
  );
};

export default memo(App);
