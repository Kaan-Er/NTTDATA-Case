import {ScreenProp} from '../../navigation/types';

export type LoginProps = (
  email: string,
  password: string,
  navigation: ScreenProp,
) => void;
