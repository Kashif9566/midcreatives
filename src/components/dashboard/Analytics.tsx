import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const performanceData = [
  { date: '2025-01', ctr: 2.4, conversionRate: 1.8, roi: 280 },
  { date: '2025-02', ctr: 2.8, conversionRate: 2.1, roi: 310 },
  { date: '2025-03', ctr: 3.2, conversionRate: 2.4, roi: 340 },
];

const campaignData = [
  { name: 'SEO', spend: 4800, impressions: 150000 },
  { name: 'PPC', spend: 6200, impressions: 85000 },
  { name: 'Social', spend: 3500, impressions: 120000 },
  { name: 'Email', spend: 2100, impressions: 95000 },
];

export default function Analytics() {
  const [dateRange, setDateRange] = useState('3m');

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="ml-4 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="1m">Last Month</option>
          <option value="3m">Last 3 Months</option>
          <option value="6m">Last 6 Months</option>
          <option value="1y">Last Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">Average CTR</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">2.8%</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="text-green-600 font-medium">↑ 12%</span>
              <span className="text-gray-500"> from last period</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">Conversion Rate</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">2.1%</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="text-green-600 font-medium">↑ 8%</span>
              <span className="text-gray-500"> from last period</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">ROI</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">310%</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="text-green-600 font-medium">↑ 15%</span>
              <span className="text-gray-500"> from last period</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">Total Spend</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">$16.6k</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="text-red-600 font-medium">↑ 5%</span>
              <span className="text-gray-500"> from last period</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Performance Trends</h2>
        <div className="mt-4 bg-white shadow rounded-lg p-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="ctr" stroke="#4F46E5" name="CTR %" />
              <Line yAxisId="left" type="monotone" dataKey="conversionRate" stroke="#10B981" name="Conv. Rate %" />
              <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#F59E0B" name="ROI %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Campaign Performance</h2>
        <div className="mt-4 bg-white shadow rounded-lg p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="spend" fill="#4F46E5" name="Spend ($)" />
              <Bar yAxisId="right" dataKey="impressions" fill="#10B981" name="Impressions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}