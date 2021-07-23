import { Line } from '@ant-design/charts';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { useModel } from 'umi';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const { counter, add, minus } = useModel('counter', (ret) => ({
    counter: ret.counter,
    add: ret.increment,
    minus: ret.decrement,
  }));
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <PageHeaderWrapper>
      <Line {...config} />
      <div>
        <div>{counter}</div>
        <button onClick={add}>add by 1</button>
        <button onClick={minus}>minus by 1</button>
      </div>
    </PageHeaderWrapper>
  );
};
export default Page;
