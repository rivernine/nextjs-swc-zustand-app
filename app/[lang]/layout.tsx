import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { getCountriesKeyObj } from '@/libs/utils/country';
import { getDictionary } from '@/i18n/get-dictionary';

/**
 * 폰트 정의
 */
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

/**
 * 다이나믹 메타데이터 생성
 */
export async function generateMetadata({
  params: { lang }
}: {
  params: any
}): Promise<Metadata> {
  const dic = await getDictionary(lang);
  const title = dic.Metadata.title;
  const description = dic.Metadata.description;
  return {
    title,
    description,
    icons: {
      icon: "/favicon.ico"
    }
  }
}

/**
 * 파라미터 생성
 */
export function generateStaticParams() {
  return getCountriesKeyObj();
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: any
}) {

  let messages;
  try {
    messages = (await import(`../../i18n/dictionaries/${lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body className={notoSansKR.className}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
