import React, { memo } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ReadMore from '@fawazahmed/react-native-read-more';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textStyle: {
    fontSize: 14,
  },
  test: {
    marginLeft: 16,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ReadMore
          numberOfLines={2}
          style={styles.textStyle}
          seeMoreText="더보기"
          seeLessText="줄이기"
          style={styles.test}
        >
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </Text>
        </ReadMore>
      </View>
    </SafeAreaView>
  );
};

export default memo(App);
