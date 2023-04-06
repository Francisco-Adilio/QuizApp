import { User, Plus, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react';


export function Topbar() {
  const [value, setValue] = useState("Search");

  function handleSearch() {
    setValue("");
  }

  return (
    <div className='w-full h-16 bg-violet-600 absolute z-10 flex px-4 items-center'>
      <a href="" className='absolute left-0 bg-slate-700 h-12 w-12 ml-4'></a>
      <div className='mx-auto flex items-center justify-center'>
        <input type="text" value={value} onFocus={handleSearch} onChange={(event) => setValue(event.target.value)} className='h-12 w-72 bg-zinc-700 rounded-full px-4 outline-none' />
        <button className='h-12 w-12 bg-zinc-700 rounded-full relative right-10 outline-none'>
          <MagnifyingGlass size={32}/>
        </button>
      </div>
      <button className='absolute right-0 bg-green-600 h-12 w-40 mr-20 rounded-md text-lg font-semibold text-zinc-100 flex items-center justify-between px-4'>
        <Plus size={24}/>
        Create Quiz
      </button>
      <button className='absolute right-0 bg-zinc-700 h-12 w-12 mr-4 rounded-md'>
        <User size={32} color='#ffffff' className='m-auto'/>
      </button>
    </div>
  )
}