import { useContext } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import bg from './assests/bg.png'
import Images from './components/Images'
import Main from './components/Main'
import LowerMain from './components/LowerMain'
import PixabayContext from './context/PixabayContext'
import Footer from './components/Footer'
 

const App=()=>{
  
 const { fetchImageByImageType } = useContext(PixabayContext);
  return (
    <>
    <div className='main-content'>
      <img src={bg} alt="background" className='bg-image' />
      <div className="box"></div>
      <div className='header'>
        <div className='logo-left'>
        <svg viewBox="0 0 120 33" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeMiterlimit="2" className="logo--JVgVN dark--W2-N1"><path d="M9.059 7.279c4.417-.1 8.564 3.492 9.03 7.897.56 3.872-1.72 7.893-5.287 9.464-2.163 1.073-4.604.743-6.93.798H3.599v7.28H.002c.007-5.617-.014-11.234.01-16.85.12-4.186 3.545-7.932 7.682-8.49.45-.066.91-.1 1.365-.1v.001zm0 14.56c2.596.064 5.03-1.96 5.42-4.533.517-2.588-1.135-5.37-3.66-6.146-2.438-.866-5.372.272-6.564 2.575-.922 1.576-.594 3.434-.656 5.167v2.938h5.46v-.001zM19.826 7.191h3.557v18.16h-3.556V7.19l-.001.001zm14.25 11.42h.13l5.057 6.745h4.41l-6.874-9.34L42.895 7.2h-4.41l-4.28 6.225h-.128l-4.28-6.224h-4.41l6.095 8.818-6.873 9.336h4.41l5.057-6.744z" fill="currentColor" fillRule="nonzero"></path><path d="M51.735 7.191c3.603-.07 7.06 2.29 8.394 5.624.694 1.55.683 3.264.66 4.926v7.61c-3.21-.01-6.422.022-9.636-.018-3.688-.18-7.065-2.87-8.12-6.404-.97-3.07-.166-6.635 2.116-8.932 1.703-1.763 4.123-2.827 6.583-2.803l.003-.003zm5.46 14.56c-.015-2.02.033-4.04-.028-6.058-.212-2.705-2.718-4.972-5.432-4.9-2.582-.064-5.015 1.937-5.42 4.492-.472 2.454.937 5.126 3.276 6.04 1.442.628 3.035.367 4.56.423h3.045l-.001.003zM71.628 7.279c4.262-.104 8.245 3.25 8.924 7.445.77 3.98-1.476 8.278-5.182 9.916-3.62 1.71-8.275.607-10.764-2.523-1.542-1.817-2.208-4.235-2.077-6.59V0h3.6v7.28h5.5l-.001-.001zm0 14.56c2.733.073 5.23-2.223 5.433-4.942.34-2.702-1.662-5.42-4.337-5.912-1.48-.204-2.982-.065-4.472-.11h-2.124c.022 2.054-.05 4.11.042 6.158.286 2.71 2.735 4.856 5.46 4.8l-.002.006zM91.13 7.191c3.604-.07 7.06 2.29 8.394 5.624.696 1.55.686 3.264.664 4.926v7.61c-3.21-.01-6.424.022-9.636-.018-3.69-.18-7.067-2.87-8.124-6.404-.97-3.07-.165-6.635 2.117-8.932 1.702-1.762 4.122-2.826 6.582-2.803l.003-.003zm5.46 14.56c-.016-2.02.032-4.04-.027-6.058-.208-2.705-2.715-4.972-5.43-4.9-2.58-.064-5.014 1.937-5.417 4.492-.474 2.454.936 5.126 3.274 6.04 1.44.628 3.033.367 4.556.423h3.045l-.001.003zm23.407-14.517c-.007 5.605.015 11.208-.01 16.81-.13 4.41-3.922 8.374-8.345 8.604-.84.044-1.682.016-2.523.022v-3.598c1.536-.007 3.178.15 4.537-.72 1.7-.955 2.78-2.878 2.743-4.822-3.19 2.574-8.136 2.44-11.238-.214-2.262-1.825-3.497-4.76-3.323-7.65v-8.43h3.6c.016 3.205-.034 6.413.026 9.617.195 2.587 2.46 4.797 5.055 4.926 2.674.276 5.306-1.74 5.77-4.383.203-1.48.067-2.984.108-4.476V7.239h3.6v-.005z" fill="currentColor" fillRule="nonzero"></path></svg>
      </div>
     <div className="header-right">
            <span className="explore-menu" onClick={() => fetchImageByImageType("all")}>
              Explore <FontAwesomeIcon icon={faCircleChevronDown} />
            </span>
            <span className="alert">
              <FontAwesomeIcon icon={faBell} className="bell-icon" />
            </span>
          </div>
        </div>
      <div className="middle-content">
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <Main/>
       <LowerMain/>
        
      </div>
      </div>
      <div><Images/></div>
     <div className='footer-SECTION'>
      <Footer />
     </div>
    </>
  )
}

export default App
