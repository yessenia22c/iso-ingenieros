
export const NavComponent = () => {
    
  return (
    <>
    <nav className='bg-red-800'>
               
        <ul className='max-[499px]:hidden  flex p-2 gap-12 lx:w-[1000px] items-center max-[620px]:text-[14px] max-[620px]:gap-10'>
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
    
        
    </>
    
    
  )
}
