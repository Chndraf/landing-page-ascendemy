'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SVGDefs from '@/components/SVGDefs'
import Image from 'next/image'

const latihanData = {
  SD: [[1,113],[2,87],[3,98],[4,84],[5,103],[6,196]],
  SMP: [[7,120],[8,134],[9,142]],
  SMA: [[10,150],[11,168],[12,181]]
}

const descriptions = {
  SD: 'Latihan soal bertahap sesuai kurikulum kelas ini, lengkap dengan pembahasan.',
  SMP: 'Perkuat konsep dan biasakan soal bernalar untuk persiapan ujian sekolah.',
  SMA: 'Materi terstruktur dan latihan berkelanjutan menuju ujian dan seleksi masuk PTN.'
}

const pricing = (k: number) => {
  if(k <= 3) return [59000,90000,547500,1095000]
  if(k <= 5) return [89000,120000,730000,1460000]
  if(k == 6) return [119000,150000,912500,1825000]
  if(k <= 9) return [129000,160000,990000,1920000]
  return [149000,190000,1190000,2280000]
}

const rp = (n: number) => 'Rp' + n.toLocaleString('id-ID')

export default function LatihanPage() {
  const [level, setLevel] = useState<'SD'|'SMP'|'SMA'>('SD')
  const [selectedPackages, setSelectedPackages] = useState<Record<number, number>>({})

  const selectPackage = (kelas: number, packageIndex: number) => {
    setSelectedPackages(prev => ({
      ...prev,
      [kelas]: packageIndex
    }))
  }

  return (
    <>
      <SVGDefs />
      <Navbar />
      <main style={{background:'#f8fafc'}} className="x">
        <section className="xb bl">
          <b className="fs f3" style={{left:'46%',top:'14%',fontSize:34}}>π</b>
          <b className="fs f3" style={{left:'60%',top:'56%',fontSize:28}}>✦</b>
          <b className="fs f3" style={{left:'86%',top:'12%',fontSize:30}}>∑</b>
          <div className="w">
            <div>
              <h1>Paket <i>Latihan & Pembahasan</i></h1>
              <p>Belajar dengan materi terstruktur dan latihan soal berkelanjutan</p>
            </div>
            <div className="xpl">
              <span>● 12 paket tersedia</span>
              <span>Directory Materi ↗</span>
            </div>
          </div>
        </section>

        <div className="w xm2 bl">
          <div className="xt">
            <div className="xps">
              {(['SD','SMP','SMA'] as const).map(lv => (
                <button 
                  key={lv}
                  className={level === lv ? 'on' : ''}
                  onClick={() => setLevel(lv)}
                >
                  {lv}
                </button>
              ))}
            </div>
          </div>

          <div className="xg">
            {latihanData[level].map(([kelas, count]) => {
              const p = pricing(kelas)
              const selected = selectedPackages[kelas] ?? 1
              return (
                <article key={kelas} className="xc">
                  <span className={`ph xp g${kelas % 4}`}>
                    <em className="xm">PROMO</em>
                    <Image src="/img/try-out-tka.png" alt={`Kelas ${kelas}`} fill style={{objectFit:'cover'}} />
                    LATIHAN SOAL<br/>MATEMATIKA
                    <i className="xk">{kelas}</i>
                  </span>
                  <div className="xd">
                    <h3>MATEMATIKA {level} KELAS {kelas}</h3>
                    <div className="xmt">
                      <svg width="16" height="16"><use href="#cl"/></svg>
                      {count} Latihan
                    </div>
                    <p className="ds">{descriptions[level]}</p>
                    <div className="xf2">
                      <small>Pilih paket:</small>
                      <div className="xr">
                        <button 
                          className={selected === 0 ? 'on' : ''}
                          onClick={() => selectPackage(kelas, 0)}
                        >
                          <span>✦ Gratis 7 Hari</span>
                        </button>
                        <button 
                          className={selected === 1 ? 'on' : ''}
                          onClick={() => selectPackage(kelas, 1)}
                        >
                          1 Bulan: <s>{rp(p[1])}</s><b>{rp(p[0])}</b>
                        </button>
                        <button 
                          className={selected === 2 ? 'on' : ''}
                          onClick={() => selectPackage(kelas, 2)}
                        >
                          1 Tahun: <s>{rp(p[3])}</s><b>{rp(p[2])}</b>
                        </button>
                      </div>
                      <a className="btn o" href="#">Daftar Sekarang</a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
