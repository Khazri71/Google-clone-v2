
import {Link} from 'react-router-dom'
import Search from './Search'


const Navbar = ({darkTheme , setDarkTheme}) => {
    return(
        <>
        <div className="p-5 pb-0 border-b border-gray-300 dark:border-gray-200 flex justify-center flex-wrap sm:justify-between">
            <div className='flex justify-between  items-center space-x-5  w-screen'>
                <Link to= '/'>
                <img src="src/assets/logo-google.png" alt="" srcset=""  className='w-24 h-full py-1' />
                </Link>

               
                
                <button type='button' className='p-1  bg-white  border rounded-full hover:shadow-lg text-xl dark:text-black' 
                onClick={()=>{setDarkTheme(!darkTheme)}}
                >
                     {darkTheme ? "🌙" : "💡"}
                </button>
               
            </div>


            <Search/>
        </div>
        </>
    )
}
export default Navbar