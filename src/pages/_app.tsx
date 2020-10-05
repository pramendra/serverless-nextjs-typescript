import React from 'react';
import { AppProps } from 'next/app';
import {
  //
  // ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/core';
import { defaultTheme, defaultGetGlobalConfig } from '../ui/theme';

export default function App({ Component, pageProps }: AppProps): any {
  // remoted ColorModeProvider
  // fix: Prop `className` did not match.
  return (
    <ThemeProvider theme={defaultTheme}>
      <CSSReset config={defaultGetGlobalConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
