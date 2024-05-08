import Image from 'next/image';
import logo from '@/public/tesis_footer.png';
const Footer = () => {
  return (
    <footer className='w-full h-40 bg-zinc-100 flex items-center justify-center '>
      <Image src={logo} alt='' width={200} height={200} />
    </footer>
  );
};

export default Footer;
