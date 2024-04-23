/**
 * Denne komponenten renderer på CV siden.
 * Komponenten består av en liste av type objekter som tilsvarer med det som vises på siden.
 * Eksempel:
 * - Utvide sections med flere erfaringer eller utdanning
 * - Utvide sections med 'Ferdigheter'
 */
import { CVSection } from '@/components/CVSection';

const sections = [
  {
    title: 'Arbeidserfaring',
    sectionTitle: 'Assent AS | Brukerstyrt Personlig Assistent [BPA]',
    period: '2018 - pågående',
    description:
      'Pleieassistent hos én bruker -- døgnkontinuerlig skiftarbeid og turnusarbeid.',
  },
  {
    sectionTitle: 'HP-Sønn Mat AS | Butikkmedarbeider',
    period: '2016 - 2019',
    description:
      'Butikkmedarbeider i Extra Håkonsgaten -- deltidsarbeid ved siden av studier. Kassearbeid, kundebehandling og varehåndtering.',
  },
  {
    title: 'Utdanning',
    sectionTitle: 'Universitetet i Bergen | Informatikk: Datasikkerhet',
    period: 'Aug 2021 - Jun 2024',
    description:
      'Et studie hvor jeg har lært grunnleggende datasikkerhet og programmering. Nøkkelferdigheter innebærer Python/Java, kryptografi, database, OOP, m.m.',
  },
  {
    sectionTitle: 'Universitetet i Bergen | Årsstudium: Kunsthistorie',
    period: 'Aug 2018 - Jun 2019',
    description:
      'Et studie av det grunnleggende innen kunsthistorie fra den gresk/romerske antikken til i dag, deriblant arkitektur, billedkunst, og analyse av visuelle uttrykk.',
  },
  {
    sectionTitle: 'Kunstskolen i Bergen | 2-åring fagskoleutdanning innen visuelle fag',
    period: 'Aug 2015 - Mai 2024',
    description:
      'Utøvende kunst over to år, inkludert kurs innen fargelære, videokunst, performance, modellering, visuelle uttrykk, billedkunst, kunsthistorie, m.m.',
  },
];

export default function CV() {
  return (
    <div className='container mx-auto mt-32 px-8 gap-16 flex flex-col'>
      {sections.map((section) => {
        return <CVSection {...section} key={section.title} />;
      })}
    </div>
  );
}
