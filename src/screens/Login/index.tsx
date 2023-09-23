import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DefaultTemplate from '../../templates/DefaultTemplate';
import Icon from '../../components/atoms/Icon';
import TextInput from '../../components/atoms/TextInput';
import colors from '../../themes/colors';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {handleLogin} from './actions';

const Login = () => {
  const navigation = useNavigation<ScreenProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <DefaultTemplate>
      <View style={styles.container}>
        <Icon name="Logo" width={200} height={200} color="transparent" />
        <Header text="Welcome" size={24} color={colors.blackOlive} semiBold />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          iconName="Email"
          iconColor={colors.silverSand}
          iconWidth="24"
          iconHeight="24"
          onChange={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          iconName="Lock"
          iconColor={colors.silverSand}
          iconWidth="24"
          iconHeight="24"
          onChange={setPassword}
        />
        <Button
          style={styles.loginButton}
          borderRadius={12}
          color={colors.primary}
          onPress={() => handleLogin(email, password, navigation)}>
          Login
        </Button>
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  loginButton: {
    width: '100%',
    height: 52,
    marginTop: 20,
  },
});

export default Login;
