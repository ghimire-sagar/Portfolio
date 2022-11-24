import {useState} from 'react'
import {close, logo, menu } from './assets';
import styles from './style';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="bg-primarynight w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} fixed z-[100] top-0 px-8 md:px-16 bg-primarynight opacity-90`}>
          <nav className='w-full flex py-3 justify-between items-center navbar'>
            <img src={logo} alt="logo" className='w-[164px] h-[48px]'/>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-dimWhitenight'>
              <CustomLink  to="/" className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-white`}>Home</CustomLink>
              <CustomLink  to="/WorksLists" className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-white`}>Works</CustomLink>
              <CustomLink  to="/AboutMe" className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-white`}>About</CustomLink>
              <CustomLink  to="/HireMe" className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 hover:text-white`}>Hire Me</CustomLink>
            </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img 
                      src={toggle ? close : menu}
                      alt="menu"
                      className='w-[28px] h-[28px] object-contain'
                      onClick={() => setToggle((prev) => !prev)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-secondarynight absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    <CustomLink  to="/" className={`font-poppins font-normal cursor-pointer text-[16px] mb-5 text-white`}>Home</CustomLink>
                    <CustomLink  to="/WorksLists" className={`font-poppins font-normal cursor-pointer text-[16px] mb-5 text-white`}>Works</CustomLink>
                    <CustomLink  to="/AboutMe" className={`font-poppins font-normal cursor-pointer text-[16px] mb-5 text-white`}>About</CustomLink>
                    <CustomLink  to="/HireMe" className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white`}>Hire Me!</CustomLink>
                    </ul> 
                </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname} )
  return (
    <li className={isActive ? "active" : "" }>
      <Link to={to} {...props} >
        {children}
      </Link>  
    </li>
  )
}

export default Navbar
