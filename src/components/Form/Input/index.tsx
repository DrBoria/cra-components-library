import styled from 'styled-components';

import { basicFont } from 'components/Typography';

import { withOffsetBottom, withOffsetsRight, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TInputProps = {
  name: string;
  id?: string;
  type?: string;
} & TWithBasicElementOffsets &
  TFullWidth;

const Input = styled.input<TInputProps>`
  display: block;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  height: ${({ theme }) => theme.elements.form.height};
  margin-right: ${withOffsetsRight};
  margin-bottom: ${withOffsetBottom};
  padding: ${({ theme }) => theme.offsets.elementContent};

  color: ${({ theme }) => theme.colors.sectionContent};
  font: ${basicFont};

  background: ${({ theme }) => theme.colors.overlay};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
`;

export { Input };
