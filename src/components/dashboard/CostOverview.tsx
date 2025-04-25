import React from 'react';
import { DollarSign, CreditCard, Download, ArrowUp, ArrowDown, Calendar } from 'lucide-react';

const subscriptionDetails = {
  plan: 'Growth Plan',
  price: '$2,499',
  billingCycle: 'Monthly',
  nextPayment: '2025-04-01',
  status: 'Active',
};

const spendingMetrics = [
  {
    name: 'Total Spend',
    value: '$7,497',
    change: '+12%',
    trend: 'up',
    period: 'from last quarter',
  },
  {
    name: 'Average Monthly Spend',
    value: '$2,499',
    change: '0%',
    trend: 'neutral',
    period: 'from last month',
  },
  {
    name: 'Projected Annual Spend',
    value: '$29,988',
    change: '+8%',
    trend: 'up',
    period: 'from last year',
  },
];

const recentInvoices = [
  {
    id: 'INV-2025-001',
    date: '2025-03-01',
    amount: 2499,
    status: 'paid',
    period: 'Mar 2025',
  },
  {
    id: 'INV-2025-002',
    date: '2025-02-01',
    amount: 2499,
    status: 'paid',
    period: 'Feb 2025',
  },
  {
    id: 'INV-2025-003',
    date: '2025-01-01',
    amount: 2499,
    status: 'paid',
    period: 'Jan 2025',
  },
];

const usageMetrics = [
  {
    service: 'SEO Optimization',
    used: 75,
    total: 100,
    unit: 'hours',
  },
  {
    service: 'Social Media Posts',
    used: 45,
    total: 60,
    unit: 'posts',
  },
  {
    service: 'PPC Management',
    used: 80000,
    total: 100000,
    unit: 'clicks',
  },
];

export default function CostOverview() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Cost Overview
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Download className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Subscription Details */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Current Subscription
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Plan</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {subscriptionDetails.plan}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Monthly Fee</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {subscriptionDetails.price}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Billing Cycle</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {subscriptionDetails.billingCycle}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Next Payment</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {subscriptionDetails.nextPayment}
              </dd>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Update Payment Method
            </button>
          </div>
        </div>
      </div>

      {/* Spending Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {spendingMetrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {metric.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        metric.trend === 'up' ? 'text-green-600' : 
                        metric.trend === 'down' ? 'text-red-600' : 
                        'text-gray-500'
                      }`}>
                        {metric.trend === 'up' ? <ArrowUp className="h-4 w-4" /> :
                         metric.trend === 'down' ? <ArrowDown className="h-4 w-4" /> : null}
                        <span className="ml-1">{metric.change}</span>
                        <span className="ml-1 text-gray-500">{metric.period}</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Metrics */}
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Service Usage
          </h3>
          <div className="mt-6 space-y-6">
            {usageMetrics.map((metric) => (
              <div key={metric.service}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-500">
                        {metric.service}
                      </p>
                      <p className="ml-4 text-sm text-gray-500">
                        {metric.used} / {metric.total} {metric.unit}
                      </p>
                    </div>
                    <div className="mt-2">
                      <div className="bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-indigo-600 rounded-full"
                          style={{ width: `${(metric.used / metric.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Recent Invoices
          </h3>
          <div className="mt-6">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Invoice
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Download</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentInvoices.map((invoice) => (
                          <tr key={invoice.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {invoice.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {invoice.date}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${invoice.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                invoice.status === 'paid'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {invoice.status.toUpperCase()}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-indigo-600 hover:text-indigo-900">
                                <Download className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}