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
    <div className='flex gap-5 flex-col sm:flex-row'>
      <Image
        alt='Portrett'
        src='/profilBilde.jpg'
        className='rounded-full'
        width={278}
        height={278}
      />
      <div className='flex flex-col gap-5 my-auto text-center sm:text-left'>
        <h1 style={{ color: 'darkgoldenrod' }} className='text-secondary-700 text-4xl sm:text-6xl'>Velkommen</h1>
        <p>
          Jeg heter Frida Angen Hårstad.
          Du kan kontakte med via epost: {' '}
          <a
            className='font-bold hover:underline'
            href='mailto:fridaharstad@gmail.com'
          >
            fridaharstad@gmail.com
          </a>
            ,
            eller 
            {' '}
          <a
            className='font-bold hover:underline'
            href='www.linkedin.com/in/FridaAH'
          >
            LinkedIn
          </a>
          . 
        </p>
      </div>
    </div>
  );
}
