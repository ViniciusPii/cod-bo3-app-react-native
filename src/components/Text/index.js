import React from 'react';
import * as S from './styles';

const Text = ({text, size, bold, color}) => {
  return (
    <S.Text size={size} bold={bold} color={color}>
      {text}
    </S.Text>
  );
};

Text.defaultProps = {
  size: 50,
  color: '#fff',
};

export default Text;
