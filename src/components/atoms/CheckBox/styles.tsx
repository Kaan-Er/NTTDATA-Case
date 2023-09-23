import {BorderColor} from '../../../configs/checkbox';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    container: {
      flexDirection: 'row',
    },
    checkBox: {
      height: 21,
      width: 21,
      borderRadius: 50,
      borderColor: BorderColor,
      borderWidth: 1,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    checkBoxActive: {
      height: 21,
      width: 21,
      borderRadius: 50,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    linear: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -33,
    },
    header: {
      marginLeft: 7,
    },
  };
};
