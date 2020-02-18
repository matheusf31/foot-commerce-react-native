import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/images/Logo.png';

export const Wrapper = styled.SafeAreaView`
  background: #141419;
  flex-direction: row;
`;

export const Container = styled.View`
  height: 90px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
