import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=''>
      <div className='py-4 px-4 max-w-[1240px] mx-auto flex justify-between'>
        <div className='text-neutral-500'>© 2023 Bondi Dekor</div>
        <div className='text-neutral-500 flex flex-col items-start'>
          <div>
            Kontakt
            <hr className='w-20 h-[1px] my-2 bg-neutral-500 border-0 rounded'></hr>
          </div>
          <div>
            <p>Adresa: Dalmatinska 19, Paraćin</p>
            <p>E-mail: bondidekor@gmail.com</p>
            <p>Telefon: +381 (60) 55 71 104</p>
          </div>
        </div>
        <div className='text-neutral-500 flex flex-col items-start'>
          <div className=''>
            Socijalne Mreže
            <hr className='w-20 h-[1px] my-2 bg-neutral-500 border-0 rounded'></hr>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
            <a href='https://www.facebook.com/molersko.knauferski?mibextid=avESrC' rel='noreferrer' target='_blank'>
              <AiOutlineFacebook className='cursor-pointer text-neutral-500' size={30} />
            </a>
            <a href='https://www.instagram.com/bondidekor_pn/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' rel='noreferrer' target='_blank'>
              <AiOutlineInstagram className='cursor-pointer text-neutral-500' size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
