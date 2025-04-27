import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, CartesianGrid, Area } from 'recharts';

const Revenue = () => {
    const data = [
        {
          month: '5k',
          a: 4000,
          b: 2400,
         // c: 2400,
        },
        {
          month: '10k',
          a: 3000,
          b: 1398,
         // c: 2210,
        },
        {
          month: '15k',
          a: 2000,
          b: 9800,
          //c: 2290,
        },
        {
          month: '20',
          a: 2780,
          b: 3908,
         // c: 2000,
        },
        {
          month: '2015.05',
          a: 1890,
          b: 4800,
          c: 2181,
        },
        {
          month: '2015.06',
          a: 2390,
          b: 3800,
         // c: 2500,
        },
        {
          month: '2015.07',
          a: 3490,
          b: 4300,
          //c: 2100,
        },
      ];

const toPercent = (decimal: number, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};
const renderTooltipContent = (o: { payload: any; label: any; }) => {
    const { payload, label } = o;
    const total = payload.reduce((result: any, entry: { value: any; }) => result + entry.value, 0);
  
    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map((entry: { color: any; name: any; value: any; }, index: any) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-lg font-semibold">Sales Details</h3>
        {/* <p className="text-gray-500">October</p> */}
      </div>
      <div className="text-right">
      <p className="text-gray-500">October</p>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
        //   width={500}
        //   height={400}
          data={data}
        //   stackOffset="expand"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          {/* <Tooltip content={renderTooltipContent} /> */}
          <Area type="monotone" dataKey="a" stackId="1" stroke="#DBA5FF" fill="#8884d8" />
          <Area type="monotone" dataKey="b" stackId="1" stroke="#FF8F6DCC" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
  )
}

export default Revenue