'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import headerImg from '../public/header.jpg';

const HeroSection = () => {
  return (
    <section id='pocetna' className='w-full'>
      <div className='w-screen h-[50vh] relative '>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10' />
        <Image className='absolute z-1' src={headerImg} alt='Bondi Dekor' layout='fill' objectFit='cover'></Image>
        <div className='absolute z-10 top-0 right-0 w-[45%] h-full text-white'>
          <div className='h-full flex flex-col justify-center items-start gap-3 pr-2 pt-2'>
            <h3 className='text-[1.15rem] font-bold'>Iskustvo i Kvalitet</h3>
            <p className='text-[.9rem] lg:text-[1rem] font-light'>
              Sa višegodišnjim iskustvom u građevinskoj industriji, posvećeni smo pružanju vrhunskih usluga koje kombinuju inovaciju, kvalitet i efikasnost.
            </p>
            <Link to='radovi' spy={true} smooth={true} duration={500}>
              <button className='bg-teal-500 px-2 py-1 lg:px-4 lg:py-2 rounded-md border-none'>Naši radovi</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* <div className='md:mt-2 md:w-3/5'>
  <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl'>Hi, I&#39;m Hosna!</h1>
  <p className='text-lg mt-4 mb-6 md:text-2xl'>
    I&#39;m a <span className='font-semibold text-teal-600'>Software Engineer </span>
    based in Los Angeles, CA. Working towards creating software that makes life easier and more meaningful.
  </p>
  <Link
    to='projekti'
    className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer'
    activeClass='active'
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}>
    Projekti
  </Link>
</div> */
}
{
  /* <div className='flex flex-row items-center text-center justify-center '>
  <Link to='o-nama' activeClass='active' spy={true} smooth={true} offset={-100} duration={500}>
    <HiArrowDown size={35} className='animate-bounce hover:cursor-pointer' />
  </Link>
</div> */
}
{
  /* <div className='md:mt-2 md:w-1/2'>
  <Image src='/hero.jpeg' alt='' width={325} height={325} className='rounded-full shadow-2xl' />
</div> */
}
