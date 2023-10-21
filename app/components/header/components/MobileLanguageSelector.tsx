"use client";

import { getCountriesKey, getCountryImageBy2Code } from '@/libs/utils/country';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import CloseIcon from '@/app/assets/icons/close.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileLanguageSelectorProps {
  lang: string;
  isOpen: boolean;
  onClose: any;
}

export default function MobileLanguageSelector({
  lang,
  isOpen,
  onClose
}: MobileLanguageSelectorProps) {

  const pathname = usePathname();
  const pathnameWithoutLang = pathname.slice(3);
  const mobileLanguageSelector = useTranslations('MobileLanguageSelector');
  const languages = useTranslations('Languages');
  const countryKeys = getCountriesKey();

  return (
    <main className={`${isOpen ? 'flex flex-col' : 'hidden'} absolute inset-0 w-full h-full bg-white shadow-lg rounded-md border-lightgray border-[1px]`}>
      <header className='relative flex items-center justify-center px-6 py-4 bg-signature'>
        <h1 className='text-white'>{`${mobileLanguageSelector('title')}`}</h1>
        <button className='absolute right-4 w-8 h-8' onClick={onClose}>
          <Image src={CloseIcon} alt="close-button" width={32} height={32} />
        </button>
      </header>
      <section className='flex flex-col gap-2 px-6 py-2'>
        {
          countryKeys.map(key => {
            const img = getCountryImageBy2Code(key);
            const isSelected = lang === key;
            return (
              <Link key={key} href={`/${key}${pathnameWithoutLang}`}>
                <div key={key} className={`relative flex gap-2 py-2 px-2 items-center ${isSelected ? '' : 'opacity-60'} hover:opacity-100 hover:cursor-pointer`}>
                  {isSelected && <div className='absolute w-2 h-2 -left-2 rounded-full bg-red' />}
                  <Image src={img} alt={`${key}-logo`} width={24} height={24} />
                  <div className='flex gap-2 w-full justify-between items-center'>
                    <p className='text-sm text-black font-medium'>
                      {`${languages(key)}`}
                    </p>
                    <span className='text-sm text-gray font-normal'>
                      {key.toUpperCase()}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </section>
    </main>
  )
}