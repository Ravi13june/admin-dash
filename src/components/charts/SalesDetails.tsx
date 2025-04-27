import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { amount: '5k', value: 100 },
  { amount: '10k', value: 80 },
  { amount: '15k', value: 60 },
  { amount: '20k', value: 40 },
  { amount: '25k', value: 20 },
  { amount: '30k', value: 40 },
  { amount: '35k', value: 60 },
  { amount: '40k', value: 80 },
  { amount: '45k', value: 100 },
  { amount: '50k', value: 80 },
  { amount: '55k', value: 60 },
  { amount: '60k', value: 40 },
];

export function SalesDetailsChart() {
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
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="amount"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280' }}
              ticks={[20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{ background: '#fff', border: 'none', borderRadius: '8px' }}
              formatter={(value) => [`${value}%`, 'Percentage']}
            />
            <Bar
              dataKey="value"
              fill="#199FB1"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}