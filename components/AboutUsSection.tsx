import React from 'react';

const AboutUsSection = () => {
  return (
    <section id='radovi' className='bg-gray-200'>
      <div className='py-8 px-4 max-w-[1240px] mx-auto'>
        <h2 className='text-center font-bold text-3xl mb-4'>
          O Nama
          <hr className='w-6 h-1 mx-auto my-2 mb-4 bg-teal-500 border-0 rounded'></hr>
        </h2>
        <p className='text-center'>
          Preduzece &apos;Bondi-Dekor&apos; zvanično postoji od 2016.godine i od tad stremimo da svojim klijentima isporučimo ugovoreno i iznad njihovih
          očekivanja, u najkraćim mogućim rokovima i pri povoljnim uslovima, te uspostavimo sa njima dugoročnu saradnju i dobre poslovne odnose
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
