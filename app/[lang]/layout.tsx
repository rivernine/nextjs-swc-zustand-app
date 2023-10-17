import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Swc Zustand App Router',
  description: 'This is template.',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  return (
    <html lang={params.lang}>
      <body className={notoSansKR.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
