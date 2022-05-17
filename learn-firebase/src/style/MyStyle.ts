import styled from '@emotion/native';

export const Container = styled.View({
  flex: 1,
  paddingVertical: 50,
});

export const StyledInput = styled.TextInput({
  width: '100%',
  height: 50,
  backgroundColor: 'gray',
  marginBottom: 30,
});

export const StyledText = styled.Text({
  fontSize: 30,
  color: 'blue',
});

export const ItemContainer = styled.Pressable({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: 'gray',
  margin: 3,
});
