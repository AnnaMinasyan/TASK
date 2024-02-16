import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button, Icon, Input } from '@rneui/themed';
import { changeTaskAction } from '@/store/actions/tasks-actions';
import { validateTask } from '@/validations/taskValidation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { selectedTaskSelector } from '@/store/selectors/tasks-selector';
import { ERROR, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, 'EditTask'>;

const EditTaskScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<PropsScreen['navigation']>();
    const selectedTask= useSelector(selectedTaskSelector)

    return (
        <View style={styles.container}>
            <Formik
                validate={validateTask}
                enableReinitialize={true}
                initialValues={selectedTask}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(
                        changeTaskAction({ id: selectedTask.id, body: values }),
                    );
                    navigation.goBack()
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleChange, isSubmitting, handleSubmit, errors, values }) => (
                    <View style={styles.form}>
                        <Input
                            placeholder='INPUT TITLE'
                            errorStyle={styles.error}
                            errorMessage={errors.title}
                            onChangeText={handleChange('title')}
                            value={values.title}
                        />
                        <Input
                            placeholder='INPUT AUTHOR'
                            errorStyle={styles.error}
                            errorMessage={errors.info}
                            onChangeText={handleChange('info')}
                            value={values.info}
                        />
                        
                        <Button radius={"sm"} type="solid"
                            style={styles.button}
                            disabled={isSubmitting}
                            onPress={()=>handleSubmit()}>
                            <Text style={styles.text}>CHANGE</Text>
                            <Icon name="refresh" color="white" />
                        </Button>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default EditTaskScreen;
const styles = StyleSheet.create({
    button: {
        marginTop: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    error: {
        color: ERROR,
    },
    form: {
        gap: 12
    },
    text:{
        color:WHITE,
        fontSize:16,
        fontWeight:'bold'
    }
});

