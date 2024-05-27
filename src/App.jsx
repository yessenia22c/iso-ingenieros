import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BannerComponent } from './components/BannerComponent/BannerComponent'
import { NavComponent } from './components/NavComponent/NavComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='fixed w-full flex justify-center bg-red-800'>
      <NavComponent></NavComponent>
    </header>
    <main>
      <section >
        <BannerComponent></BannerComponent>
      </section>
      <section className='flex justify-center'>
        <div className='flex w-[1000px]  gap-4 '>
          <img src={reactLogo} alt="react logo" className='w-24'/>
          <img src={viteLogo} alt="vite logo" className='w-24'/>
        </div>
      </section>

    </main>
    </>
  )
}

export default App
