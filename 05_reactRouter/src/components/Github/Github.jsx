import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
 
const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {   // useEffect is render when a cpmponent is load or render
    //     fetch("https://api.github.com/users/Subrat-Kumar-Biswal")
    //     .then((response) => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

  return (
      <>
       <div className='bg-yellow-500 m-auto text-center p-3 w-5/12 text-white text-4xl'>Github followers: {data.public_repos}
        <img src={data.avatar_url} alt="" width={100}/></div>
        
    </>
  )
}

export default Github

export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/Subrat-Kumar-Biswal');
    return response.json()
}