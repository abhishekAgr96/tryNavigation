import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
        style={styles.text}>
        SignIn
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        No Account ? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
  },
});

export default SignIn;
