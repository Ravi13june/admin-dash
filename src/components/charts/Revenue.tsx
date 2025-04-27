"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: '5k', Sales: 20, Profit: 20 },
  { name: '10k', Sales: 30, Profit: 65 },
  { name: '15k', Sales: 25, Profit: 50 },
  { name: '20k', Sales: 20, Profit: 40 },
  { name: '25k', Sales: 35, Profit: 45 },
  { name: '30k', Sales: 50, Profit: 30 },
  { name: '35k', Sales: 100, Profit: 20 },
  { name: '40k', Sales: 50, Profit: 30 },
  { name: '45k', Sales: 80, Profit: 25 },
  { name: '50k', Sales: 60, Profit: 10 },
  { name: '55k', Sales: 70, Profit: 60 },
  { name: '60k', Sales: 40, Profit: 90 },
];

export default function RevenueChart() {
  return (
    <Card className="shadow-2xl rounded-2xl p-6 bg-white">
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>October</option>
            {/* Add more months if needed */}
          </select>
        </div>

        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FB6B5B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FB6B5B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C084FC" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#C084FC" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              
              <Area type="monotone" dataKey="Sales" stroke="#FB6B5B" fill="url(#colorSales)" />
              <Area type="monotone" dataKey="Profit" stroke="#C084FC" fill="url(#colorProfit)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
