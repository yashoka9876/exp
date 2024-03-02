import React, { useState } from 'react'
import Headers from './Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme=()=>{
        setIsDarkTheme(prevTheme=>!prevTheme);
    }
  return <div style={{background:isDarkTheme?'#333':undefined}}>
  <Headers toggleTheme={toggleTheme}/>
  <main>
    <h1>hi this one </h1>
    <Outlet/>
  </main>
  </div>
}

export default Root