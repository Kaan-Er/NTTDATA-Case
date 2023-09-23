import {ShadowColor} from '../../../configs/button';
import {StyleFnProps, StyleProps} from './types';

export default ({
  border,
  borderColor,
  borderRadius,
}: Partial<StyleFnProps>): StyleProps => ({
  container: {},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius,
  },
  border: {
    borderColor: border ? borderColor : undefined,
    borderWidth: border ? 1 : undefined,
  },
  text: {
    textAlignVertical: 'bottom',
  },
  textMargin: {
    marginLeft: 7,
  },
  linear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -33,
  },
  linearContainer: {
    borderRadius,
  },
  shadow: {
    shadowColor: ShadowColor,
    shadowRadius: 13,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    elevation: 7,
  },
  overflowControl: {
    overflow: 'hidden',
  },
});
