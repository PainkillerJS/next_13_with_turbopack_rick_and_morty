import Link from 'next/link';

import { ROUTES } from '@utils/constants/routes';

const Header = () => {
  return (
    <header className='bg-slate-300 w-full'>
      <div className='container py-4 px-7 text-gray-700'>
        <nav>
          <ul className='flex justify-end items-center'>
            <li>
              <Link href={ROUTES.CHARACTERS}>Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
