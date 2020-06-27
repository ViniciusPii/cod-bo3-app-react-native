import React from 'react';
import * as S from './styles';
import Text from '../Text';

const Logo = () => {
  return (
    <S.Container>
      <Text text="call of duty" size={75} />
      <S.SubTitle>
        <Text text="black ops" size={50} />
        <Text text=" iii" size={50} color={'#F53D0B'} />
      </S.SubTitle>
    </S.Container>
  );
};

export default Logo;
