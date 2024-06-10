/**
 * Denne komponenten rendrer et profilbilde og en tekst på hovedsiden.
 * Eksempel:
 * - Du kan endre profilbilde. Husk å legge det nye bilde ditt i public mappen.
 * - Endre 'Velkommen' teksten
 * - Oppdater navnet og eposten til din egen.
 */

import Image from 'next/image';
import './style.css';

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
        <h1 className='text-secondary-700 text-4xl sm:text-6xl'>Frida Angen Hårstad</h1>
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
            href='www.linkedin.com/in/FridaAH'
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
  );
}
