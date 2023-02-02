import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Button } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';

import * as S from './styles';
import TaskButton from '../../Components/TaskButton';
import { ITask } from '../../types';

function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [typedTask, setTypedTask] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const handleLeftSwipe = (taskId: string) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, done: true } : task));
    setTasks(updatedTasks);
  };

  const handleRightSwipe = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSwipe = (direction: 'left' | 'right', taskId: string) => {
    const handler = {
      left: () => handleLeftSwipe(taskId),
      right: () => handleRightSwipe(taskId),
    };
    handler[direction]();
  };

  const renderItem: ListRenderItem<ITask> = ({ item }) => {
    return (
      <TaskButton task={item} onSwipeableOpen={(direction) => handleSwipe(direction, item.id)} />
    );
  };

  const keyExtractor = useCallback((item: ITask) => item.id, []);

  const handleAddTask = () => {
    const newTask: ITask = {
      id: uuidv4(),
      title: typedTask,
      createdAt: new Date(),
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTypedTask('');
    hideModal();
  };

  // const hasNoTask = () => tasks.filter((task) => task.done === false).length < 1;

  return (
    <S.Wrapper>
      <S.Title>Tarefas</S.Title>
      <S.ListWrapper>
        <FlatList
          extraData={tasks}
          keyExtractor={keyExtractor}
          data={tasks}
          renderItem={renderItem}
        />
      </S.ListWrapper>
      <Button icon="plus" mode="contained" onPress={handleOpenModal}>
        Adicionar tarefa
      </Button>
      <S.ModalContainer visible={showModal} onDismiss={hideModal}>
        <S.ModalWrapper>
          <S.TaskInput label="Nome da tarefa" value={typedTask} onChangeText={setTypedTask} />
          <S.AddButton onPress={handleAddTask} icon="content-save" mode="elevated">
            Salvar
          </S.AddButton>
        </S.ModalWrapper>
      </S.ModalContainer>
    </S.Wrapper>
  );
}

export default Home;
