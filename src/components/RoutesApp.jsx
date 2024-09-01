import React from 'react'
import {Routes , Route , Navigate} from 'react-router-dom'

import Results from './Results'

const RoutesApp = () => {
  return (
    <>
      <div className='py-4'>
        <Routes>
            <Route path='/' element={< Navigate to="/search" replace />} />
            <Route path='/search' element={<Results/>}  />
            <Route path='/images' element={<Results/>} />
            <Route path='/news'  element={<Results/>} />
            <Route path='/videos' element={<Results/>} />
        </Routes>
      </div>
    </>
  
  )
}

export default RoutesApp