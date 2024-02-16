import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TasksScreen from "@/screens/Task.screen";
import AddTaskScreen from "@/screens/AddTasks.screen";
import EditTaskScreen from "@/screens/EditTask.screen";


export type MainParamList = {
  Tasks: undefined;
  AddTask: undefined;
  EditTask: undefined;

};

const Stack = createStackNavigator<MainParamList>();

export function MainNavigation() {
  return (
    <Stack.Navigator
    initialRouteName='Tasks'
      screenOptions={{ animationEnabled: true }}>
      <Stack.Screen name='Tasks' component={TasksScreen} />
       <Stack.Screen name='AddTask' component={AddTaskScreen} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} /> 
    </Stack.Navigator>
  );
}
