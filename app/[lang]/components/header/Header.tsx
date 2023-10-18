"use client";

import Image from 'next/image'
import { useState } from 'react';
import LogoWithText from '@/app/assets/brand/logo-with-text.svg'
import MenuIcon from '@/app/assets/icons/menu.svg'
import CloseIcon from '@/app/assets/icons/close.svg'
import { useTranslations } from 'next-intl';

interface MenuForMobile {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuForMobile({
  isMenuOpen,
  setIsMenuOpen,
}: MenuForMobile) {

  const t = useTranslations('header.navigation');
  const handleCloseButtonClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <section className={`fixed inset-0 w-full z-50 bg-[#F2F6F9] transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
      <header className='flex items-center justify-between px-6 py-4 bg-signature'>
        <a href='/'>
          <Image src={LogoWithText} alt="logo" width={160} height={35} />
        </a>
        <button className='w-8 h-8' onClick={handleCloseButtonClick}>
          <Image src={CloseIcon} alt="close-button" width={32} height={32} />
        </button>
      </header>
      <nav className='flex flex-col px-4'>
        <a href='/' className='flex items-center gap-2 px-2 py-3 border-b-[1px] border-lightgray hover:text-signature hover:cursor-pointer transition-all duration-200'>
          <h1 className='text-base font-semibold'>
            {t('home')}
          </h1>
        </a>
        <a href='/sample' className='flex items-center gap-2 px-2 py-3 border-b-[1px] border-lightgray hover:text-signature hover:cursor-pointer transition-all duration-200'>
          <h1 className='text-base font-semibold'>
            {t('sample')}
          </h1>
        </a>
      </nav>
    </section>
  )
}

export default function Header() {

  const t = useTranslations('header.navigation');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  }

  return (
    <section className='flex items-center justify-center bg-signature w-full'>
      <article className='relative flex w-full items-center px-6 py-4 lg:gap-48 xl:max-w-[1280px]'>
        <a href='/'>
          <Image src={LogoWithText} alt="logo" width={160} height={35} />
        </a>
        <nav className='hidden justify-between items-center lg:flex gap-20'>
          <a href='/'>
            <h1 className={`text-white text-base font-bold hover:text-sub-1 hover:cursor-pointer transition-all duration-200`}>
              {t('home')}
            </h1>
          </a>
          <a href='/sample'>
            <h1 className={`text-white text-base font-bold hover:text-sub-1 hover:cursor-pointer transition-all duration-200`}>
              {t('sample')}
            </h1>
          </a>
        </nav>
        <button className='absolute right-6 w-8 h-8 lg:hidden' onClick={handleMenuButtonClick}>
          <Image src={MenuIcon} alt="menu-button" width={32} height={32} />
        </button>
      </article>
      <MenuForMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  )
}