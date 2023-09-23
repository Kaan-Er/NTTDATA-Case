import Toast from '../../components/molecules/Toast';
import {LoginProps} from './types';

export const handleLogin: LoginProps = (email, password, navigation) => {
  if (email === '' || password === '') {
    return Toast.open({
      type: 'info',
      title: 'Email and password cannot be empty!',
    });
  }
  navigation.navigate('BottomTab', {screen: 'Home'});
};
