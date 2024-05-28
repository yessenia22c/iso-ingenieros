import React from 'react'

export const AsideComponent = ({isHidden}) => {
    console.log(isHidden +' DESE ASIDE');
    
        if(isHidden){
            return (
               
             <aside className=' sm:flex flex-col w-64 bg-gray-800 text-white top-0 z-30'>
                <ul className='flex flex-col gap-4 p-4'>
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
             </aside>

        
            )
        }
    
}
