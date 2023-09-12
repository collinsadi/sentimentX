import React from 'react'
import "./Header.css"
import {FaSun,FaMoon} from "react-icons/fa"


export const Header = ({toggleMode,darkmode}) => {
  return (
      <header>
          
          <div className="header-inner">
              <div className="nav-logo">
                  <h3>Sentiment<span>X</span> </h3>
              </div>

        <div className="mode-toggle">
          {!darkmode && (
            <FaSun onClick={toggleMode} />
          )}
          
          {darkmode && (
            <FaMoon onClick={toggleMode} />
            )}
          
        </div>
        
          </div>

     
          
    </header>
  )
}
