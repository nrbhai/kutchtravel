import { theme } from './config';

export const getBgColor = (element: 'main' | 'nav' | 'card') => {
  switch (element) {
    case 'main':
      return theme.colors.background.main;
    case 'nav':
      return theme.colors.background.nav;
    case 'card':
      return theme.colors.background.card;
    default:
      return '';
  }
};

export const getTextColor = (variant: 'primary' | 'secondary' | 'muted') => {
  switch (variant) {
    case 'primary':
      return theme.colors.text.primary;
    case 'secondary':
      return theme.colors.text.secondary;
    case 'muted':
      return theme.colors.text.muted;
    default:
      return '';
  }
};

export const getBorderColor = (variant: 'light' | 'default' | 'dark') => {
  switch (variant) {
    case 'light':
      return theme.colors.border.light;
    case 'default':
      return theme.colors.border.DEFAULT;
    case 'dark':
      return theme.colors.border.dark;
    default:
      return '';
  }
};

export const getFont = (variant: 'primary' | 'secondary') => {
  switch (variant) {
    case 'primary':
      return theme.colors.brand.primary.text;
    case 'secondary':
      return theme.colors.brand.secondary.text;
    default:
      return '';
  }
};