'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SVGDefs from '@/components/SVGDefs'
import Image from 'next/image'

const SMA = ['IPA (BIOLOGI)','IPA (FISIKA)','IPA (KIMIA)','IPA (MATEMATIKA)','IPS (EKONOMI)','IPS (GEOGRAFI)','IPS (SOSIOLOGI)','IPS (SEJARAH)','BAHASA INDONESIA','BAHASA INGGRIS','MATEMATIKA WAJIB','LITERASI & NUMERASI']

const tryoutData = {
  SD: {
    u: [['Literasi Membaca',30,60],['Numerasi',30,60]],
    p: [10000,30000],
    t: (i: number) => `TKA-${i} SD`,
    d: 'Apakah Ayah & Bunda ingin tahu sejauh mana kesiapan anak menghadapi Tes Kemampuan Akademik?'
  },
  SMP: {
    u: [['Literasi Bahasa Indonesia',35,60],['Numerasi',35,60]],
    p: [12000,30000],
    t: (i: number) => `TKA-${i} SMP`,
    d: 'Ukur kesiapan menghadapi Tes Kemampuan Akademik dengan soal sesuai format asli.'
  },
  SMA: {
    u: [['Mata pelajaran pilihan',40,90]],
    p: [12000,25000],
    t: (i: number) => `TKA-${i} SMA ${SMA[i-1]}`,
    d: 'Latihan mapel tertentu dengan kunci jawaban, pembahasan tuntas, dan analisis skor.'
  }
}

const features = [
  'Akses penuh bank soal & simulasi CBT',
  'Kunci jawaban & pembahasan tuntas',
  'Analisis skor & grafik evaluasi belajar',
  'Latihan kapan saja secara fleksibel'
]

const rp = (n: number) => 'Rp' + n.toLocaleString('id-ID')

export default function TryoutPage() {
  const [level, setLevel] = useState<'SD'|'SMP'|'SMA'>('SD')
  const [search, setSearch] = useState('')
  const [showCount, setShowCount] = useState(6)
  const [selectedItem, setSelectedItem] = useState<number|null>(null)

  const totalTryout = 36
  const data = tryoutData[level]
  const items = Array.from({length: 12}, (_, i) => i + 1).filter(i => 
    data.t(i).toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <SVGDefs />
      <Navbar />
      <main style={{background:'#f8fafc'}} className="x">
        <section className="xb">
          <b className="fs f3" style={{left:'46%',top:'14%',fontSize:34}}>π</b>
          <b className="fs f3" style={{left:'60%',top:'56%',fontSize:28}}>✦</b>
          <b className="fs f3" style={{left:'86%',top:'12%',fontSize:30}}>∑</b>
          <div className="w">
            <div>
              <h1>Paket <i>Tryout & Simulasi Ujian</i></h1>
              <p>Simulasi ujian sesuai format asli untuk persiapan maksimal</p>
            </div>
            <div className="xpl">
              <span>● {totalTryout} tryout tersedia</span>
            </div>
          </div>
        </section>

        <div className="w xm2">
          <div className="xt">
            <div className="xps">
              {(['SD','SMP','SMA'] as const).map(lv => (
                <button 
                  key={lv}
                  className={level === lv ? 'on' : ''}
                  onClick={() => {
                    setLevel(lv)
                    setShowCount(6)
                    setSearch('')
                  }}
                >
                  {lv}
                </button>
              ))}
            </div>
            <label className="xs">
              <svg width="18" height="18"><use href="#sr"/></svg>
              <input 
                placeholder="Cari tryout..." 
                aria-label="Cari tryout"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setShowCount(6)
                }}
              />
            </label>
          </div>

          <div className="xg">
            {items.slice(0, showCount).length === 0 ? (
              <p className="xe">Tryout tidak ditemukan.</p>
            ) : (
              items.slice(0, showCount).map(i => (
                <article key={i} className="xc">
                  <span className={`ph xp g${i % 4}`}>
                    <em className="xm">PROMO</em>
                    <Image src="/img/try-out-tka.png" alt={data.t(i)} fill style={{objectFit:'cover'}} />
                    TRYOUT TKA
                  </span>
                  <div className="xd">
                    <h3>{data.t(i)}</h3>
                    <div className="xmt">
                      <svg width="16" height="16"><use href="#cl"/></svg>
                      {data.u.length} Ujian
                    </div>
                    <p className="ds">{data.d}</p>
                    <button 
                      className="xdt"
                      onClick={() => setSelectedItem(i)}
                    >
                      Detail Ujian
                    </button>
                    <div className="xf2">
                      <span className="xo">{rp(data.p[1])}</span>
                      <span className="xpr">{rp(data.p[0])}</span>
                      <a className="btn o" href="#">Daftar Sekarang</a>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {items.length > showCount && (
            <div className="xmore">
              <button 
                className="btn b"
                onClick={() => setShowCount(c => c + 6)}
              >
                Tampilkan lebih banyak
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {selectedItem && (
        <dialog 
          open 
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null)
          }}
          style={{display:'flex'}}
        >
          <button 
            className="xx" 
            aria-label="Tutup"
            onClick={() => setSelectedItem(null)}
          >
            ×
          </button>
          <h3>{data.t(selectedItem)}</h3>
          <p>{data.d}</p>
          <ul>
            {data.u.map(([title, soal, menit], idx) => (
              <li key={idx}>
                <span>{title}</span>
                <span>{soal} soal · {menit} menit</span>
              </li>
            ))}
          </ul>
          <a className="btn o" href="#">Daftar Sekarang · {rp(data.p[0])}</a>
        </dialog>
      )}
    </>
  )
}
