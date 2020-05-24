import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from 'App/src/screens/auth/SignIn';
import SignUp from 'App/src/screens/auth/SignUp';
import Home from 'App/src/screens/dashboard/Home';
import Setting from 'App/src/screens/dashboard/Setting';

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyAuthStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Dashboard" component={DrawerStack} />
    </AuthStack.Navigator>
  );
};

const Dashboard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default MyAuthStack;
