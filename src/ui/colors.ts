export interface ThemeableColor {
  dark: string;
  light: string;
}

export type ThemeableColors = {
  [color: string]: ThemeableColor;
};

export interface BrandColors {
  alabaster: string;
  amaranth: string;
  azureRadiance: string;
  brightSun: string;
  ceriseRed: string;
  cerulean: string;
  chambray: string;
  concrete: string;
  dodgerBlue: string;
  eucalyptus: string;
  green: string;
  jungleGreen: string;
  laserLemon: string;
  limeade: string;
  manatee: string;
  mineShaft: string;
  monza: string;
  porcelain: string;
  purpleHeart: string;
  radicalRed: string;
  regalBlue: string;
  regentGray: string;
  robinsEggBlue: string;
  royalBlue: string;
  royalPurple: string;
  silver: string;
  whiteIce: string;
  whiteLilac: string;
  wildSand: string;
  pictonBlueLight: string;
}
export const tailwindColors = {
  gray: {
    50: '#fcfeff',
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },

  brand: {
    alabaster: '#f8f8f8',
    amaranth: '#ef3f56',
    azureRadiance: '#0084ff',
    brightSun: '#ffdb43',
    ceriseRed: '#e4405f',
    cerulean: '#00a4de',
    chambray: '#3b5998',
    concrete: '#f3f3f3',
    dodgerBlue: '#1da1f2',
    eucalyptus: '#2bb24c',
    green: '#00c300',
    jungleGreen: '#2dbd60',
    laserLemon: '#ffff66',
    limeade: '#55c500',
    manatee: '#94989e',
    mineShaft: '#333333',
    monza: '#bd081c',
    porcelain: '#f2f4f5',
    purpleHeart: '#6526b8',
    radicalRed: '#ff3860',
    regalBlue: '#00486a',
    regentGray: '#878f9d',
    robinsEggBlue: '#00deb7',
    royalBlue: '#2f80ed',
    royalPurple: '#64419a',
    silver: '#bdbdbd',
    whiteIce: '#e8f5fb',
    whiteLilac: '#f4effb',
    wildSand: '#f6f6f6',
    pictonBlueLight: 'rgba(86, 204, 242, 0.05)',
  },
};
