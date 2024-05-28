import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Gnb from './gnb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI요소연습하기',
  description: 'Vanilla/React로  UI요소 만들기 연습',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  )
}
