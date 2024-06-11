/**
 * Dette tilsvarer en prosjekt .
 * Denne siden skal vise et prosjekt.
 * Eksempel:
 * - Kopier denne filen og lag en ny mappe i app/prosjekter med navnet på prosjektet. 
 *   Deretter limer du inn denne filen. Da vil du få en ny side på /prosjekter/navn-på-prosjektet
 * - Endre tittelen på prosjektet
 * - Endre ingressen
 * - Endre bildet
 * - Legg til flere komponenter som viser prosjektet ditt. Disse kan være helt nye komponenter, 
 *   eller du kan kopiere eksisterende komponenter fra components mappen.
 */
import { ProjectHero } from '@/components/ProjectHero';
import backdrop from '../../../public/prepared_statements.jpg';
import { TextBlock } from '@/components/TextBlock';
import { Photostrip } from '@/components/Photostrip';

const images = [
  '/snake_menu.jpg',
  '/snake_rules.jpg',
  '/snake_debug_mode.jpg',
  '/snake_play.jpg',
  '/snake_game_over.jpg',
  '/headbook_loggedin.jpg',
  '/blob_menu.jpg',
  '/blob_gameplay.jpg'
];

export default async function Project() {
  return (
    <div className='mr-auto sm:ml-10 flex flex-col gap-16 mb-32 text-right'>
      <ProjectHero
        title='Universitetet i Bergen'
        description='Et utvalg av prosjekter og programmeringsoppgaver fra UiB.'
        image={backdrop}
      />
      <Photostrip images={images} />

      <TextBlock
        title='<proj>'
        description='<desc>'
      />

        <p>
          Kildekode for de forskjellige prosjektene deles ved forespørsel.
        </p>


    </div>
  );
}
