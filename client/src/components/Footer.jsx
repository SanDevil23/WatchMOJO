import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center mb-4">
            {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
            <span className="text-xl font-bold"></span>
          </div>
          <p className="text-center text-gray-400">
            © 2024 WatchMojo. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default Footer
