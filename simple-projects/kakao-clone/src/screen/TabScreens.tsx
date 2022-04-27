import { StyledText } from '../components/common';
import { SafeAreaContainer } from '../components/layout';

export const Users = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="#303030">Users Fragment</StyledText>
    </SafeAreaContainer>
  );
};

export const ChatList = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="#303030">ChatList Fragment</StyledText>
    </SafeAreaContainer>
  );
};

export const Settings = () => {
  return (
    <SafeAreaContainer>
      <StyledText color="#303030">Settings Fragment</StyledText>
    </SafeAreaContainer>
  );
};

export default { Users, ChatList, Settings };
