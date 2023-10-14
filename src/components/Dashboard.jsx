import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import ProductSells from './ProductSells'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <ProductSells />
      </div>
     
    </div>
  )
}

export default Dashboard