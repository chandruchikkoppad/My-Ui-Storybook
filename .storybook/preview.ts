import type { Preview } from '@storybook/react';
import { withThemeProvider } from 'storybook-addon-theme-provider';
import ThemeProvider from '../src/components/ThemeProvider/ThemeProvider';
import '../index.scss';
import '../src/assets/Themes/Theme.scss';

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [withThemeProvider(ThemeProvider)],
};

export default preview;
