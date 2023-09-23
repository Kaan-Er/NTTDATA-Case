/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import Icon from '../../components/atoms/Icon';

export default () => {
  // const [userCurrentLocation, setUserCurrentLocation] = useState<any>({
  //   longitude: 46.6732957,
  //   latitude: 24.7231517,
  // });

  // const getLocation = async () => {
  //   if (Platform.OS === 'ios') {
  //     await Geolocation.requestAuthorization('whenInUse');
  //   }
  //   let granted;
  //   if (Platform.OS === 'android') {
  //     granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //   }

  //   if (
  //     granted === PermissionsAndroid.RESULTS.GRANTED ||
  //     Platform.OS === 'ios'
  //   ) {
  //     Geolocation.getCurrentPosition(
  //       async position => {
  //         setUserCurrentLocation({
  //           ...userCurrentLocation,
  //           longitude: position.coords.longitude,
  //           latitude: position.coords.latitude,
  //         });
  //       },
  //       error => {
  //         // See error code charts below.
  //         console.log(error.code, error.message);
  //       },
  //       {enableHighAccuracy: true, timeout: 15000, maximumAge: 20},
  //     );
  //   }
  // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <DefaultTemplate whiteBackground topBackgroundColor={colors.white.default}>
      <ScrollView style={styles.container}>
        {/* <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: userCurrentLocation.latitude,
              longitude: userCurrentLocation.longitude,
            }}
            region={{
              latitude: userCurrentLocation.latitude,
              longitude: userCurrentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={userCurrentLocation}
              onDragEnd={e => {
                setMapRegion({
                  ...mapRegion,
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
                setCoordinate(e.nativeEvent.coordinate);
                store.dispatch(
                  setCordinations({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  }),
                );
              }}>
              <Icon
                name="UserLocation"
                width="24"
                height="24"
                color={colors.primary}
              />
            </Marker>
          </MapView>
        </View> */}
      </ScrollView>
    </DefaultTemplate>
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
    height: 284,
  },
});
