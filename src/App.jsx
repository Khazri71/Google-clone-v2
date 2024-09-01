import { useState } from 'react'
import './App.css'
 import { Navbar , Footer , RoutesApp , Search  } from './components'



function App() {
  
  const [darkTheme , setDarkTheme] = useState(false);
   
  return (
    <>
  <div className={darkTheme ? 'dark' : 'light'}> 
     <div className='bg-gray-100 text-slate-950  dark:bg-slate-950 dark:text-slate-300 min-h-screen  '>
      <Navbar darkTheme={darkTheme}  setDarkTheme= {setDarkTheme}/>
     
      <RoutesApp/>
      <Footer/>
      </div>
  </div>
    
    </>
  )
}

export default App
