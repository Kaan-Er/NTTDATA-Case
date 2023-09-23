import {I18nManager, Platform} from 'react-native';
import colors from '../../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({
  backgroundColor,
  fontSize,
  activeBackgroundColor,
  shadow,
}: StyleFnProps): StyleProps => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor,
      borderColor: backgroundColor,
      borderWidth: 1,
      borderRadius: 17,
      padding: Platform.OS === 'ios' ? 13 : 9,
      shadowColor: shadow ? '#6767679e' : undefined,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: shadow ? 0.25 : 0,
      shadowRadius: 15,
      elevation: shadow ? 10 : 0,
    },
    fContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: activeBackgroundColor,
      borderColor: colors.greenRYB.op20,
      borderWidth: 1,
      borderRadius: 17,
      padding: Platform.OS === 'ios' ? 13 : 9,
    },
    seperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.lightGray,
      marginHorizontal: 7,
    },
    fSeperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.dimGray,
      marginHorizontal: 7,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
    },
    input: {
      fontSize,
      flex: 1,
      paddingVertical: 0,

      fontFamily: I18nManager.isRTL ? 'Tajawal' : 'SFUIText-Regular',
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    icon: {},
  };
};
