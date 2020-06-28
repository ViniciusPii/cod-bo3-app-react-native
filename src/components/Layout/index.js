import React from 'react';
import * as S from './styles';
import {StatusBar} from 'react-native';

const Layout = ({children}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <S.Background source={require('../../assets/images/cod.jpg')}>
        {children}
      </S.Background>
    </>
  );
};

export default Layout;
