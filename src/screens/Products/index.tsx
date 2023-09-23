import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ProductCardList from '../../components/organisms/ProductCardList';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';

export default () => {
  const navigation = useNavigation<ScreenProp>();
  const data = [
    {
      id: 1,
      title: 'Kayseri Pastırması',
      isFavorite: true,
      description:
        'Apollotech B340, güvenilir bağlantıya, 12 aylık pil ömrüne ve modern tasarıma sahip uygun fiyatlı bir kablosuz faredir',
      image: 'https://loremflickr.com/640/480',
      price: '8797.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 2,
      title: 'Gömlek',
      isFavorite: true,
      description:
        'Yeni ABC 13 9370, 13.3, 5. Nesil CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      image: 'https://loremflickr.com/640/480',
      price: '7738.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 3,
      title: 'Araba',
      isFavorite: true,
      description:
        'Doğal bileşenlerin heyecan verici bir karışımına sahip güzel Apple Naturalé serisi. %100 Doğal İçeriğin İyiliği ile',
      image: 'https://loremflickr.com/640/480',
      price: '19436.00',
      shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
    },
    {
      id: 4,
      title: 'Araba',
      isFavorite: false,
      description:
        'Yeni forma gömlek çeşitleri sizi göz önünde bulundurarak tasarlandı. Sizi farklı kılacak kesimler ve stiller ile',
      image: 'https://loremflickr.com/640/480',
      price: '16505.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 5,
      title: 'Peynir',
      isFavorite: true,
      description:
        "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
      image: 'https://loremflickr.com/640/480',
      price: '2766.00',
      shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
    },
    {
      id: 6,
      title: 'Sandalye',
      isFavorite: true,
      description:
        "Dev Byte'ın ince ve basit Maple Oyun Klavyesi, şık bir gövde ve akıllı işlevsellik için 7 Renkli RGB LED Arka Aydınlatma ile birlikte gelir",
      image: 'https://loremflickr.com/640/480',
      price: '7679.00',
      shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
    },
    {
      id: 7,
      title: 'Şapka',
      isFavorite: true,
      description:
        "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
      image: 'https://loremflickr.com/640/480',
      price: '15027.00',
      shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
    },
    {
      id: 8,
      title: 'Balık',
      isFavorite: true,
      description:
        "Dev Byte'ın ince ve basit Maple Oyun Klavyesi, şık bir gövde ve akıllı işlevsellik için 7 Renkli RGB LED Arka Aydınlatma ile birlikte gelir",
      image: 'https://loremflickr.com/640/480',
      price: '14689.00',
      shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
    },
    {
      id: 9,
      title: 'Araba',
      isFavorite: true,
      description: 'Futbol Antrenman Ve Rekreasyon Amaçlı İyidir',
      image: 'https://loremflickr.com/640/480',
      price: '976.00',
      shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
    },
    {
      id: 10,
      title: 'Sabun',
      isFavorite: true,
      description:
        "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
      image: 'https://loremflickr.com/640/480',
      price: '18715.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 11,
      title: 'Sabun',
      isFavorite: true,
      description: 'Futbol Antrenman Ve Rekreasyon Amaçlı İyidir',
      image: 'https://loremflickr.com/640/480',
      price: '11285.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 12,
      title: 'Bisiklet',
      isFavorite: true,
      description:
        "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
      image: 'https://loremflickr.com/640/480',
      price: '6486.00',
      shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
    },
    {
      id: 13,
      title: 'Pantolon',
      isFavorite: true,
      description:
        'Otomobil düzeni, motorun arkasına monte edilmiş transaks tipi şanzımanlar ve dört tekerlekten çekiş ile bir ön motor tasarımından oluşur',
      image: 'https://loremflickr.com/640/480',
      price: '752.00',
      shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
    },
    {
      id: 14,
      title: 'Eldiven',
      isFavorite: true,
      description:
        "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
      image: 'https://loremflickr.com/640/480',
      price: '14849.00',
      shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
    },
    {
      id: 15,
      title: 'Salata',
      isFavorite: true,
      description:
        'Doğal bileşenlerin heyecan verici bir karışımına sahip güzel Apple Naturalé serisi. %100 Doğal İçeriğin İyiliği ile',
      image: 'https://loremflickr.com/640/480',
      price: '16174.00',
      shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
    },
  ];

  return (
    <DefaultTemplate
      header="Store"
      whiteBackground
      topBackgroundColor={colors.white.default}>
      <View style={styles.container}>
        <ProductCardList
          data={data}
          onCartPress={() => null}
          onFavoritePress={() => null}
          onPress={product => navigation.navigate('ProductDetails', {product})}
        />
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    padding: 12,
  },
});
