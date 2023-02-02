import styled, { css } from 'styled-components/native';

import { ButtonWrapperProps } from './types';

export const Wrapper = styled.View<ButtonWrapperProps>`
  ${({ theme, isCompleted }) => css`
    height: 56px;
    background-color: ${isCompleted ? theme.colors.success : theme.colors.primary};
    padding-left: 12px;
    justify-content: center;
    margin-top: 12px;
    width: 100%;
    border-radius: 8px;
  `}
`;

export const TaskTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const LeftActionWrapper = styled.View`
  ${({ theme }) => css`
    padding-left: 12px;
    justify-content: center;
    margin-top: 12px;
    border-radius: 8px;
    width: 100%;
    background: ${theme.colors.success};
  `}
`;

export const ActionText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    line-height: ${theme.fonts.lineHeight.medium};
    color: ${theme.colors.white};
  `}
`;

export const RightActionWrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    align-items: flex-end;
    padding-right: 12px;
    justify-content: center;
    margin-top: 12px;
    border-radius: 8px;
    background: ${theme.colors.error};
  `}
`;
