import { Button, Modal, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: ${40 + getStatusBarHeight(true)}px;
  padding-bottom: 40px;
`;

export const ListWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 12px 16px;
`;

export const Title = styled.Text``;

export const ModalWrapper = styled.View`
  ${({ theme }) => css`
    width: 300px;
    height: 200px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius.default};
  `}
`;

export const List = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
  `}
`;

export const TaskInput = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fonts.sizes.large};
    width: 100%;
  `}
`;

export const AddButton = styled(Button)`
  ${({ theme }) => css`
    height: 60px;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalContainer = styled(Modal)`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.blackOpaque};
  `}
`;
