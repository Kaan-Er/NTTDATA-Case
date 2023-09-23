import {I18nManager} from 'react-native';

export default () => {
  return {
    container: {
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    button: {
      width: 27,
      height: 27,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    input: {
      width: 35,
      fontSize: 17,
      textAlign: 'center',
    },
  };
};
