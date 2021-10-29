import React, { memo, useCallback, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';
import Postcode from '@actbase/react-daum-postcode';
import { OnCompleteParams } from '@actbase/react-daum-postcode/lib/types';
// postcode github : https://github.com/actbase/react-daum-postcode

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPress = styled.Pressable({
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 30,
  borderRadius: 8,
  backgroundColor: '#303030',
});

interface IStyledText {
  isSelected: boolean;
  marginTop?: number;
}

const StyledText = styled.Text<IStyledText>(({ isSelected, marginTop }) => ({
  fontSize: 16,
  marginTop,
  color: isSelected ? '#303030' : '#fff',
}));

const KakaoAddress = styled(Postcode)({
  width: 320,
  height: 320,
  marginTop: 10,
});

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const animation = useMemo(() => ({ animation: true }), []);

  const onPress = useCallback(() => {
    setIsStart((prev) => !prev);
  }, []);

  const onSelected = useCallback((data: OnCompleteParams) => {
    setSelectedData(data.address);
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />

      <StyledPress onPress={onPress}>
        <StyledText isSelected={false}>주소검색</StyledText>
      </StyledPress>

      {isStart && (
        <KakaoAddress
          jsOptions={animation}
          onSelected={onSelected}
          onError={console.warn}
        />
      )}

      {!!selectedData && (
        <StyledText isSelected marginTop={10}>
          주소: {selectedData}
        </StyledText>
      )}
    </Container>
  );
};

export default memo(App);
