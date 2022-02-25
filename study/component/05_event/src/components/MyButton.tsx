import React, { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f1c40f',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

const MyButton = () => {
  const onLongPress = useCallback(() => {
    console.log('onLongPress');
  }, []);
  const onPressOut = useCallback(() => {
    console.log('onPressOut');
  }, []);

  const onPressIn = useCallback(() => {
    console.log('onPressIn');
  }, []);

  const onPress = useCallback(() => {
    console.log('onPress');
  }, []);

  return (
    <Pressable
      style={styles.button}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={5000}
      hitSlop={30}
      disabled={false}
      pressRetentionOffset={70}
    >
      <Text style={styles.text}>지웅`s 버튼</Text>
    </Pressable>
  );
};

export default memo(MyButton);
// hitSlop={30} , pressRetentionOffset={70} 은 거의 안씀
// 안드로이드에서는 머 view = visiblity.Invisible 이런식으로 했었는데 여기서는 그렇게 안한다
/* 위처럼 하지말고
        {!!value && (
          <StyledPressable onPress={onClear}>
            <Icon source={theme.icon.clear} />
          </StyledPressable>
        )}
        value의 값을 받아서 체크해주고 뒤 StyledPressable 를 실행시킬지 안시킬지 판단하는것
        이방법이 훨씬더 좋다
*/

// 덕타이핑 검색
