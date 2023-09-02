import React from 'react';
import Image from 'next/image';
import imgOne from '../public/Img1.jpeg';
import imgTwo from '../public/Img2.jpeg';
import imgThree from '../public/Img3.jpeg';
import imgFour from '../public/Img4.jpeg';
import imgFive from '../public/Img5.jpeg';
import imgSix from '../public/Img6.jpeg';

const skills = [
  {
    skill: 'Mašinsko gletovanje',
    description:
      'Ako želite da vaši zidovi i plafoni izgledaju savršeno glatko i ravno, onda je mašinsko gletovanje pravi izbor za vas. Mašinsko gletovanje je proces nanošenja glet mase na zidove i plafone pomoću specijalne mašine .Prednosti mašinskog gletovanja su mnogo brže i kvalitetnije obavljen posao a i ušteda na materijalu.',
    img: imgOne,
  },
  {
    skill: 'Mašinsko šmirglanje',
    description:
      'Šmirglanje izvodimo mašinski i to isključivo uz pomoc specijalnih reflektora i procenat prašine je minimalan jer skoro svu prašinu usisivač prikuplja automatski.',
    img: imgTwo,
  },
  {
    skill: 'Mašinsko krecenje',
    description:
      'Krečenje je proces nanošenja boje na zidove. Nanošenje se može vršiti četkom, valjkom ili kompresorom u zavisnosti od vrste boje i tehnike koja se radi. Posedujemo i mašine za krecenje koje mogu nanositi lak,akrilne boje, temeljne prelaze i emajl.',
    img: imgThree,
  },
  {
    skill: 'Gipsarski radovi',
    description:
      'Pregradni zidovi od gipskaton ploča su idealno rešenje za brzo, jeftino i kvalitetno pregradjivanje vaših prostorija. Bilo da se radi o stambenom, poslovnom ili nekom drugom prostoru, pregradni zidovi uvek mogu da nadju primenu. Spušteni plafoni od gips ploča se zbog svojih prednosti primenjuju u novogradnji i kod obnove postojećih stambenih i poslovnih prostora. Idealno su rešenje za oblaganje neravnih i oštećenih plafonskih površina i za smanjenje visine visokih prostorija zbog uštede energije grejanja.',
    img: imgFour,
  },
  {
    skill: 'Keramicarski radovi',
    description:
      'Keramicarski radovi zahtevaju stručnost i preciznost koju vam mi nudimo. Naše keramicarske usluge su vrhunskog kvaliteta i na naše radove vam dajemo garanciju.',
    img: imgFive,
  },
  {
    skill: 'Mašinsko malterisanje',
    description:
      'Naš stručni tim majstora poseduje bogato iskustvo i ekspertizu u korišćenju najnovijih tehnika i materijala za mašinsko malterisanje, pružajući vam brzo, efikasno i precizno izvođenje. Bez obzira da li je u pitanju unutrašnje ili spoljašnje malterisanje, naši majstori će se pobrinuti da dobijete glatke, ravne i profesionalno izvedene površine',
    img: imgSix,
  },
];

const AboutSection = () => {
  return (
    <section id='usluge' className=''>
      <div className='py-8 px-4 max-w-[1240px] mx-auto'>
        <h2 className='text-center font-bold text-3xl mb-4'>
          Naše usluge
          <hr className='w-6 h-1 mx-auto my-2 mb-4 bg-teal-500 border-0 rounded'></hr>
        </h2>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='rounded-md bg-gray-200 shadow-md'>
                <Image src={skill.img} alt='Masinsko gletovanje' className='w-full h-[250px] object-cover'></Image>
                <h3 className='text-center my-4 font-bold text-2xl'>
                  {skill.skill}
                  {/* <hr className='w-6 h-[2px] mx-auto my-2 bg-teal-500 border-0 rounded'></hr> */}
                </h3>
                <p className='text-center px-8 pb-4'>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
