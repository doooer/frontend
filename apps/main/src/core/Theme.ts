const font = {
  bold: 'SpoqaHanSansNeo-Bold',
  regular: 'SpoqaHanSansNeo-Regular',
  medium: 'SpoqaHanSansNeo-Medium',
};

const fontSize = {
  title: '36px',
  xLarge: '24px',
  large: '20px',
  medium: '18px',
  small: '16px',
  xSmall: '14px',
};

const space = {
  xxxLarge: '120px',
  xxLarge: '100px',
  xLarge: '80px',
  large: '40px',
  meduim: '32px',
  small: '24px',
  xSmall: '20px',
  xxSmall: '16px',
  xxxSmall: '12px',
  tiny: '8px',
  xTiny: '4px',
};

const color = {
  green: '#94DFAE',
  blue: '#3832E1',
  yellow: '#FCFC87',
  red: '#E56762',
  white: '#FFFFFF',
  black0: '#333333',
  black10: '#BCBCBC',
  black20: '#B1B1B1',
  overlay0: 'rgba(0, 0, 0, 0.7)',
  overlay10: 'rgba(0, 0, 0, 0.5)',
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

export const handleColorType = (value?: string) => {
  switch (value) {
    case 'green':
      return color.green;
    case 'blue':
      return color.blue;
    case 'yellow':
      return color.yellow;
    case 'red':
      return color.red;
    case 'white':
      return color.white;

    case 'black0':
      return color.black0;
    case 'black10':
      return color.black10;
    case 'black20':
      return color.black20;

    default:
      return color.black0;
  }
};
