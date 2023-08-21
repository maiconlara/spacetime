import './globals.css'
import type { Metadata } from 'next'
import { Bai_Jamjuree as Bai, Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const bai = Bai({ subsets: ['latin'], weight: '700', variable:'--font-bai' });

export const metadata: Metadata = {
  title: 'Spacetime',
  description: 'Time capsule made with React, Next.js, Tailwind CSS and TypeScript', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bai.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
