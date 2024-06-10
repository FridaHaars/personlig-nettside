import Image from "next/image";
import './Photostrip.css';

export function Photostrip({ images }) {
  return (
    <div className="container">
      {images.map((image, index) => (
        <div key={index} className="imageWrapper">
          <Image
            alt="photostrip"
            src={image}
            layout="responsive"
            width={405}
            height={208}
            className="photostrip-image"
          />
        </div>
      ))}
    </div>
  );
}


/**
import Image from "next/image";

/**
export function Photostrip({ images }) {
  return (
    <div className="flex snap-x snap-mandatory justify-start gap-8 overflow-x-auto">
      {images.map((image, index) => {
        // Når vi looper over lister, kan vi alle hente ut indeksen til elementet vi er på med en variabel som heter index
        // Vi bruker denne til å gi hvert bilde en unik key, slik at React vet hvilke elementer som er endret.
        return (
          <Image
            alt='photostrip'
            key={index}
            src={image}
            width={405}
            height={208}
            className="snap-center"
          />
        );
      })}
    </div>
  );
}
 */