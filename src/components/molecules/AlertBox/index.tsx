import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  createRef,
  useRef,
} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../atoms/Header';
import colors from '../../../themes/colors';
import style from './styles';
import {AlertBoxParams, ToastRefProps} from './types';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import {selectUser} from '../../../redux/slices/user';

const AlertBoxRoot = forwardRef((props, ref: any) => {
  const userStore = useSelector(selectUser);
  const styles = style({language: userStore.language});
  const [active, setActive] = useState<boolean>(false);
  const [params, setParams] = useState<AlertBoxParams>({
    title: '',
    description: '',
    confirmTitle: '',
    cancelTitle: '',
    onConfirmPress: () => {},
    onCancelPress: () => {},
  });

  const animated = useRef(
    new Animated.Value(Dimensions.get('window').width),
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useImperativeHandle(
    ref,
    (): ToastRefProps => ({
      open: paramsCurrent => {
        setParams(paramsCurrent);

        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 130,
            useNativeDriver: true,
          }),
          Animated.timing(animated, {
            toValue: -20,
            duration: 130,
            useNativeDriver: true,
          }),
        ]).start(() => {});
        setActive(true);
      },
      close: () => {
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 130,
            useNativeDriver: true,
          }),
          Animated.timing(animated, {
            toValue: Dimensions.get('window').width,
            duration: 130,
            useNativeDriver: true,
          }),
        ]).start(() => setActive(false));
      },
    }),
  );

  if (active) {
    const {
      title,
      description,
      confirmTitle,
      cancelTitle,
      onConfirmPress,
      onCancelPress,
    } = params;
    return (
      <Animated.View style={styles.animatedTime({fadeAnim})}>
        <Animated.View
          style={[styles.container, {transform: [{translateX: animated}]}]}>
          <Icon
            name="SadFace"
            width={34}
            height={34}
            color={colors.transparent}
          />
          <Header
            text={title}
            size={16}
            color={colors.black.default}
            style={styles.header}
            bold
            center
          />
          <Header text={description} size={14} color={colors.dimGray} center />
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => {
                if (onConfirmPress) onConfirmPress();
                Animated.sequence([
                  Animated.timing(animated, {
                    toValue: Dimensions.get('window').width,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                ]).start(() => setActive(false));
              }}
              style={styles.button}
              color={colors.primary}
              borderRadius={8}
              textSize={16}
              semiBold>
              {confirmTitle}
            </Button>
            <Button
              textSize={16}
              style={styles.button}
              semiBold
              borderRadius={8}
              textColor={colors.blackOlive}
              color={colors.white.default}
              onPress={() => {
                if (onCancelPress) onCancelPress();
                Animated.sequence([
                  Animated.timing(animated, {
                    toValue: Dimensions.get('window').width,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                ]).start(() => setActive(false));
              }}>
              {cancelTitle}
            </Button>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
  return null;
});

const alertBoxRootRef = createRef<ToastRefProps>();

const AlertBox = () => {
  return <AlertBoxRoot ref={alertBoxRootRef} />;
};

AlertBox.open = (params: AlertBoxParams) => {
  alertBoxRootRef.current?.open(params);
};

AlertBox.close = (params: AlertBoxParams) => {
  alertBoxRootRef.current?.close(params);
};

export default AlertBox;
