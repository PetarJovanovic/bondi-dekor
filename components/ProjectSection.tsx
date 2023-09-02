import React from 'react';
import Image from 'next/image';
import ImgOne from '../public/R1.jpeg';
import ImgTwo from '../public/R2.jpeg';
import ImgThree from '../public/R3.jpeg';
import ImgFour from '../public/R4.jpeg';
import ImgFive from '../public/R5.jpeg';
import ImgSix from '../public/R6.jpeg';
import ImgSeven from '../public/R7.jpeg';
import ImgEight from '../public/R8.jpeg';

const projects = [
  { img: ImgOne },
  { img: ImgTwo },
  { img: ImgThree },
  { img: ImgFour },
  { img: ImgFive },
  { img: ImgSix },
  { img: ImgSeven },
  { img: ImgEight },
];

const ProjectsSection = () => {
  return (
    <section id='radovi' className='bg-gray-200'>
      <div className='py-8 px-4 max-w-[1240px] mx-auto'>
        <h2 className='text-center font-bold text-3xl mb-4'>
          Naši radovi
          <hr className='w-6 h-1 mx-auto my-2 mb-4 bg-teal-500 border-0 rounded'></hr>
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <Image src={project.img} alt='Radovi' className='h-[250px] w-full rounded-md object-cover' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
