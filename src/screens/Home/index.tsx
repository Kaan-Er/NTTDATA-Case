/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import Icon from '../../components/atoms/Icon';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import {saveLocation} from '../../redux/slices/user';

export default () => {
  const dispatch = useDispatch();
  const [userCurrentLocation, setUserCurrentLocation] = useState<any>({
    longitude: 46.6732957,
    latitude: 24.7231517,
  });

  const getLocation = async () => {
    if (Platform.OS === 'ios') {
      await Geolocation.requestAuthorization('whenInUse');
    }
    let granted;
    if (Platform.OS === 'android') {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }

    if (
      granted === PermissionsAndroid.RESULTS.GRANTED ||
      Platform.OS === 'ios'
    ) {
      Geolocation.getCurrentPosition(
        async position => {
          setUserCurrentLocation({
            ...userCurrentLocation,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 20},
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '35%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <DefaultTemplate
        header="Map"
        space
        whiteBackground
        userHeader
        topBackgroundColor={colors.white.default}>
        <ScrollView style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}>
            <View style={styles.modalContainer}>
              <Header text="Selected Address" size={16} bold underLine />
              <Header
                text={`Longitude: ${userCurrentLocation.longitude}`}
                size={14}
              />
              <Header
                text={`Latitude: ${userCurrentLocation.latitude}`}
                size={14}
              />
              <Button
                onPress={() => {
                  dispatch(saveLocation(userCurrentLocation));
                  bottomSheetModalRef.current?.close();
                }}
                color={colors.primary}
                style={styles.saveButton}>
                Save
              </Button>
            </View>
          </BottomSheetModal>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              onPress={e => {
                setUserCurrentLocation({
                  ...userCurrentLocation,
                  longitude: e.nativeEvent.coordinate.longitude,
                  latitude: e.nativeEvent.coordinate.latitude,
                });
              }}
              initialRegion={{
                latitude: userCurrentLocation.latitude,
                longitude: userCurrentLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              region={{
                latitude: userCurrentLocation.latitude,
                longitude: userCurrentLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                coordinate={userCurrentLocation}
                draggable
                onDragEnd={e => {
                  setUserCurrentLocation({
                    ...userCurrentLocation,
                    longitude: e.nativeEvent.coordinate.longitude,
                    latitude: e.nativeEvent.coordinate.latitude,
                  });
                }}>
                <Icon
                  name="UserLocation"
                  width="24"
                  height="24"
                  color={colors.primary}
                />
              </Marker>
            </MapView>
            <Button
              onPress={handlePresentModalPress}
              color={colors.primary}
              style={styles.button}
              medium>
              Save Location
            </Button>
          </View>
        </ScrollView>
      </DefaultTemplate>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height - 100,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 10,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    height: 48,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
  },
  saveButton: {
    height: 48,
    alignSelf: 'center',
    width: '100%',
  },
});
