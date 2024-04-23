/**
 * Dette tilsvarer en prosjekt .
 * Denne siden skal vise et prosjekt.
 * Eksempel:
 * - Kopier denne filen og lag en ny mappe i app/prosjekter med navnet på prosjektet. Deretter limer du inn denne filen. Da vil du få en ny side på /prosjekter/navn-på-prosjektet
 * - Endre tittelen på prosjektet
 * - Endre ingressen
 * - Endre bildet
 * - Legg til flere komponenter som viser prosjektet ditt. Disse kan være helt nye komponenter, eller du kan kopiere eksisterende komponenter fra components mappen.
 */
import { ProjectHero } from '@/components/ProjectHero';
import snake_menu from '../../../public/rectangle.jpg';
import { TextBlock } from '@/components/TextBlock';
import { Photostrip } from '@/components/Photostrip';

const images = [
  '/snake_menu.jpg',
  '/snake_rules.jpg',
  '/snake_debug_mode.jpg',
  '/snake_play.jpg',
  '/snake_game_over.jpg'
];

export default async function Project() {
  return (
    <div className='ml-8 sm:ml-10 flex flex-col gap-16 mb-32'>
      <ProjectHero
        title='Snake'
        description='En versjon av det klassiske spillet snake, bygd som en ukesoppgave under introduksjon til programmering ved UiB.'
        image={snake_menu}
      />
      <Photostrip images={images} />

      <TextBlock
        title='Overskrift'
        description='Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for.'
      />

        <p>
          Source Code: {' '}
          <a
            className='font-bold hover:underline'
            href='https://github.com/FridaHaars/inf100/tree/main/labs/snake'
          >
            Snake lab, UiB
          </a>
        </p>


    </div>
  );
}
