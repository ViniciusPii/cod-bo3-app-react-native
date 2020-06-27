import React from 'react';
import * as S from './styles';

import Text from '../Text';

const Result = ({map, level}) => {
  return (
    <S.Clear>
      <S.Container>
        <Text text="mapa" size={40} />
        <S.Result>
          <Text text={map} size={40} />
        </S.Result>
      </S.Container>
      <S.Container>
        <Text text="level" size={40} />
        <S.Result>
          <Text text={level} size={40} />
        </S.Result>
      </S.Container>
    </S.Clear>
  );
};

export default Result;
