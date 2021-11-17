import styled from '@emotion/styled';

import { ThemeFontSizeType } from '~/core/Theme';

const Text = styled.p<{ fontSize: ThemeFontSizeType }>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
`;

export default Text;
