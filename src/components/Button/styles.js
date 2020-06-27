import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 66px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: 3px solid ${({bgColor}) => bgColor};
  border-radius: 8px;
  /* background-color: ${({bgColor}) => bgColor}; */
`;
