'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'Apakah tryout gratis benar-benar gratis?',
    a: 'Ya, benar-benar gratis. Paket yang bertanda GRATIS, seperti Ascendemy Math Olympiad (AMO), tidak dipungut biaya dan tidak membutuhkan kartu kredit. Kamu cukup mendaftar dan memilih paketnya sebelum pendaftaran ditutup. Untuk paket tryout lain, harganya tertera jelas di kartu paket, jadi tidak ada biaya tersembunyi.'
  },
  {
    q: 'Bagaimana cara membayar?',
    a: 'Pembayaran bisa dilakukan lewat QRIS (mulai Rp12.000), transfer bank (BSI, Mandiri, BNI, BRI, Permata, dan CIMB Niaga), atau GoPay. Pilih paket, klik Daftar, pilih metode pembayaran, lalu ikuti petunjuk yang muncul. Akses paket aktif setelah pembayaranmu berhasil.'
  },
  {
    q: 'Berapa lama paket bisa diakses?',
    a: 'Masa akses mengikuti paket yang kamu pilih dan tertera di halaman pendaftaran paket tersebut. Selama akses aktif, kamu bebas berlatih kapan saja, membuka kunci jawaban dan pembahasan, serta memantau analisis skor. Untuk Latihan Soal berlangganan, akses berlaku selama langgananmu aktif (bulanan atau tahunan).'
  },
  {
    q: 'Bisa untuk satu sekolah sekaligus?',
    a: 'Bisa. Sekolah atau guru dapat mendaftarkan banyak siswa sekaligus. Hubungi tim Ascendemy lewat ascendemyofficial@gmail.com atau +62 856-5556-0845 untuk menyesuaikan paket dan jumlah siswa.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number[]>([])

  const toggle = (i: number) => {
    setOpen(prev => 
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    )
  }

  return (
    <section id="faq" className="faq">
      <div className="orn">
        <b className="fs f4" style={{left:'2%',top:'6%',fontSize:260,animationDelay:'0s'}}>?</b>
        <b className="fs f5" style={{left:'90%',top:'40%',fontSize:200,animationDelay:'1.5s'}}>?</b>
      </div>
      <div className="fw">
        <ScrollReveal>
          <h2 className="h b c">Pertanyaan yang sering diajukan</h2>
        </ScrollReveal>
        <div className="fl2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`fi2 ${open.includes(i) ? 'open' : ''}`}>
                <button 
                  aria-expanded={open.includes(i)}
                  onClick={() => toggle(i)}
                >
                  <span>{faq.q}</span>
                  <i>{open.includes(i) ? '−' : '+'}</i>
                </button>
                <div className="a">{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
