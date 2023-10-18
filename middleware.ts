import createMiddleware from 'next-intl/middleware';
import { getDictionariesKey } from './i18n/get-dictionary';

export default createMiddleware({
  locales: getDictionariesKey(),
  localePrefix: 'always',
  defaultLocale: 'ko',
  localeDetection: true,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};