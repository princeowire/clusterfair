import React from 'react'
import Faq from '../components/faq'

const pasting = () => {
  return (
    <div className='pasting p-4 pt-16'>
      <button className='py-6'>Back</button>
      <main>
        <h2 className='text-2xl font-semibold'>Paste Your JOb Description</h2>
        <p className='text-sm'>found a online job? Paste the full description below to generate taillored interview questions </p>
        <div>
          <Faq />
        </div>
      </main>
    </div>
  )
}

export default pasting
