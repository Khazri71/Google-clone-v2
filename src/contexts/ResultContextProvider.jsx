
import { createContext , useContext, useState } from "react"
import dotenv from 'dotenv';


const ResultContext = createContext();


const baseUrl = "https://app.zenserp.com/api/v2/search";






const ResultContextProvider = ({children}) => {
    
    const API_KEY =  import.meta.env.API_KEY;
    const [results , setResults] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [searchTerm , setSearchTerm] = useState("");
    const [searchEngine , setSearchEngine] = useState("google");

    const getResults = async (type) => {
        setIsLoading(true)
       const response = await fetch(`${baseUrl}${type}` , {
        method: 'GET',
     
       });
       try{
        const data = await response.json();
        console.log(data);
        setResults(data);
        setIsLoading(false);
       }catch(error){
        console.log(error);
        setIsLoading(false);
       }
    }


    return(
        <>
        <ResultContext.Provider value={{ results , getResults , isLoading , searchTerm , setSearchTerm , searchEngine , API_KEY}}>
            {children}
        </ResultContext.Provider>
        </>
    )
}
export default ResultContextProvider


export const useContextResult = () => useContext(ResultContext)