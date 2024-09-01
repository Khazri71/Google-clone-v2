import React from 'react'
import { useContextResult } from "../contexts/ResultContextProvider"

const SearchSection = () => {
    const {results} = useContextResult();
  return (
    <>
       <div className="flex flex-wrap justify-between py-7 px-10">
      
      {results?.organic?.map(( {url , description , title } , index) => (
           <div key={index} className=" py-4 px-14 w-full sm:w-2/4 ">
              <a href={url} target="_blank" rel="noreffer" className="text-xs text-gray-700 dark:text-gray-300">
                  <p>{url.length > 35 ? `${ url.substring(0 , 30) }...` : url  }</p>
              </a>
                <a href={url} target="_blank" rel="noreffer" className="text-xl text-blue-800 hover:underline dark:text-blue-600">
                    <p>{title}</p>
                </a>
                <p className="text-sm text-gray-700 dark:text-gray-300">{description }</p>
             </div>  
        )) }
    </div>



    </>
  )
}

export default SearchSection