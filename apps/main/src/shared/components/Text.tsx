/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

import { ThemeColorType, ThemeFontSizeType, ThemeFontType } from '~/core/Theme';

interface Props {
  textColor?: ThemeColorType;
  fontSize?: ThemeFontSizeType;
  font?: ThemeFontType;
  style?: CSSProperties;
}

const Text: React.FC<Props> = ({ textColor = 'black0', fontSize = 'medium', font = 'regular', style, children }) => {
  return (
    <StyledText textColor={textColor} fontSize={fontSize} font={font} style={style}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{
  textColor: ThemeColorType;
  fontSize: ThemeFontSizeType;
  font: ThemeFontType;
}>`
  font-family: ${({ font, theme }) => theme.font[font]};
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  color: ${({ textColor, theme }) => theme.color[textColor]};
  font-weight: ${({ font }) => (font === 'bold' ? 700 : font === 'medium' ? 500 : 400)};
`;

export default Text;
