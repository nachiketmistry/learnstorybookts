import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    viewMode: 'docs'
  }
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.storyName = 'to Storybook';
