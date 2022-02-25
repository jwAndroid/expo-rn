import Text from '../components/common/Text';
import SafeAreaContainer from '../components/layout/SafeAreaContainer';

export const Mail = () => {
  return (
    <SafeAreaContainer>
      <Text color="#303030">Mail Fragment</Text>
    </SafeAreaContainer>
  );
};

export const Profile = () => {
  return (
    <SafeAreaContainer>
      <Text color="#303030">Profile Fragment</Text>
    </SafeAreaContainer>
  );
};

export const Settings = () => {
  return (
    <SafeAreaContainer>
      <Text color="#303030">Settings Fragment</Text>
    </SafeAreaContainer>
  );
};

export default { Mail, Profile, Settings };
