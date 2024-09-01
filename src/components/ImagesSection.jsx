import React from 'react'
import { useContextResult } from "../contexts/ResultContextProvider"

const ImagesSection = () => {
    const {results} = useContextResult();
  return (
    <>
            <div className="flex flex-wrap  justify-center py-7 px-10  w-full lg:justify-start ">
        {results?.organic?.map(({targetUrl , sourceUrl } , index) => (

            <div key={index} className=" py-2 px-2 ">
                 <a href={targetUrl} target="_blank" rel="noreffer" >
                   <img src={sourceUrl} alt="" width= {200} />
                 </a>
                 <a href={targetUrl} target="_blank" rel="noreffer" className="text-xs text-gray-700 dark:text-gray-300 hover:underline ">
                     <p className="pt-2 pb-0.5">Daily Geek Show</p>
                 </a>
                 <p className="text-sm text-gray-700 dark:text-gray-300">Shonan and success in his last movi....</p>
            </div>
        ))}
        </div>

    </>
  )
}

export default ImagesSection