import './globals.css'
import type { Metadata } from 'next'
import { DotGothic16  } from 'next/font/google'

const dot = DotGothic16 ({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gradient-to-bl from-[#ce9ffc] to-[#7367f0]'>
      <body className={dot.className}>
        {children}
      </body>
    </html>
  )
}
