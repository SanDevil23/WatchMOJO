import React from 'react'

const MiddleComp = () => {
  return (
    <div>
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to our Streaming Website
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Discover amazing videos and enjoy endless entertainment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-lime-500 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Trending Videos</h2>
              {/* Place trending videos here */}
            </div>
            <div className="bg-purple-500 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Featured Videos</h2>
              {/* Place featured videos here */}
            </div>
            <div className="bg-red-400  text-center rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Recommended Videos</h2>
              {/* Place recommended videos here */}
            </div>
          </div>

          <div>
              {/* <button className='text-white'><a href="/watch-console">Watch Now</a></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleComp
