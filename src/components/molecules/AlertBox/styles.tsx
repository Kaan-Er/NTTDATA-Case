import {Dimensions} from 'react-native';
import colors from '../../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({language}: StyleFnProps): StyleProps => {
  return {
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 19,
      marginHorizontal: -6,
    },
    footerText: {
      marginRight: 7,
    },
    button: {
      paddingHorizontal: 32,
    },
    buttonsContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      marginTop: 30,
    },
    container: {
      position: 'absolute',
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
      right: 0,
      left: language === 'ar' ? 0 : undefined,
      borderRadius: 18,
      backgroundColor: colors.white.default,
      padding: 36,
      alignItems: 'center',
      zIndex: 999,
    },
    header: {
      marginTop: 12,
      marginBottom: 8,
    },
    animatedTime: ({fadeAnim}) => ({
      opacity: fadeAnim,
      backgroundColor: '#00000066',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 33,
    }),
  };
};
