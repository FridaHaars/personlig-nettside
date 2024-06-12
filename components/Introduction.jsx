/**
 * Denne komponenten rendrer et profilbilde og en tekst på hovedsiden.
 * Eksempel:
 * - Du kan endre profilbilde. Husk å legge det nye bilde ditt i public mappen.
 * - Endre 'Velkommen' teksten
 * - Oppdater navnet og eposten til din egen.
 */

import Image from 'next/image';


export function Introduction() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='bg-blue-50 flex gap-10 flex-col sm:flex-row'>
        <Image
          alt='Portrett'
          src='/profilBilde.jpg'
          className='rounded-full'
          width={300}
          height={278}
        />
        <div className='flex flex-col gap-6 my-auto text-center sm:text-left'>
          <h1 className='text-orange-900 text-4xl sm:text-6xl'>Frida Angen Hårstad</h1>
          <p>
            Epost: {' '}
            <a
              className='font-bold hover:underline'
              href='mailto:fridaharstad@gmail.com'
            >
              fridaharstad@gmail.com
            </a>
              <br/>LinkedIn: {' '}
            <a
              className='font-bold hover:underline'
              href='https://linkedin.com/in/FridaAH'
            >
              linkedin.com/in/FridaAH
            </a>
            <br/>GitHub: {' '}
            <a
              className='font-bold hover:underline'
              href='https://github.com/FridaHaars'
            >
              github.com/FridaHaars
            </a>
          </p>
        </div>
      </div>
        <h2 className='text-4xl text-orange-900'><br /> Velkommen!</h2>
        <p className='text-gray-500'>
          Denne nettsiden er et hobbyprosjekt som jeg bruker for å tilegne meg
          kunnskap innen webutvikling og -design, her med hjelp av React/NextJS 
          og TailwindCSS. <br />
          <i>
            <br/ > Nettsidens innhold og design oppdateres jevnlig...
          </i>
          &#128187; <br />
          <br/>Kildekode: {' '}
            <a
              className='font-bold hover:underline'
              href='https://github.com/FridaHaars/personlig-nettside'
            >
              GitHub
            </a>
        </p>
      </div>
    
  );
}
