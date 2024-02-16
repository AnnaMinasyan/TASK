import TaskCard from '@/components/TaskCard';
import { deleteTaskByIdAction, getTasksListAction, setSelectedTaskAction } from '@/store/actions/tasks-actions';
import { tasksSelector } from '@selectors/tasks-selector';
import React, { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Pressable, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ITaskDTO } from '@/interfaces/interfaces';
import { Icon } from '@rneui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { ERROR, PRIMARY, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, 'Tasks'>;

const TasksScreen: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(tasksSelector);
    const navigation = useNavigation<PropsScreen['navigation']>();
    const [isFilter, setIsFilter] = useState(false);

    const handleGetTasks = () => {
        dispatch(getTasksListAction())
    }
    useEffect(() => {
        handleGetTasks();
    }, [])
    const handleRemoveTask = (id: number) => {
        dispatch(deleteTaskByIdAction(id))
    }
    const handleEditTask = (task: ITaskDTO) => {
        dispatch(setSelectedTaskAction(task));
        navigation.navigate('EditTask')
    }
    const handleAddTask = () => {
        navigation.navigate('AddTask')
    }
    const DATA = useMemo(() => {
        if (isFilter) {
            return tasks.filter(el=>el.impotant)
        } else {
            return tasks
        }
    }, [isFilter,tasks])
    const Item = ({ item }: { item: ITaskDTO }) => (
        <View key={item.id} style={styles.card}>
            <Pressable onPress={handleGetTasks}>
                <TaskCard task={item} onRemove={handleRemoveTask} onEdit={handleEditTask} />
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.filter}>
                <Pressable onPress={() => {
                    setIsFilter(false)
                }}>
                    <Text style={[styles.text, !isFilter && styles.selectedText]}>All</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setIsFilter(true)
                }}>
                    <Text style={[styles.text, isFilter && styles.selectedText]}>Impotant</Text>
                </Pressable>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id.toString()}
            />
            <Pressable onPress={handleAddTask}>
                <Icon
                    name='add'
                    color={PRIMARY}
                    size={36} />
            </Pressable>
        </View>
    );
};

export default TasksScreen;
const styles = StyleSheet.create({
    card: {
        marginBottom: 15
    },
    container: {
        backgroundColor: WHITE,
        flex: 1,
        paddingHorizontal: 16,
        width: '100%'
    },
    filter: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        margin: 10
    },
    selectedText: {
        color: ERROR
    }
});

