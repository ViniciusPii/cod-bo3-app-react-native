import React from 'react';
import Text from '../Text';

import * as S from './styles';

const Button = ({bgColor, text, onPress}) => {
  return (
    <S.Button bgColor={bgColor} onPress={onPress}>
      <Text text={text} />
    </S.Button>
  );
};

Button.defaultProps = {
  bgColor: '#F53D0B',
};

export default Button;
