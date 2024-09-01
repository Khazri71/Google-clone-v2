import { useEffect } from "react";
import { useContextResult } from "../contexts/ResultContextProvider"
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import ImagesSection from "./imagesSection";
import NewsSection from "./NewsSection";
import VideosSection from "./VideosSection";
import SearchSection from "./SearchSection";



const Results = () => {
  const {isLoading  , searchTerm ,  API_KEY} = useContextResult();
  const location = useLocation();

  useEffect( () => {
    if(searchTerm){
      //  if (location.pathname === "/search")
      //     getResults(`?apikey=${API_KEY}&q=${searchTerm}`);
      //   else if (location.pathname === "/images")
      //       getResults(`?apikey=${API_KEY}&q=${searchTerm}&tbm=isch`);
      //    if (location.pathname === "/news") 
      //      getResults(`?apikey=${API_KEY}&q=${searchTerm}&tbm=nws`);
      //   if (location.pathname === "/videos")
      //       getResults(`?apikey=${API_KEY}&q=${searchTerm}&tbm=vid`);
      //   else 
      //     console.log("Error");
    }

   
  } , [searchTerm , location.pathname]);
   


 if(isLoading) return <Loading/>;
 switch(location.pathname){
  case "/search" : 
      return (
   <SearchSection/>
      );
  case "/images" :
      return (
<ImagesSection    />
      );
  case "/news":
       return (
         <NewsSection/>
       );
  case "/videos":
       return (
       <VideosSection/>
       );
  default :
       return "ERROR!";
      
 }
  

 
}

export default Results