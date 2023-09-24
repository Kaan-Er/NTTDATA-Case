import {FlexStyle} from 'react-native';
import colors from '../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({
  whiteBackground,
  transBackground,
  topBackgroundColor,
  headerPosition,
}: StyleFnProps): StyleProps => {
  let topBackground = 'transparent';
  let subContainerBackground = colors.white.default;
  let justifyContent: FlexStyle['justifyContent'] = 'flex-end';

  if (topBackgroundColor) {
    topBackground = topBackgroundColor;
  }

  if (transBackground) {
    subContainerBackground = 'transparent';
  } else if (whiteBackground) {
    subContainerBackground = colors.white.default;
  }

  if (headerPosition === 'center' || headerPosition === 'left') {
    justifyContent = 'space-between';
  }

  return {
    container: {
      flex: 1,
      width: '100%',
      position: 'relative',
      backgroundColor: 'transparent',
    },
    subContainer: {
      flex: 1,
      backgroundColor: subContainerBackground,
      zIndex: -33,
      marginBottom: 52,
    },
    headerBackground: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      zIndex: -1,
    },
    top: {
      height: 40,
      alignItems: 'center',
      paddingHorizontal: 16,
      justifyContent,
      overflow: 'hidden',
      flexDirection: 'row',
      backgroundColor: topBackground,
    },
    headerContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 12,
      flex: 1,
      gap: 12,
    },
    space: {
      width: 45,
    },
    linear: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -33,
    },
    button: {
      backgroundColor: 'transparent',
      paddingVertical: 0,
      width: 32,
      height: 32,
      borderColor: '#E1E1E1',
      borderRadius: 12,
      borderWidth: 1,
    },
    bellButton: {paddingHorizontal: 0},
    loading: {
      marginTop: 63,
    },
    blur: {
      flex: 1,
    },
    bottomCircle: {
      width: 275,
      height: 275,
      position: 'absolute',
      bottom: -34,
      left: -79,
      borderRadius: 150,
      backgroundColor: '#08add530',
    },
    topCircle: {
      top: -116,
      right: -9,
      width: 275,
      height: 275,
      position: 'absolute',
      borderRadius: 150,
      backgroundColor: '#F6640230',
    },
    percentButton: {
      paddingHorizontal: 0,
      position: 'absolute',
      right: 16,
      top: 0,
    },
    plusButton: {
      width: 32,
      height: 32,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E1E1E1',
      paddingHorizontal: 0,
    },
    editButton: {
      width: 32,
      height: 32,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E1E1E1',
      paddingHorizontal: 0,
      marginLeft: 20,
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
    circle: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.secondary,
      position: 'absolute',
      top: 4,
      right: 6,
      zIndex: 33,
    },
    header: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.proggressUnfilledColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.proggressUnfilledColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      borderRadius: 50,
      overflow: 'hidden',
    },
  };
};
