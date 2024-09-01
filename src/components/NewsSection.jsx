import React from 'react'
import { useContextResult } from "../contexts/ResultContextProvider"

const NewsSection = () => {
    const {results} = useContextResult();
  return (
    <>

<div className="flex flex-wrap justify-between py-7 px-28 w-full  md:w-4/5">
      
      {results?.news_results?.map(( {source , description , title  , date , thumbnail , link} , index) => (
          <div className="flex justify-between space-x-5 items-center w-4/5  ">
            <div key={index} className=" py-4 px-14">
              <a href={link} target="_blank" rel="noreffer" className="text-xs text-gray-700 dark:text-gray-300">
                  <p>{source }</p>
              </a>
                <a href={link} target="_blank" rel="noreffer" className="text-xl text-blue-800 hover:underline dark:text-blue-600">
                    <p className="pt-2 ">{title}</p>
                </a>
                <p className="text-sm text-gray-700 dark:text-gray-300 pt-2 pb-1">{description.length >100 ? `${description.substring(0,90)}...`: description}</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">{date ? date : " "}</span>
             </div>  

            <div className="w-1/5 flex justify-end">
             <img src={thumbnail} alt="" srcset=""  className=" rounded-md   " />
            </div>
            
           
           </div>
        )) }
    </div>

    </>
  )
}

export default NewsSection