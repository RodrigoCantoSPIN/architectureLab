import React, {useState} from 'react';
import {LoginPresenter} from '../presenter/LoginPresenter';
import {Button, Text, TextInput, View} from 'react-native';
import {UserService} from '../model/UserServices';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userService = new UserService();

  const presenter = new LoginPresenter(userService, {
    showSuccess: () => console.log('Login successful!'),
    showError: () => console.log('Login failed!'),
  });

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button
        title="Login"
        onPress={() => presenter.login(username, password)}
      />
    </View>
  );
};

export default LoginScreen;
