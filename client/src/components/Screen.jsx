import React from 'react'
import ReactPlayer from 'react-player'
import TopBar from './TopBar'

const Screen = () => {
  return (
    <div>
        <div className='bg-sky-950 h-full'>
        <div>
            <div className='text-5xl p-5 font-extrabold text-gray-200  bg-slate-750'>WatchMOJO</div>
        </div>
        
        <div className="flex bg-black justify-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=1La4QzGeaaQ" controls='true' width="100vw" height="75vh" />
        </div>
        <div className='text-white p-10'>
        <h1 className='text-2xl text-orange-50'>Description</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </div>
    </div>
  )
}

export default Screen
