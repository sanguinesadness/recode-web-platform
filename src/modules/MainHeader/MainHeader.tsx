import { RecodeLogo } from '@src/assets';
import { Card } from '@src/components/Card';
import { IconButton } from '@src/components/IconButton';
import { SearchBar } from '@src/components/SearchBar/SearchBar.tsx';
import { EIconTypes } from '@src/constants';
import React from 'react';
import * as Styled from './styled.ts';

export const MainHeader: React.FC = () => {
  return (
    <Card>
      <Styled.CardContent>
        <RecodeLogo width={120} />
        <SearchBar
          placeholder="dependency injection tasks"
          onSubmit={console.log}
        />
        <Styled.Actions>
          <IconButton height={26} width={26} type={EIconTypes.HOME} />
          <IconButton height={26} width={26} type={EIconTypes.HEART} />
          <IconButton height={26} width={26} type={EIconTypes.INFO} />
        </Styled.Actions>
        <Styled.ProfileImgWrapper>
          <img src="src/assets/__mock__/person.jpeg" alt="profile picture" />
        </Styled.ProfileImgWrapper>
      </Styled.CardContent>
    </Card>
  );
};
