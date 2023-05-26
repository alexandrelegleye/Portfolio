// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close, french_flag, uk_flag} from '../assets';
import { useSetRecoilState } from 'recoil';
import { choosenLangstate } from '../Recoil/Atomes';

const Navbar = () => {
  const [active, setActive] =useState('');
  const [toggle, setToggle] = useState(false);
  const setLang = useSetRecoilState(choosenLangstate)

  
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0,0);
          }}
        >

          <img
            src={french_flag}
            alt='french flag'
            className='w-5'
            onClick={() => setLang({lang:'fr'})}
          />
          <img src={uk_flag}
            alt='uk flag'
            className='w-5'
            onClick={() => setLang({lang:'en'})}
          />

      
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p
            className='text-white text-[18px] font-bold cursor-pointer flex flex-wrap'
          >
            Alexandre &nbsp;
            <span className='sm:flex hidden'>
            | Développeur Full-Stack
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer
            `}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div
          className='sm:hidden flex flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden'
              : 'flex'}
      p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-white'
                      : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]
            `}
                  onClick={()=> {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar