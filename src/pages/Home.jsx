import React from 'react'
import Banner from '../components/Banner'
import HotJobs from '../components/HotJobs'

function Home() {
  return (
    <div className='mt-10 md:mt-5'>
      <Banner/>
      <br />
      <HotJobs />
    </div>
  )
}

export default Home
