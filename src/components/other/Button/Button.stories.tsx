/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { View, Text } from 'react-native';

import Button from '.';
import { action } from '@storybook/addon-actions';

const colorSelect = { primary: 'primary', secondary: 'secondary' };
const variantSelect = { container: 'container', outline: 'outline' };

const arr = ['teste', 'awrw'];

storiesOf('other/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}>
      <Button
        title={text('title', 'Storybook')}
        color={select('color', colorSelect, 'primary')}
        variant={select('variant', variantSelect, 'container')}
        onPress={action('onPress')}
      >
        <Text> PX </Text>
      </Button>
    </View>
  ));
