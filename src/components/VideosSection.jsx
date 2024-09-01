import React from 'react'
import { useContextResult } from "../contexts/ResultContextProvider"


const VideosSection = () => {
    const {results} = useContextResult();
  return (
    <>
     <div className="flex flex-wrap justify-between py-7 px-28 w-full  md:w-4/5">
         { results?.video_results?.map(({source , title , url , thumbnail , description} , index)=>(
              <div key={index} className="mb-7">
                  <a href={url} target="_blank" rel="noreffer" className="text-sm text-gray-700 dark:text-gray-300">
                    <p>{source ? source : "www.youtube.com › watch" }</p>
                  </a>

                  <a href={url} target="_blank" rel="noreffer" className="text-xl text-blue-800 hover:underline dark:text-blue-600">
                      <p className="pt-1 uppercase mb-2">{title}</p>
                  </a>

                  <div className="flex justify-between space-x-6 space-y-4 ">
                    <ReactPlayer url={url} controls width="150px" height="110px" className="rounded-lg"/>
                  <p className="text-sm text-gray-700 dark:text-gray-300 pt-2 pb-1 mr-1">{title} </p>
               
                  </div>
              </div>
           
       )) 
         }
          </div>

    </>
  )
}

export default VideosSection