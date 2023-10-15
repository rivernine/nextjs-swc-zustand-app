import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        {children}
      </body>
    </html>
  )
}
