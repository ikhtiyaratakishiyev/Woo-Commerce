import React from 'react'
import '../../Styles/Nav.scss'


import logo from '../../Assets/Icons/logo.svg'
import search from '../../Assets/Icons/search.svg'

const Nav = () => {
  return (
    < >
        <nav>
           <div className='nav-container'>
            
            <div className="nav-left">
            <img src={logo} alt="" />
            <ul className='nav-items'>
                        <li className='nav-li'>Sell</li>
                        <li className='nav-li'>Marketplace</li>
                        <li className='nav-li'>Community</li>
                        <li className='nav-li'>Develop</li>
                        <li className='nav-li'>Resources</li>

                    </ul>
            </div>
            <div className="nav-right">
                    <button>Log In</button>
                    <button>Get Started</button>
                    <span>
                    <img src={search} alt="" />
                    </span>
                    
            </div>
            
            <div/>
                   
               
                   
                 
                  
               
               
             </div>      
        </nav>
      
    </>
  )
}

export default Nav
