import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, Icon, Input } from '@rneui/themed';
import { addTaskAction } from '@/store/actions/tasks-actions';
import { initialAddTaskFormValue, validateTask } from '@/validations/taskValidation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { ERROR, PRIMARY, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, "AddTask">;

const AddTaskScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<PropsScreen['navigation']>();
    const [impotant, setImpotant] = useState(false)
    return (
        <View style={styles.container}>
            <Formik
                validate={validateTask}
                initialValues={initialAddTaskFormValue}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(
                        addTaskAction({ ...values, impotant: impotant }),
                    );
                    navigation.goBack()
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, handleChange, isSubmitting, handleSubmit, errors }) => (
                    <View style={styles.form}>
                        <Input
                            placeholder='INPUT TITLE'
                            errorStyle={styles.error}
                            errorMessage={errors.title}
                            onChangeText={handleChange('title')}
                        />
                        <Input
                            placeholder='INPUT AUTHOR'
                            errorStyle={styles.error}
                            errorMessage={errors.info}
                            onChangeText={handleChange('info')}
                        />
                        <Pressable style={styles.check} onPress={() => {
                            setImpotant(!impotant)
                        }}>
                            <View style={[styles.circle, impotant && styles.selected]}>
                                <Icon name='check' color={WHITE} size={18} />

                            </View>
                            <Text style={styles.text}>Important</Text>
                        </Pressable>

                        <Button radius={"sm"} type="solid"
                            style={styles.button}
                            disabled={isSubmitting}
                            onPress={() => handleSubmit()}>
                            <Text style={styles.text}>SAVE</Text>
                            <Icon name="save" color={WHITE} />
                        </Button>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default AddTaskScreen;
const styles = StyleSheet.create({
    button: {
        marginTop: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: '100%',
        backgroundColor: WHITE
    },
    check: {
        flexDirection: 'row',
        alignItems:'center'
    },
    circle: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: PRIMARY,
        marginRight: 10
    },
    selected: {
        backgroundColor: PRIMARY
    },

    error: {
        color: ERROR
    },
    form: {
        gap: 12
    },
    text: {
        color: PRIMARY,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    }
});

