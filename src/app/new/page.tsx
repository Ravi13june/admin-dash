"use client";
import Revenue from "@/components/charts/Revenue";
import { SalesDetailsChart } from "@/components/charts/SalesDetails";

const AutoDealerShip = () => {

  return (
    <div className="space-y-6">
      {/* Admin Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Active Users */}
        <div className="bg-white rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">24,521</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg> */}
                +8.2% from last month
              </p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg> */}
            </div>
          </div>
        </div>

        {/* Total Buyers */}
        <div className="bg-white rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Buyers</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">18,363</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                +5.7% from last month
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg> */}
            </div>
          </div>
        </div>

        {/* Total Sellers */}
        <div className="bg-white rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sellers</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">6,158</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg> */}
                +12.1% from last month
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg> */}
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-white rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sales</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">$2.4M</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg> */}
                +9.3% from last month
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 2.657 3 5 3 5s3-2.343 3-5c0-1.657-1.343-3-3-3z" />
              </svg> */}
            </div>
          </div>
        </div>

      </div>
      <SalesDetailsChart/>
      <Revenue/>
    </div>
  );
}
export default AutoDealerShip;