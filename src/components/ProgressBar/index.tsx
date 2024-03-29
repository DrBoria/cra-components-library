import styled, { TDefaultTheme } from "styled-components";
import { withOffsetBottom, withOffsetsRight, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

const ProgressContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
    background-color: ${({ theme }: {theme: TDefaultTheme}) => theme.colors.section};
    border: ${({ theme }: { theme: TDefaultTheme }) => theme.border.size} solid ${({ theme }: { theme: TDefaultTheme }) => theme.colors.sectionContent};
    height: ${({ theme }: { theme: TDefaultTheme }) => `calc(${theme.border.size} * 8)`};
    display: flex;
    align-items: center;
    border-radius: ${({ theme }: { theme: TDefaultTheme }) => theme.border.radius};

    margin-right: ${withOffsetsRight};
    margin-bottom: ${withOffsetBottom};
`;

const ProgressBarIndicator = styled.div<{ percentage: number }>`
    background-color: ${({ theme }: {theme: TDefaultTheme}) => theme.colors.sectionContent};
    width: ${(props) => props.percentage}%;
    height: 100%;
`;

type TProgressBarProps = {
  percentage: number;
}& TWithBasicElementOffsets &
TFullWidth;

const ProgressBar = ({ percentage, ...props }: TProgressBarProps) => {
    return (
      <ProgressContainer {...props}>
        <ProgressBarIndicator percentage={percentage} />
      </ProgressContainer>
    );
  };

  export default ProgressBar;
