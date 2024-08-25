import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    
    <div className='bg-slate-600 text-white p-4 m-auto w-6/12 text-2xl text-center'>User {userid}</div>
  )
}

export default User