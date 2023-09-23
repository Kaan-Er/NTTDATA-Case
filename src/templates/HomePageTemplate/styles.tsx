import colors from '../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({topHeight}: StyleFnProps): StyleProps => {
  return {
    container: {
      flex: 1,
    },
    subContainer: {
      flex: 1,
      zIndex: -33,
      width: '100%',
      backgroundColor: colors.proggressUnfilledColor,
      marginBottom: 63,
    },
    top: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 13,
      width: '100%',
      backgroundColor: colors.white.default,
    },
    loading: {
      marginTop: 63,
    },
    headerContainer: {
      marginLeft: 13,
      flex: 1,
    },
    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    addressHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      flexWrap: 'wrap',
      flex: 1,
    },
    icon: {
      marginLeft: 13,
    },
    footerContainer: {
      left: 0,
      right: 0,
      top: topHeight,
      padding: 13,
      paddingHorizontal: 15,
      paddingTop: 0,
      alignItems: 'center',
      backgroundColor: colors.white.default,
      zIndex: 33,
      position: 'absolute',
    },
    footerButton: {
      flex: 1,
      marginHorizontal: 5,
    },
    notificationContainer: {
      width: 32,
      height: 32,
      borderRadius: 12,
      borderColor: colors.shadowColor,
      borderWidth: 1,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      justifyContent: 'center',
    },
    userContainer: {
      width: '70%',
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.secondary,
      position: 'absolute',
      top: 4,
      right: 6,
      zIndex: 33,
    },
  };
};
