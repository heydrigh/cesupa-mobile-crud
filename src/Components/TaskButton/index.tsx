import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';

import * as S from './styles';
import { TaskButtonProps } from './types';

const TaskButton = ({ onSwipeableOpen, task }: TaskButtonProps) => {
  const LeftAction = () => {
    return (
      <S.LeftActionWrapper>
        <S.ActionText>Completar tarefa</S.ActionText>
      </S.LeftActionWrapper>
    );
  };

  const RightAction = () => {
    return (
      <S.RightActionWrapper>
        <S.ActionText>Deletar tarefa</S.ActionText>
      </S.RightActionWrapper>
    );
  };

  if (task.done) {
    return (
      <S.Wrapper isCompleted>
        <S.TaskTitle>{task.title}</S.TaskTitle>
      </S.Wrapper>
    );
  }

  return (
    <Swipeable
      onSwipeableOpen={onSwipeableOpen}
      renderRightActions={RightAction}
      renderLeftActions={LeftAction}>
      <S.Wrapper isCompleted={task.done}>
        <S.TaskTitle>{task.title}</S.TaskTitle>
      </S.Wrapper>
    </Swipeable>
  );
};

export default TaskButton;
