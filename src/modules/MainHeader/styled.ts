import { SearchBarStyled } from '@src/components/SearchBar/styled.ts';
import styled from 'styled-components';

export const CardContent = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 30px',
  gap: '50px',
  height: '68px',

  [`${SearchBarStyled}`]: {
    maxWidth: '500px',
    marginRight: 'auto',
  },
}));

export const Actions = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}));

export const ProfileImgWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    borderRadius: '50%',
    height: '45px',
    width: '45px',
  },
}));
