import colors from '../../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({backgroundColor}: StyleFnProps): StyleProps => {
  return {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor,
      borderRadius: 12,
      padding: 13,
    },
    picker: {
      flex: 1,
      backgroundColor: 'red',
    },
    inputAndroid: ({medium, bold, heavy, semiBold, family, fontSize}) => {
      let fontFamily = `${family}'-Regular'`;

      if (semiBold) fontFamily = `${family}'-Semibold'`;
      if (heavy) fontFamily = `${family}'-Heavy'`;
      if (medium) fontFamily = `${family}'-Medium'`;
      if (bold) fontFamily = `${family}'-Bold'`;

      return {
        fontFamily,
        fontSize,
        paddingVertical: 0,
        padding: 0,
        color: colors.blackOlive,
      };
    },
  };
};
