import React from 'react'

export const NavComponent = () => {
  return (
    <nav className='bg-red-800 '>
        <ul className=' flex p-4 gap-12 w-[1000px] items-center'>
            <li>
                <img className='w-[90px]' src="./src/assets/ISO-INGENIEROS-LOGO.svg" alt="" />
            </li>
            <li>
                <a href='#' className='text-white'>Inicio</a>
            </li>
            <li>
                <a href='#' className='text-white'>Acerca de</a>
            </li>
            <li>
                <a href='#' className='text-white'>Cursos</a>
            </li>
            <li>
                <a href='#' className='text-white'>Contactos</a>
            </li>
        </ul>
    </nav>
  )
}
