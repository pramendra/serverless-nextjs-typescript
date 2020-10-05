import chakraTheme, { ITheme, ColorHues } from '@chakra-ui/core/dist/theme';
import { CSSResetProps } from '@chakra-ui/core/dist/CSSReset';
import { css } from '@emotion/core';
import { tailwindColors, BrandColors } from './colors';
import { systemFontStack, systemMonoFontStack } from './fonts';

export interface Theme extends ITheme {
  colors: ITheme['colors'] & {
    gray: ColorHues;
    brand: BrandColors;
  };
}

export const defaultTheme: Theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: systemFontStack,
    heading: systemFontStack,
    mono: systemMonoFontStack,
  },
  colors: {
    ...chakraTheme.colors,
    ...tailwindColors,
  },
  shadows: {
    ...chakraTheme.shadows,
  },
};

export const defaultGlobalCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-family: ${defaultTheme.fonts['body']};
  }
  body {
    font-family: 'Nunito', Roboto, Helvetica, sans-serif;
    letter-spacing: normal;
    margin: 0;
    font-size: 16px;
    min-width: 320px;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

type GetGlobalConfig = Required<CSSResetProps>['config'];
export const defaultGetGlobalConfig: GetGlobalConfig = (theme: any) => ({
  light: {
    color: theme.colors.gray[700],
    bg: theme.colors.brand.pictonBlueLight,
    borderColor: theme.colors.gray[400],
    placeholderColor: theme.colors.gray[600],
  },
  dark: {
    color: theme.colors.gray[400],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.gray[600],
  },
});
