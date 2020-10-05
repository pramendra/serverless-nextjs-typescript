import React from 'react';
import Document, {
  //
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Global } from '@emotion/core';
import GoogleFonts from 'next-google-fonts';
import { defaultGlobalCss, defaultTheme } from '../ui/theme';
import { publicRuntimeConfig } from '../lib/public-config';
const { assetPrefix } = publicRuntimeConfig;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...(initialProps.styles as any), ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="pramendra" />
          <meta
            name="theme-color"
            content={defaultTheme?.colors?.brand?.royalPurple}
          />
          <link
            rel="shortcut icon"
            href={`${assetPrefix}static/favicon/favicon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${assetPrefix}static/favicon/Icon-192.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={`${assetPrefix}static/favicon/Icon-512.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${assetPrefix}static/favicon/Icon-180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${assetPrefix}static/favicon/Icon-16.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${assetPrefix}static/favicon/Icon-32.png`}
          />
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" />
          <Global styles={[defaultGlobalCss]} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
