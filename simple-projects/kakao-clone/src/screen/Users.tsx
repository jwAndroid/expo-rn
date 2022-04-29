import { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { FlatList, ListRenderItem } from 'react-native';

import { Header } from '../components/common';
import { SafeAreaContainer } from '../components/layout';
import UserCard from '../components/common/UserCard';
import { SampleData } from '../api/sample/data';
import { UserEntity } from '../type';

const MYPROFILE = {
  id: 178189,
  name: '저입니다!!',
  image_url: '내 이미지 프로필',
};

const Container = styled.View(() => ({
  flex: 1,
}));

const ProfileContainer = styled.View(({ theme }) => ({
  width: '100%',
  paddingVertical: 15,
  backgroundColor: theme.color.gray,
}));

const Users = () => {
  const theme = useTheme();

  const keyExtractor = useCallback((item: UserEntity) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<UserEntity>>(({ item }) => {
    return <UserCard name={item.name} imageUrl={item.image_url} />;
  }, []);

  return (
    <SafeAreaContainer>
      <Header
        title="친구"
        one={theme.icon.search}
        two={theme.icon.users}
        three={theme.icon.music}
        four={theme.icon.headersetting}
      />

      <ProfileContainer>
        <UserCard name={MYPROFILE.name} imageUrl={MYPROFILE.image_url} />
      </ProfileContainer>

      <Container>
        <FlatList
          data={SampleData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Users);
