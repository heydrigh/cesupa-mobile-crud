import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ITask } from '../types';
import { ScreenName } from './routes';

export type RootStackParamList = {
  [ScreenName.Home]: undefined;
  [ScreenName.Task]: ITask | undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
