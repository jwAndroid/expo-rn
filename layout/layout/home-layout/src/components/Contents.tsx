import React, { FC, memo } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
  },
});

interface IContents {
  content: string;
}

const Contents: FC<IContents> = ({ content }) => {
  return <Text style={styles.text}>{content}</Text>;
};

export default memo(Contents);
