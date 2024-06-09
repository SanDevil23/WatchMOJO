import React from 'react'

const TopBar = ({setPop, pop}) => {

    const togglePop = () => {
        setPop(!pop);
        console.log(pop);
    };
  return (
          <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-4xl font-extrabold"><a href="/">WatchMOJO</a></div>
      <div className="flex space-x-4">
      <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"><a href="/watch-console">
          WatchNow
          </a>
        </button>
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"><a href="/register">
          SignUp
          </a>
        </button>
        <button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded" onClick={togglePop}>
          Login
        </button>
      </div>


    </div>
  )
}

export default TopBar
