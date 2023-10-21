"use client";

import Image from 'next/image'
import { getCountryImageBy2Code } from "@/libs/utils/country";
import { useTranslations } from "next-intl";
import LogoWithText from '@/app/assets/brand/logo-with-text.svg'
import CloseIcon from '@/app/assets/icons/close.svg'
import { useState } from 'react';
import MobileLanguageSelector from './MobileLanguageSelector';

interface MobileMenuProps {
  lang: string,
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  lang,
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {

  const t = useTranslations('Header.navigation');
  const l = useTranslations('Header.language');

  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState<boolean>(false);

  const CountryImg = getCountryImageBy2Code(lang);

  const handleCloseButtonClick = () => {
    setIsMenuOpen(false);
  }

  const handleLanguageSelectorClick = () => {
    openLanguageSelector();
  }

  const openLanguageSelector = () => {
    setIsLanguageSelectorOpen(true);
  }

  const closeLanguageSelector = () => {
    setIsLanguageSelectorOpen(false);
  }

  return (
    <main className={`fixed inset-0 w-full z-50 bg-gradient-to-b from-[#F2F6F9] from-[5%] via-[#F2F6F9] via-[10%] to-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
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
      <footer className='flex justify-center items-cente mt-40'>
        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-sub-4 border-sub-4 border-[1px] hover:bg-white hover:border-[1px] hover:border-signature hover:bg-opacity-10 hover:cursor-pointer'
          onClick={handleLanguageSelectorClick}
        >
          <p className='text-sm text-black font-medium'>{l('title')}</p>
          <Image src={CountryImg} alt={`${lang}-logo`} width={28} height={28} />
        </div>
      </footer>
      <MobileLanguageSelector
        lang={lang}
        isOpen={isLanguageSelectorOpen}
        onClose={closeLanguageSelector}
      />
    </main>
  )
}