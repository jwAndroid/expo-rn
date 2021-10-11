import React, { memo } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

const Loading = () => {
  return (
    <Modal transparent animationType="fade" hardwareAccelerated>
      <Container>
        <ActivityIndicator size="large" color="#00ff99" />
      </Container>
    </Modal>
  );
};

export default memo(Loading);
