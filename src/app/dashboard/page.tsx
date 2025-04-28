"use client";
import RevenueChart from "@/components/charts/Revenue";
import { SalesDetailsChart } from "@/components/charts/SalesDetails";
import AllUsers from "@/icons/AllUsers";
import TotalBuyers from "@/icons/TotalBuyers";
import TotalSales from "@/icons/TotalSales";
import TotalSeller from "@/icons/TotalSeller";

const AutoDealerShip = () => {

  return (
    <div className="space-y-6">
      {/* Admin Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Active Users */}
        <div className="bg-white w-full max-w-[262px] h-[161px] rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mt-2">Active Users</p>
              <p className="text-2xl font-semibold text-[#202224] mt-4 mb-4">48,689</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                {/* <AllUsers/> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg> 8.5% Up from yesterday
              </p>
            </div>
            {/* <div className="bg-indigo-100 p-3 rounded-full"> */}
            <AllUsers/>
            {/* </div> */}
          </div>
        </div>

        {/* Total Buyers */}
        <div className="bg-white w-full max-w-[262px] h-[161px] rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mt-2">Total Buyers</p>
              <p className="text-2xl font-semibold text-[#202224] mt-4 mb-4">10,293</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                +5.7% from last month
              </p>
            </div>
            {/* <div className="bg-blue-100 p-3 rounded-full"> */}
            <TotalBuyers/>
            {/* </div> */}
          </div>
        </div>

        {/* Total Sellers */}
        <div className="bg-white w-full max-w-[262px] h-[161px] rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mt-2">Total Sellers</p>
              <p className="text-2xl font-semibold text-[#202224] mt-4 mb-4">6,158</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg> */}
                +12.1% from last month
              </p>
            </div>
              <TotalSeller/>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-white w-full max-w-[262px] h-[161px] rounded-lg p-5 border border-gray-200/30 hover:border-gray-200/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mt-2">Total Sales</p>
              <p className="text-2xl font-semibold text-[#202224] mt-4 mb-4">$2.4M</p>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                +9.3% from last month
              </p>
            </div>
             <TotalSales/>
          </div>
        </div>

      </div>
      <SalesDetailsChart/>
      <RevenueChart/>
     
    </div>
  );
}
export default AutoDealerShip;