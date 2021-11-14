import React, { FC, memo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';

import YAxisMinMax from 'components/Charts/Helpers';
import { SubTitle } from 'components/Typography';

import { Container } from '../Helpers/styles';
import { Wrapper } from './styles';
import { TProps } from './types';

const LineGraphic: FC<TProps> = ({ data, referenceLine, variant, title, ...props }) => {
  return (
    <Container>
      <YAxisMinMax />
      <SubTitle>{title}</SubTitle>
      <Wrapper variant={variant} referenceLine={referenceLine} {...props}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey='name' />
          <YAxis hide />
          <Tooltip />
          <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </Wrapper>
    </Container>
  );
};

export default memo(LineGraphic);
