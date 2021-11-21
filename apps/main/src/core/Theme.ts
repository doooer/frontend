const font = {
  bold: 'SpoqaHanSansNeo-Bold',
  regular: 'SpoqaHanSansNeo-Regular',
  medium: 'SpoqaHanSansNeo-Medium',
};

const fontSize = {
  title: '36px',
  xxLarge: '28px',
  xLarge: '24px',
  large: '20px',
  medium: '18px',
  small: '16px',
  xSmall: '14px',
  tiny: '10px',
};

const space = {
  // grand
  xGrand: '152px',
  grand: '136px',

  // large
  xxxLarge: '120px',
  xxLarge: '100px',
  xLarge: '80px',
  large: '40px',

  // medium
  medium: '32px',

  // small
  small: '24px',
  xSmall: '20px',
  xxSmall: '16px',
  xxxSmall: '12px',

  // tiny
  tiny: '8px',
  xTiny: '4px',
};

const color = {
  // brand color
  green: '#94DFAE',
  blue0: '#3832E1',
  blue10: 'rgb(55,64,240)',
  yellow: '#FCFC87',
  red: '#E56762',
  white: '#FFFFFF',
  grey: '#c4c4c4',

  // sub color
  violet10: '#5438FF',
  violet20: '#633CFF',

  // black
  black0: '#333333',
  black10: '#6C6C6C',
  black20: '#B1B1B1',

  // overlay
  overlay0: 'rgba(0, 0, 0, 0.7)',
  overlay10: 'rgba(0, 0, 0, 0.5)',

  // shadow
  shadow10: 'rgba(10, 10, 10, 0.2)',
};

const device = {
  mobile: 'screen and (min-width: 375px) and (max-width: 599px)',
  tabletPortrait: 'screen and (min-width: 600px) and (max-width: 1023px)',
  tabletLandscape: 'screen and (min-width: 1024px) and (max-width: 1199px)',
  desktop: 'screen and (min-width: 1200px)',
};

const theme = {
  font,
  fontSize,
  space,
  color,
  device,
};

export default theme;

export type ThemeColorType = keyof typeof color;
export type ThemeFontType = keyof typeof font;
export type ThemeFontSizeType = keyof typeof fontSize;
export type ThemeSpaceType = keyof typeof space;
export type ThemeDeviceType = keyof typeof device;

declare module '@emotion/react' {
  export interface Theme {
    font: typeof font;
    fontSize: typeof fontSize;
    space: typeof space;
    color: typeof color;
    device: typeof device;
  }
}
