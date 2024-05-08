import Image from 'next/image';
import Link from 'next/link';
import logoTesis from '@/public/tesis_header.png';

const Header = () => {
  return (
    <header className='py-5 shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-10'>
        <Link href='/'>
          <Image src={logoTesis} width={150} height={150} alt='logo_header' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
