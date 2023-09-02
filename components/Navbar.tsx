'use client'; // This is a client component 👈🏽
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Početna',
    page: 'pocetna',
  },
  {
    label: 'O Nama',
    page: 'o-nama',
  },
  {
    label: 'Usluge',
    page: 'usluge',
  },
  {
    label: 'Radovi',
    page: 'radovi',
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full mx-auto px-4 lg:px-10'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link to='pocetna'>
              <div className='container flex items-center space-x-2'>
                <h2 className='text-2xl font-bold'>Bondi Dekor</h2>
              </div>
            </Link>
            <div className='md:hidden'>
              <button className='p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={'block lg:inline-block text-neutral-900  hover:text-neutral-500 hover:cursor-pointer'}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}>
                    {item.label}
                  </Link>
                );
              })}
              <div>
                <div className='flex flex-row items-center justify-start gap-3'>
                  <a href='https://www.facebook.com/molersko.knauferski?mibextid=avESrC' rel='noreferrer' target='_blank'>
                    <AiOutlineFacebook className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700' size={25} />
                  </a>
                  <a href='https://www.instagram.com/bondidekor_pn/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' rel='noreferrer' target='_blank'>
                    <AiOutlineInstagram className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700' size={25} />
                  </a>
                </div>
              </div>

              {/* {currentTheme === 'dark' ? (
                <button onClick={() => setTheme('light')} className='bg-slate-100 p-2 rounded-xl'>
                  <RiSunLine size={25} color='black' />
                </button>
              ) : (
                <button onClick={() => setTheme('dark')} className='bg-slate-100 p-2 rounded-xl'>
                  <RiMoonFill size={25} />
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
