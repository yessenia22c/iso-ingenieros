import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BannerComponent } from './components/BannerComponent/BannerComponent'
import { NavComponent } from './components/NavComponent/NavComponent'
import { AsideComponent } from './components/AsideComponent/AsideComponent'
import './App.css'

function App() {
  
  const [isHidden, setIsHidden] = useState(false);
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth <= 500);
  useEffect(() => {
    const handleResize = () => {
        setIsMinWidth(window.innerWidth <= 500);
        if(window.innerWidth >= 500) setIsHidden(false);
    }
    window.addEventListener('resize', handleResize);
    return () =>{ 
      window.removeEventListener('resize', handleResize)
      
    };
    
    }, []);

  const abirSidebar = () => {   
    setIsHidden(!isHidden);
    AsideComponent(isHidden);
    
  }
  return (
    <>
    <div className=' fixed z-20 sm:z-20 w-full flex justify-center bg-red-800'>
      <NavComponent></NavComponent>
      <ul className='flex w-full justify-end min-[500px]:hidden '>
        <li >
          <button onClick={ abirSidebar }  className="justify-end text-white font-medium rounded-lg text-sm px-5 py-2.5" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>
        </li>
      </ul>
    </div>
    <AsideComponent isHidden={isHidden} isMinWidth={isMinWidth} ></AsideComponent>
    <main>
      <section >
        <BannerComponent></BannerComponent>
      </section>
      <section className='flex justify-center'>
        <div className='flex w-[1000px]  gap-4 m-3 '>
          <img src={reactLogo} alt="react logo" className='w-24'/>
          <img src={viteLogo} alt="vite logo" className='w-24'/>
        </div>
      </section>

    </main>
    </>
  )
}

export default App
