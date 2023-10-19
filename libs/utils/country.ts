import KR from '@/app/assets/countries/kr.svg';
import US from '@/app/assets/countries/us.svg';

export function getCountryImageBy2Code(code: string) {
  switch (code) {
    case 'ko':
      return KR;
    case 'en':
      return US;
    default:
      return US;
  }
}

export function getCountriesKeyObj() {
  return [
    { lang: 'ko' },
    { lang: 'en' }
  ]
}

export function getCountriesKey() {
  return [
    'ko',
    'en'
  ]
}