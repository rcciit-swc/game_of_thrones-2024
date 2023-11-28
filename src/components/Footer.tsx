import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { text: 'About RCCIIT', url: 'https://www.rcciit.org/' },
    { text: 'Events', url: 'https://got.rcciit.org.in/#events' },
    { text: 'Gallery', url: 'https://got.rcciit.org.in/gallery' },
    { text: 'Sponsorship Brochure', url: 'https://drive.google.com/file/d/14b8aQFhIhg3PDtByyscxF50MkNfq43B_/view' },
    { text: 'Contact Us', url: 'https://got.rcciit.org.in/#contact' },
  ];
  const socials = [
    { src: 'google.svg', url: 'https://www.google.com/search?q=rcciit' },
    { src: 'facebook.svg', url: 'https://www.facebook.com/rcciit_kolkata' },
    { src: 'insta.svg', url: 'https://www.instagram.com/rcciit_kolkata' },
  ];
  return (
    <footer className="text-center text-sm p-4 bg-primary text-white font-got border-t-2 border-white">
      <div className="flex items-center justify-center mb-2">
        <Image src="/throne.png" alt="Throne" width={92} height={74} />
        <Image src="/footer.png" alt="G.O.T" width={110} height={58}  className='pt-3'/>
      </div>
      <div className="mb-4 text-xs">ONE FOR ALL, ALL FOR ONE</div>
      <div className="mb-4 font-mono font-medium flex flex-wrap justify-center">
        {links.map((link, index) => (
          <span key={index} className="mx-2 my-1" style={{borderRight: index < links.length - 1 ? '2px solid white' : 'none'}}>
            <Link href={link.url} target="_blank">
              <span className='pr-4'>{link.text}</span>
            </Link>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {socials.map((socials, index) => (
          <Link key={index} href={`${socials.url}`} target="_blank">
            <span>
              <Image src={`/${socials.src}`} alt={`${socials.src}`} width={24} height={24} />
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
}
