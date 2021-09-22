import React, { FC, memo } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#0099ff',
    marginLeft: 30,
    marginRight: 30,
  },
});

interface ISubContents {
  content: string;
}

const SubContents: FC<ISubContents> = ({ content }) => {
  return <Text style={styles.text}>{content}</Text>;
};

export default memo(SubContents);
