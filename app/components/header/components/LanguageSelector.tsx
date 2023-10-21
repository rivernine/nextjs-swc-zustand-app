"use client";

import { getCountriesKey, getCountryImageBy2Code } from '@/libs/utils/country';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageTooltipProps {
  lang: string;
  isOpen: boolean;
}

export default function LanguageTooltip({
  lang,
  isOpen,
}: LanguageTooltipProps) {

  const pathname = usePathname();
  const pathnameWithoutLang = pathname.slice(3);
  const languages = useTranslations('Languages');
  const countryKeys = getCountriesKey();

  return (
    <main className={`${isOpen ? 'flex flex-col' : 'hidden'} absolute z-50 right-4 top-16 bg-white px-5 py-2 shadow-lg rounded-md border-lightgray border-[1px]`}>
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
    </main>
  )
}