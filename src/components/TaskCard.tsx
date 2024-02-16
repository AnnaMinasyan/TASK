import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { ITaskDTO } from '@/interfaces/interfaces';
import { BLUE, DARK, ERROR, LIGHT, PRIMARY } from '@/assets/colors';

type Props = {
    task: ITaskDTO;
    onRemove:(value:number)=>void;
    onEdit:(value:ITaskDTO)=>void;
}

const TaskCard: React.FC<Props> = ({ task,onRemove,onEdit }) => {
    const { id,title, info, impotant } = task
    
    return (
        <View style={styles.container}>
            <Icon
                name='task'
                color={impotant?ERROR:PRIMARY}
                size={36} />
            <View>
                <Text style={styles.title}>Title:</Text>
                <Text style={styles.info}>Info:</Text>
            </View>
            <View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.info} numberOfLines={2}>{info}</Text>
            </View>
            <View>
                <Pressable style={styles.button} onPress={()=>onEdit(task)}>
                    <Icon
                        name='edit'
                        color={DARK}/>
                </Pressable>
                <Pressable style={styles.button} onPress={()=>onRemove(id)}>
                    <Icon
                        name='delete'
                        color={ERROR} />
                </Pressable>
            </View>
        </View>
    );
};

export default TaskCard;
const styles = StyleSheet.create({
    info: {
        fontSize: 16,
        marginVertical:4,
        maxWidth:200
    },
    button: {
        padding: 10,
        
    },
    container: {
        alignItems:'center',
        backgroundColor: LIGHT,
        borderRadius: 8,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 10,
        shadowColor: BLUE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%'
    },
    title: {
        color:PRIMARY,
        fontSize: 18,
        fontWeight:'600',
        maxWidth:150
    }
});

