import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ProductCardList from '../../components/organisms/ProductCardList';
import {ScreenProp} from '../../navigation/types';
import {
  addCartPress,
  applyFilterAndSort,
  getInitialData,
  onFavoritePress,
} from './actions';
import {Product} from '../../services/types';
import {useDispatch} from 'react-redux';
import RadioButton from '../../components/atoms/RadioButton';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';

export default () => {
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    getInitialData(setProducts, setLoading);
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '36%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <DefaultTemplate
        header="Store"
        whiteBackground
        filter
        filterPress={handlePresentModalPress}
        topBackgroundColor={colors.white.default}>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator
              color={colors.primary}
              size="large"
              style={styles.indicator}
            />
          ) : (
            <ProductCardList
              data={products.filter(product => product.name)}
              onCartPress={product => addCartPress(product, dispatch)}
              onFavoritePress={product => onFavoritePress(product, dispatch)}
              onPress={product =>
                navigation.navigate('ProductDetails', {product})
              }
            />
          )}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}>
            <View style={styles.modalContainer}>
              <Header text="Filter" size={16} bold />
              <TouchableOpacity
                style={styles.option}
                activeOpacity={0.9}
                onPress={() => {
                  setIsIncreasing(true);
                }}>
                <RadioButton color={colors.primary} value={isIncreasing} />
                <Header text="Increasing Price" size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                activeOpacity={0.9}
                onPress={() => {
                  setIsIncreasing(false);
                }}>
                <RadioButton color={colors.primary} value={!isIncreasing} />
                <Header text="Decreasing Price" size={16} />
              </TouchableOpacity>
              <Button
                onPress={() => {
                  bottomSheetModalRef.current?.close();
                  const sortedProducts = applyFilterAndSort(
                    isIncreasing,
                    products,
                  );
                  setProducts(sortedProducts);
                }}
                color={colors.primary}
                style={styles.filterButton}>
                Apply
              </Button>
            </View>
          </BottomSheetModal>
        </View>
      </DefaultTemplate>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    padding: 12,
  },
  indicator: {
    marginTop: 24,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  filterButton: {
    height: 48,
    alignSelf: 'center',
    width: '100%',
  },
});
