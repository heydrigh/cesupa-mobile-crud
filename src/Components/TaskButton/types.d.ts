import { ITask } from '../../types';

export interface TaskButtonProps {
  task: ITask;
  onSwipeableOpen: (diretion: 'left' | 'right') => void;
}

export interface ButtonWrapperProps {
  isCompleted: boolean;
}
