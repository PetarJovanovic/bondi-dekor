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
