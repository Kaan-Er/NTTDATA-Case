import React, {useState} from 'react';
import {ScrollView, View, SafeAreaView, ActivityIndicator} from 'react-native';
import style from './styles';
import colors from '../../themes/colors';
import {DefaultTemplateProps} from './types';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';

export default ({
  scroll,
  children,
  whiteBackground,
  transBackground,
  topBackgroundColor,
  loading,
}: DefaultTemplateProps) => {
  const Container = scroll ? ScrollView : View;
  const [topHeight] = useState<number>(0);
  const styles = style({
    whiteBackground,
    transBackground,
    topBackgroundColor,
    topHeight,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Header text="K" size={14} style={styles.userContainer} />
        <View style={styles.notificationContainer}>
          <View style={styles.circle} />
          <Button
            color={colors.transparent}
            iconName="Notification"
            iconWidth="24"
            iconHeight="24"
            iconColor={colors.blackOlive}
            onPress={() => {}}
          />
        </View>
      </View>
      <Container style={styles.subContainer}>
        {loading ? (
          <ActivityIndicator style={styles.loading} color={colors.primary} />
        ) : (
          children
        )}
      </Container>
    </SafeAreaView>
  );
};
