import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from 'App/src/screens/auth/SignIn';
import SignUp from 'App/src/screens/auth/SignUp';

const AuthStack = createStackNavigator();
const MyAuthStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default MyAuthStack;
