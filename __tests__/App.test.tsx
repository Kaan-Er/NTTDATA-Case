/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import colors from '../src/themes/colors';
import Header from '../src/components/atoms/Header';
import Icon from '../src/components/atoms/Icon';
import TextInput from '../src/components/atoms/TextInput';
import Toast from '../src/components/molecules/Toast';
import BasketCard from '../src/components/molecules/BasketCard';
import Button from '../src/components/atoms/Button';
import ProductCard from '../src/components/molecules/ProductCard';

it('renders Button correctly', () => {
  const tree = renderer
    .create(<Button color={colors.white.default} onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button with icon correctly', () => {
  const tree = renderer
    .create(
      <Button
        color={colors.white.default}
        onPress={() => {}}
        iconName="Plus"
        iconWidth="24"
        iconHeight="24"
        iconColor={colors.lightSilver}
        iconPosition="left"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Header correctly', () => {
  const tree = renderer
    .create(<Header text="Test" size={14} color={colors.blackOlive} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Icon correctly', () => {
  const tree = renderer
    .create(
      <Icon
        name="Location"
        width="24"
        height="24"
        color={colors.lightSilver}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders TextInput correctly', () => {
  const tree = renderer
    .create(<TextInput placeholder="Test" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render Toast correctly', () => {
  const tree = renderer.create(<Toast />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render BasketCard correctly', () => {
  const tree = renderer
    .create(
      <BasketCard
        image="https://loremflickr.com/640/480"
        title="Test"
        price="100"
        quantity={1}
        onAdd={() => {}}
        onRemove={() => {}}
        onRemoveAll={() => {}}
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render ProductCard correctly', () => {
  const tree = renderer
    .create(
      <ProductCard
        image="https://loremflickr.com/640/480"
        title="Test"
        price="100"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        isFavorite={false}
        onCartPress={() => {}}
        onFavoritePress={() => {}}
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
