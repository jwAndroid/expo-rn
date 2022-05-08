import { memo } from 'react';
import { LeaveModal } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

const View = () => {
  return (
    <SafeAreaContainer>
      <LeaveModal />
    </SafeAreaContainer>
  );
};

export default memo(View);
