import React from 'react'
import Head from 'next/head'

const index = () => {
  return <React.Fragment>
    <Head>
      <title>Landing Page Template</title>
    </Head>
    <body className="bg-brand text-white">
      <div className="container mx-auto px-2">
        <nav className="py-12 flex justify-between">
          <div className="flex flex-row justify-center">
            <h1 className="px-2 text-xl text-center my-auto uppercase font-bold text-black">startr</h1>
          </div>
          <div className="flex flex-row justify-center items-center my-auto space-x-4">
            <a href="#" className="px-8 py-2 bg-brand-button uppercase">
              Sign up
            </a>
          </div>
        </nav>
        <div className="flex flex-row justify-center items-center bg-black h-xl mb-4">
          <div className="w-3/4 h-60 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold pt-8 text-white pb-4">
              Landing Page Starterkit
            </h1>
            <div className="pt-8">
              <a href="#" className="px-8 py-2 bg-brand-button uppercase items-center justify-center inline-flex space-x-2">
                Button
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <div className="w-1/2 h-80 bg-red-500 mr-2"></div>
          <div className="w-1/2 h-80 bg-black ml-2"></div>
        </div>
      </div>
    </body>
  </React.Fragment>
}

export default index
