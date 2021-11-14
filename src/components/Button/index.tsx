import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TButton = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  type?: 'navigation' | 'menu';
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Button = styled.button<TButton>`
  ${({ type = 'navigation', theme: { border, offsets, colors } }: TButton) => `
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    font-size: 1rem;
    outline: inherit;
    padding: ${offsets.elementContent};
    border-radius: ${border.radius};

    ${
      type === 'navigation'
        ? `
          border: ${border.size} solid ${colors.sectionContent};
          color: ${colors.sectionContent};
          text-transform: uppercase;
        `
        : ''
    }

    ${
      type === 'menu'
        ? `
          border: none;
          color: ${colors.sectionContent};
          text-transform: uppercase;
        `
        : ''
    }

  `}

  ${withBasicElementOffsets}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export default Button;
