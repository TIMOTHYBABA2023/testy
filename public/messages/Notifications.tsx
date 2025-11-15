import React from 'react'
import { NotificationTable } from './NotificationTable';
import { sampleData } from './data';
import AddPropertyButton from './AddPropertyButton';
import { Burger } from '../../../assets/images';

export const Notifications:React.FC = () => {
  return (
    <div>
       <div className="flex justify-between items-center mb-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-4">
          <img src={Burger} alt="Hamburger icon" />
          <h1 className="text-[32px] font-bold ">Messages</h1>
        </div>
        <AddPropertyButton type="button" label="New Message" />
      </div>
      <h2 className="text-[15px] font-semibold mb-6 text-[#202124]">Notification</h2>
      <div className="bg-white rounded-lg shadow">
        <NotificationTable data={sampleData} />
      </div>
</div>
  )
}

export default Notifications;