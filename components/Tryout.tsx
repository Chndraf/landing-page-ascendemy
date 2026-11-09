'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const subjects = ['BIOLOGI','FISIKA','KIMIA','MATEMATIKA','B. INDONESIA','B. INGGRIS','EKONOMI','GEOGRAFI']
const paket = subjects.map((m,i) => ({
  t: `TKA-${i+1} SMA ${i<4?'IPA ':''}(${m})`,
  s: 'Untuk latihan mapel tertentu',
  p: 'Rp12.000',
  o: 'Rp25.000',
  img: `/img/try-out-tka.png`,
  url: '#',
  f: [
    'Akses penuh bank soal & simulasi CBT',
    'Kunci jawaban & pembahasan tuntas',
    'Analisis skor & grafik evaluasi belajar',
    'Latihan kapan saja secara fleksibel'
  ]
}))

export default function Tryout() {
  const [level, setLevel] = useState('SMA')
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      const step = scrollRef.current.querySelector('.pk')?.clientWidth || 0
      scrollRef.current.scrollBy({ left: dir * (step + 30), behavior: 'smooth' })
    }
  }

  return (
    <section id="tryout" className="try">
      <div className="orn">
        <b className="fs f2" style={{left:'2%',top:'10%',fontSize:28,animationDelay:'0s'}}>✦</b>
        <b className="fs f1" style={{left:'96%',top:'18%',fontSize:34,animationDelay:'1s'}}>△</b>
        <b className="fs f2" style={{left:'95%',top:'70%',fontSize:40,animationDelay:'.5s'}}>○</b>
        <b className="fs f1" style={{left:'1.5%',top:'72%',fontSize:36,animationDelay:'2s'}}>π</b>
      </div>
      <div className="w tg">
        <div className="th">
          <div>
            <small className="lb">PAKET TRYOUT</small>
            <h2 className="h b">Tryout dan Simulasi Ujian</h2>
          </div>
          <div className="seg" id="seg">
            {['SD','SMP','SMA'].map(l => (
              <button 
                key={l}
                className={level === l ? 'on' : ''}
                onClick={() => setLevel(l)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="rw">
          <button className="ar l" aria-label="Sebelumnya" onClick={() => scroll(-1)}>‹</button>
          <div className="row" id="pk" ref={scrollRef}>
            {paket.map((k, i) => (
              <article key={i} className="pk">
                <span className="ph poster">
                  <Image src={k.img} alt={k.t} fill style={{objectFit:'cover'}} />
                  TRYOUT TKA
                </span>
                <div className="pc">
                  <div>
                    <h3>{k.t}</h3>
                    <p className="sb">{k.s}</p>
                    <p className="pr">
                      <b>{k.p}</b>
                      <s>{k.o}</s>
                    </p>
                    <ul>
                      {k.f.map((f, j) => (
                        <li key={j}>
                          <svg width="10" height="10"><use href="#ck"/></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bw">
                    <a className="btn o" href={k.url}>Daftar</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="ar r" aria-label="Berikutnya" onClick={() => scroll(1)}>›</button>
        </div>
        <a href="/tryout" className="btn b all">
          Lihat semua paket 
          <svg width="32" height="20"><use href="#ar"/></svg>
        </a>
        <ScrollReveal>
          <div className="sub-bn">
            <div>
              <small className="lb2">LATIHAN SOAL BERLANGGANAN</small>
              <h4>Matematika SD–SMA, ratusan latihan per kelas</h4>
              <p>Mulai <b>Rp59.000/bulan</b> · hemat hingga 50% dengan langganan tahunan. Gratis 7 hari pertama.</p>
            </div>
            <a href="/latihan" className="btn b sm">Coba 7 Hari Gratis</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
