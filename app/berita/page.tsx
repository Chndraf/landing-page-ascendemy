'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SVGDefs from '@/components/SVGDefs'
import Image from 'next/image'

const newsData = [
  ['Siswa SMK Wajib Ikut TKA Empat Hari, Bagaimana Jika Sedang PKL?','Siswa SMK sering memiliki agenda pembelajaran yang berbeda dari jenjang sekolah lain. Selain mengikuti kegiatan belajar, mereka juga perlu menjalani Praktik Kerja Lapangan.','TKA','13 Okt 2026'],
  ['Dari Sains hingga IPS, 686 Finalis Unjuk Kemampuan di OSN 2026','Ratusan murid sekolah dasar dan menengah pertama menunjukkan kemampuan mereka dalam Olimpiade Sains Nasional jenjang nasional.','Olimpiade','12 Okt 2026'],
  ['Hasil TKA SMA/SMK 2026 Bisa Diakses Sendiri, Catat Tanggalnya','Siswa SMA, SMK, dan sederajat yang mengikuti Tes Kemampuan Akademik (TKA) 2026 nantinya dapat melihat hasil tes masing-masing secara mandiri.','TKA','12 Okt 2026'],
  ['Bukan Cuma Nilai Rapor, TKA Jadi Syarat Pendaftar SNBP 2027','Siswa kelas 12 yang berencana masuk perguruan tinggi negeri melalui SNBP 2027 perlu memahami syarat terbaru.','SNBP','12 Okt 2026'],
  ['Sertifikat TKA untuk Daftar Kuliah, Siswa Gap Year Perlu Perhatikan Ini','Sertifikat hasil TKA merupakan dokumen resmi yang memuat nilai TKA setiap mata pelajaran beserta kategori capaiannya.','TKA','9 Okt 2026'],
  ['Perkemahan Anak Indonesia Hebat 2026 Ajak Siswa SMP Berkemah','Sebanyak 407 siswa SMP dari berbagai daerah mengikuti Perkemahan Anak Indonesia Hebat 2026 di Bogor, Jawa Barat.','Edukasi','9 Okt 2026'],
  ['Ada 2 Model Soal di TKA SMA 2026, Apa Saja?','Bagi siswa kelas 12 yang akan mengikuti TKA 2026, memahami materi saja belum cukup. Siswa juga perlu mengenal model soalnya.','TKA','7 Okt 2026'],
  ['Tips Mengatur Waktu Saat Mengerjakan Soal CBT','Pembagian waktu yang tepat membantu siswa menyelesaikan seluruh soal tanpa terburu-buru di menit terakhir.','Tips','5 Okt 2026'],
  ['Ascendemy Math Olympiad 2026 Resmi Dibuka','Pendaftaran AMO 2026 untuk jenjang SMA telah dibuka dan gratis bagi seluruh peserta.','Olimpiade','3 Okt 2026'],
  ['Cara Membaca Analisis Skor Tryout dengan Benar','Grafik evaluasi belajar membantu kamu mengetahui topik yang perlu diperkuat sebelum ujian sesungguhnya.','Tips','1 Okt 2026'],
  ['Jadwal Lengkap UTBK dan SNBT 2027 yang Perlu Dicatat','Catat tanggal penting pendaftaran dan pelaksanaan seleksi agar tidak ada tahapan yang terlewat.','SNBP','28 Sep 2026'],
  ['Pola Belajar Efektif Tiga Minggu Menjelang Ujian','Atur ritme latihan soal, evaluasi, dan istirahat agar persiapan lebih terarah dan tidak melelahkan.','Tips','25 Sep 2026'],
  ['Pembaruan Fitur Pembahasan Soal di Ascendemy','Pembahasan kini tampil lebih rapi dan bisa dibuka langsung setelah skor keluar.','Update','22 Sep 2026'],
  ['Lima Kesalahan Umum Siswa Saat Tryout Online','Mulai dari terlalu lama di satu soal hingga lupa menandai soal ragu, ini kesalahan yang sering terjadi.','Tips','20 Sep 2026'],
  ['Pengumuman Pemenang Ascendemy Math Olympiad 2025','Selamat kepada seluruh pemenang dan terima kasih kepada semua peserta yang telah berpartisipasi.','Olimpiade','15 Sep 2026'],
  ['Panduan Orang Tua Mendampingi Anak Belajar Digital','Pendampingan yang tepat membantu anak tetap fokus dan nyaman saat belajar lewat platform digital.','Edukasi','12 Sep 2026'],
  ['Perubahan Kurikulum dan Dampaknya pada Soal Ujian','Pahami bagaimana penyesuaian kurikulum memengaruhi cakupan materi dan bentuk soal ujian.','Edukasi','10 Sep 2026'],
  ['Ascendemy Hadirkan Latihan Soal Matematika SD sampai SMA','Ratusan latihan per kelas kini tersedia dengan gratis akses 7 hari pertama.','Update','8 Sep 2026']
]

const categories = ['Semua','TKA','SNBP','Olimpiade','Tips','Edukasi','Update']
const featured = newsData[0]

export default function BeritaPage() {
  const [category, setCategory] = useState('Semua')
  const [page, setPage] = useState(1)
  const perPage = 6

  const filtered = newsData.slice(1).filter(x => category === 'Semua' || x[2] === category)
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const currentPage = Math.min(page, totalPages)
  const paginatedNews = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <>
      <SVGDefs />
      <Navbar />
      <main style={{background:'#f8fafc'}}>
        <div className="w xh">
          <h1>Portal Berita</h1>
          <p>Informasi terkini seputar ujian, tryout, dan edukasi.</p>
          
          <article className="xft">
            <div className="im ph g1">
              <span className="xbg">NEWS</span>
              <Image src={`/img/berita%20(1).png`} alt={featured[0]} fill style={{objectFit:'cover'}} />
              <span className="xhot">HOT NEWS</span>
            </div>
            <div className="tx">
              <span className="xlb">Berita Utama</span>
              <h2>{featured[0]}</h2>
              <p>{featured[1]}</p>
              <div className="xau">
                <span className="av">AM</span>
                <div>
                  <b>AMALIA</b>
                  <small>{featured[3]} • 3 min read</small>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="w xm2">
          <h3 className="xs3">Berita Terbaru</h3>
          <div className="xch">
            {categories.map(cat => (
              <button 
                key={cat}
                className={category === cat ? 'on' : ''}
                onClick={() => {setCategory(cat); setPage(1)}}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="xng">
            {paginatedNews.map((news, i) => {
              const idx = (currentPage - 1) * perPage + i + 1
              return (
                <article key={i} className="xnc">
                  <div className={`im ph g${idx % 4}`}>
                    <span className="xbg">{news[2]}</span>
                    <Image src={`/img/berita%20(${idx + 1}).png`} alt={news[0]} fill style={{objectFit:'cover'}} />
                  </div>
                  <div className="bd">
                    <h3>{news[0]}</h3>
                    <p>{news[1]}</p>
                    <div className="f3">
                      <span>▦ {news[3]}</span>
                      <span>
                        Baca selengkapnya 
                        <svg width="16" height="16"><use href="#ar"/></svg>
                      </span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="xpg">
            <button 
              disabled={currentPage <= 1}
              onClick={() => setPage(p => p - 1)}
            >
              Sebelumnya
            </button>
            <span>Halaman {currentPage} dari {totalPages}</span>
            <button 
              disabled={currentPage >= totalPages}
              onClick={() => setPage(p => p + 1)}
            >
              Berikutnya
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
