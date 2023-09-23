/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  ScrollView,
  View,
  SafeAreaView,
  ActivityIndicator,
  Keyboard,
  Dimensions,
} from 'react-native';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import style from './styles';
import colors from '../../themes/colors';
import {DefaultTemplateProps, ScreenProp} from './types';
import Icon from '../../components/atoms/Icon';
import {useSelector} from 'react-redux';
import Image from '../../components/atoms/Image';
import {selectUser} from '../../redux/slices/user';

export default ({
  back,
  header,
  extraHeader,
  bell,
  space,
  filter,
  scroll,
  scrollRef,
  children,
  nestedScroll,
  color,
  customHeader,
  userHeader,
  whiteBackground,
  transBackground,
  topBackgroundColor,
  loading,
  headerPosition = 'left',
  backgroundIcon,
  backIconColor,
  customBackPress,
  addPress,
  editPress,
  plus,
  edit,
  filterPress,
}: DefaultTemplateProps) => {
  const Container = scroll ? ScrollView : View;
  const BlurViewContainer: any = View;
  const styles = style({
    whiteBackground,
    transBackground,
    topBackgroundColor,
    headerPosition,
  });
  const navigation = useNavigation<ScreenProp>();
  let iconColor;

  const userStore = useSelector(selectUser);

  if (backIconColor) {
    iconColor = backIconColor;
  } else if (transBackground || backgroundIcon) {
    iconColor = colors.white.default;
  } else {
    iconColor = colors.blackOlive;
  }

  return (
    <>
      <BlurViewContainer
        style={styles.blur}
        blurType="light"
        blurAmount={32}
        blurRadius={25}
        reducedTransparencyFallbackColor="white">
        <SafeAreaView style={styles.container}>
          {color && <LinearGradient colors={color} style={styles.linear} />}
          <View style={styles.top}>
            {back && (
              <Button
                onPress={() => {
                  if (customBackPress) {
                    customBackPress();
                  } else {
                    navigation.goBack();
                    Keyboard.dismiss();
                  }
                }}
                iconName="Left"
                iconWidth="24"
                iconHeight="24"
                iconColor={iconColor}
                color={colors.transparent}
                border
                borderColor={colors.border}
                borderRadius={11}
                style={styles.button}
              />
            )}

            {userHeader && (
              <View style={styles.imageContainer}>
                {userStore.photo ? (
                  <Image
                    url={userStore.photo}
                    width={50}
                    height={50}
                    resizeMode="cover"
                    containerStyle={styles.image}
                  />
                ) : (
                  <Header text={'KE'} size={14} bold color={colors.primary} />
                )}
              </View>
            )}
            {header && (
              <View style={styles.headerContainer}>
                <Header
                  bold
                  text={header}
                  size={18}
                  color={
                    transBackground ? colors.white.default : colors.blackOlive
                  }
                />
                {extraHeader && (
                  <Header
                    medium
                    text={extraHeader}
                    size={12}
                    color={
                      transBackground
                        ? colors.white.default
                        : colors.quickSilver
                    }
                  />
                )}
              </View>
            )}
            {bell && (
              <View style={styles.notificationContainer}>
                <View style={styles.circle} />
                <Button
                  color={colors.transparent}
                  iconName="Notification"
                  iconWidth={24}
                  iconHeight={24}
                  iconColor={colors.blackOlive}
                  onPress={() => {}}
                />
              </View>
            )}
            {filter && (
              <Button
                onPress={filterPress}
                iconName="Filter"
                iconWidth="23"
                iconHeight="23"
                iconColor={
                  transBackground || backgroundIcon
                    ? colors.white.default
                    : colors.blackOlive
                }
                style={styles.bellButton}
                color="transparent"
              />
            )}
            {plus && (
              <Button
                onPress={addPress}
                iconName="Add"
                iconWidth="12"
                iconHeight="12"
                iconColor={
                  transBackground || backgroundIcon
                    ? colors.white.default
                    : colors.blackOlive
                }
                style={styles.plusButton}
                color="transparent"
              />
            )}
            {edit && (
              <Button
                onPress={editPress}
                iconName="Edit"
                iconWidth="16"
                iconHeight="16"
                iconColor={
                  transBackground || backgroundIcon
                    ? colors.white.default
                    : colors.blackOlive
                }
                style={styles.editButton}
                color="transparent"
              />
            )}
            {customHeader && (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  alignItems: 'flex-start',
                  paddingLeft: 15,
                }}>
                {customHeader}
              </View>
            )}
            {space && <View style={styles.space} />}
            {backgroundIcon ? (
              <View style={styles.headerBackground}>
                <Icon
                  name={backgroundIcon}
                  width={Dimensions.get('screen').width + 3}
                  height={Dimensions.get('screen').width * 0.7 + 5}
                  color={colors.primary}
                />
              </View>
            ) : undefined}
          </View>
          <Container
            nestedScrollEnabled={nestedScroll}
            ref={scrollRef}
            style={styles.subContainer}>
            {loading ? (
              <ActivityIndicator
                style={styles.loading}
                color={colors.primary}
              />
            ) : (
              children
            )}
          </Container>
        </SafeAreaView>
      </BlurViewContainer>
    </>
  );
};
