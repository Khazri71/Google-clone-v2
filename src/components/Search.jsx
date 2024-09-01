import { useDebounce } from "use-debounce";
import LinksApp from "./LinksApp";
import { useEffect, useState } from "react";
import { useContextResult } from "../contexts/ResultContextProvider";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";




const Search = () => {

  const [text , setText]  = useState("Hancel and Gritel");
  const [debouncedValue] = useDebounce(text , 300);
  const {setSearchTerm} = useContextResult();

  useEffect(()=>{
    if(debouncedValue) setSearchTerm(debouncedValue)
  },[debouncedValue])
  

  return (
    <>
    <div className="relative">

 
    <div className="flex flex-col   ml-[130px]  -mt-9 ">
      <input 
      value={text}
      type="text" 
      name="searh" 
      className="w-[250px]   sm:w-[390px]    md:w-[500px]  lg:w-[900px] h-9  outline-none border-slate-600 shadow hover:shadow-lg p-5 pl-[45px] rounded-full mb-5 -mt-2 text-slate-700 dark:text-slate-950" 
      onChange={(e)=>setText(e.target.value)
     
      }
     
     />
     
     {text &&
 
      <button type="button"  className="  absolute -top-8.5 right-6  text-xl    text-slate-600 dark:text-slate-950 font-medium   " 
      onClick={()=> setText("")}
     
      >
        <IoClose />
     </button> 

   
       
      }
      {text &&  
      <p  >
         <IoMdSearch className="absolute -top-8  ml-4 mr-14  text-lg    text-slate-500 dark:text-slate-950  font-semibold    " />
      </p>
    
     
   }

     
  
    <LinksApp/>
    </div>
    </div>
    </>
  )
}

export default Search