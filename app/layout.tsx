import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import './pages.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata = {
  title: 'Ascendemy.id – Tingkatkan Kompetensi Dengan Computer Based Test',
  description: 'Platform ujian online modern untuk tryout, simulasi ujian, dan kompetisi.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={plusJakarta.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
