import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import DefaultTemplate from '../../templates/DefaultTemplate';
import Header from '../../components/atoms/Header';
import colors from '../../themes/colors';
import HomePageTemplate from '../../templates/HomePageTemplate';
import Button from '../../components/atoms/Button';

const Home = () => {
  const data = [
    {
      id: '1',
      name: 'Teste',
    },
    {
      id: '2',
      name: 'Teste',
    },
    {
      id: '3',
      name: 'Teste',
    },
    {
      id: '4',
      name: 'Teste',
    },
    {
      id: '5',
      name: 'Teste',
    },
    {
      id: '6',
      name: 'Teste',
    },
    {
      id: '7',
      name: 'Teste',
    },
    {
      id: '8',
      name: 'Teste',
    },
    {
      id: '9',
      name: 'Teste',
    },
  ];
  return (
    <HomePageTemplate>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Header
              text={item.name + ' ' + item.id}
              size={14}
              style={{
                height: 150,
                borderColor: colors.primary,
                borderWidth: 1,
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Header text="test" size={14} />
      </View>
    </HomePageTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
