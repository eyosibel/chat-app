import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div>
        <SearchInput/>
        <div className='border-r border-slate-500 p-4 flex flex-col'></div>
        *<Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar