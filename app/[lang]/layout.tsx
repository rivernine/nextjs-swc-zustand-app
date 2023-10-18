import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { getDictionariesKeyObj } from '@/i18n/get-dictionary';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Swc Zustand App Router',
  description: 'This is template.',
  icons: {
    icon: "/favicon.ico"
  }
}

export function generateStaticParams() {
  return getDictionariesKeyObj();
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
