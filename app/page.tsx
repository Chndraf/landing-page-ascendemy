import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Tryout from '@/components/Tryout'
import Kompetisi from '@/components/Kompetisi'
import News from '@/components/News'
import Testimoni from '@/components/Testimoni'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SVGDefs from '@/components/SVGDefs'

export default function Home() {
  return (
    <>
      <SVGDefs />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tryout />
        <Kompetisi />
        <News />
        <Testimoni />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
