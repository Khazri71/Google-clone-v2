import { NavLink } from "react-router-dom";


const LinksApp = () => {
    const links = [
        {url : "/search" , text: "All" },
        {url : "/news" , text: "News"},
        {url : "/images" , text: "Images"},
        {url : "/videos" , text: "Videos"},
      ];
  return (
    <>
    <div className="flex justify-center  sm:justify-start space-x-4  px-10  items-center ">
    {links.map(({url , text}, index)=> (
           <NavLink  key={index} to={url}  
                className = {({isActive})=>  isActive 
                ?  "text-slate-950  mb-0 border-b-2 border-slate-950  dark:border-slate-300 dark:text-slate-50  "
                : "text-slate-500 dark:text-slate-50 mb-0  " } >
               {text}
           </NavLink>
      ))}
    </div>
    </>
  )
}

export default LinksApp