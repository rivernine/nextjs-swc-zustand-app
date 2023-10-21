"use client";

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import LogoWithText from '@/app/assets/brand/logo-with-text.svg'
import MenuIcon from '@/app/assets/icons/menu.svg'
import { useLocale, useTranslations } from 'next-intl';
import { getCountryImageBy2Code } from '@/libs/utils/country';
import MobileMenu from './components/MobileMenu';
import LanguageSelector from './components/LanguageSelector';

export default function Header() {

  const languageRef = useRef<HTMLDivElement | null>(null);

  const lang = useLocale();
  const t = useTranslations('Header.navigation');
  const l = useTranslations('Header.language');

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState<boolean>(false);

  const CountryImg = getCountryImageBy2Code(lang);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  }

  const handleLanguageClick = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen)
  }

  const closeLanguageSelector = () => {
    setIsLanguageSelectorOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        closeLanguageSelector()
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <section className='flex items-center justify-center bg-signature w-full select-none'>
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
        <div className='absolute hidden right-6 justify-center items-center gap-2 p-2 rounded-md lg:flex hover:bg-sub-2 hover:bg-opacity-10 hover:cursor-pointer active:translate-y-1'
          onClick={handleLanguageClick}
          ref={languageRef}>
          <p className='text-sm text-white font-medium'>{l('title')}</p>
          <Image src={CountryImg} alt={`${lang}-logo`} width={28} height={28} />
        </div>
        <LanguageSelector lang={lang} isOpen={isLanguageSelectorOpen} />
      </article>
      <MobileMenu lang={lang} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  )
}