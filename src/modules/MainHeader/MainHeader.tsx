import { RecodeLogo } from '@src/assets';
import { Card } from '@src/components/Card';
import { IconButton } from '@src/components/IconButton';
import { SearchBar } from '@src/components/SearchBar';
import { EIconTypes, ERoutes } from '@src/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled.ts';

export const MainHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHome = (): void => {
    navigate(ERoutes.HOME);
  };

  return (
    <Card>
      <Styled.CardContent>
        <Styled.LogoStyled onClick={handleGoToHome}>
          <RecodeLogo width={120} />
        </Styled.LogoStyled>
        <SearchBar
          placeholder="dependency injection tasks"
          onSubmit={console.log}
        />
        <Styled.Actions>
          <IconButton height={26} width={26} iconType={EIconTypes.HOME} />
          <IconButton height={26} width={26} iconType={EIconTypes.HEART} />
          <IconButton height={26} width={26} iconType={EIconTypes.INFO} />
        </Styled.Actions>
        <Styled.ProfileImgWrapper>
          <img src="src/assets/__mock__/person.jpeg" alt="profile picture" />
        </Styled.ProfileImgWrapper>
      </Styled.CardContent>
    </Card>
  );
};
