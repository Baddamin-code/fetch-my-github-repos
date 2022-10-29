import React from 'react'
import { ImSpinner4 } from "react-icons/im"

const LoadingSpinner = () => {
  return (
    
    <div className="grid justify-items-center">
      <ImSpinner4 className="text-3xl text-blue-300 my-2" />
      <h1 className='text-xl text-gray-300'>Loading...</h1>
    </div>
  )
}

export default LoadingSpinner;