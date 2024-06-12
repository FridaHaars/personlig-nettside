/**
 * Denne komponenten rendrer på hovedsiden.
 * Den skal vise en forhåndsvisning av prosjekter.
 * Dette vises tydelig dersom du har deployet appen.
 * Eksempel:
 * - Du kan legge til flere prosjekter i latestProjects listen. Husk a siden den lenker til må også lages.
 */
import Link from 'next/link';
import Image from 'next/image';

// Her definerer hvilke prosjekter vi vil vise nedenfor.
const latestProjects = [
  {
    title: 'Prosjekter ved UiB',
    description:
      'Prosjekter utført ved Universitetet i Bergen.',
    image: '/snake_menu.jpg',
    href: '/prosjekter/uib',
  },
  {
    title: 'Prosjekter ved KiB',
    description:
      'Prosjekter utført ved Kunstskolen i Bergen.',
    image: '/space.jpg',
    href: '/prosjekter/kib',
  },
];

export function LatestProjects() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <h2 className='text-xl font-bold text-orange-900 w-full col-span-full'>Siste prosjekter</h2>
        {latestProjects.map((project) => (
            // Vi går over alle prosjektene vi har definert over og lager en ProjectPreview for hvert av dem.
            // Når du looper over noe i React må du gi det en unik key. Her bruker vi tittelen som key.
            // Dette er slik at React har kontroll på hvilke elementer som er endret, og ikke trenger å re-rendre alle.
          <ProjectPreview key={project.title} {...project} />
        ))}
      </div>

      <Link
        className='text-orange-700 font-bold hover:underline'
        href='/prosjekter'
      >
        Se alle mine prosjekter
      </Link>
    </div>
  );
}

function ProjectPreview({ title, description, image, href }) {
  return (
    <a href={href} className='flex flex-col gap-4 w-full'>
      <div className='relative w-full' style={{ paddingBottom: '85%' }}>
        <Image
          alt='Preview'
          src={image}
          layout='fill'
          objectFit='cover'
          className='absolute inset-0'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg'>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

