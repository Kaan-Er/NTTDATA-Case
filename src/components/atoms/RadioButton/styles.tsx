import {BorderColor} from '../../../configs/radioButton';
import {StyleFnProps, StyleProps} from './types';

export default ({dotColor}: StyleFnProps): StyleProps => {
  return {
    container: {},
    radioButton: {
      height: 16,
      width: 16,
      borderRadius: 11,
      borderColor: BorderColor,
      borderWidth: 1,
      overflow: 'hidden',
    },
    radioButtonActive: {
      height: 16,
      width: 16,
      borderRadius: 11,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    linear: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -33,
    },
    circle: {
      height: 6,
      width: 6,
      backgroundColor: dotColor,
      borderRadius: 6,
    },
  };
};
