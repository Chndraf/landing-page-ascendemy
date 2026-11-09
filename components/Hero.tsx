'use client'
import { useEffect, useState } from 'react'

const questions = [
  {n:12,q:'Jika f(x) = 2x² - 3x + 1, maka nilai f(3) - f(1) adalah ...',o:['8','10','12','14']},
  {n:13,q:'Nilai dari log₂ 8 + log₂ 4 adalah ...',o:['3','4','5','6']},
  {n:14,q:'Jumlah 10 suku pertama deret aritmetika 3, 7, 11, ... adalah ...',o:['190','200','210','220']},
  {n:15,q:'Himpunan penyelesaian dari 2x - 5 > 7 adalah ...',o:['x > 6','x < 6','x > 1','x < 1']},
  {n:16,q:'Jika sin θ = 3/5 dan θ di kuadran I, maka nilai cos θ adalah ...',o:['3/4','4/5','5/4','5/3']}
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const [ans, setAns] = useState<Record<number, number>>({0:1})
  const [time, setTime] = useState(1*3600+22*60+9)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t > 0 ? t - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (sec: number) => {
    const h = Math.floor(sec/3600).toString().padStart(2,'0')
    const m = Math.floor(sec%3600/60).toString().padStart(2,'0')
    const s = (sec%60).toString().padStart(2,'0')
    return `${h}:${m}:${s}`
  }

  const q = questions[cur]

  return (
    <section id="home" className="hero">
      <div className="orn">
        <b className="fs f2" style={{left:'3%',top:'16%',fontSize:46,animationDelay:'0s'}}>π</b>
        <b className="fs f1" style={{left:'47%',top:'5%',fontSize:38,animationDelay:'1.2s'}}>∑</b>
        <b className="fs f2" style={{left:'92%',top:'6%',fontSize:42,animationDelay:'.6s'}}>√</b>
        <b className="fs f1" style={{left:'2%',top:'70%',fontSize:50,animationDelay:'2s'}}>+</b>
        <b className="fs f2" style={{left:'47%',top:'88%',fontSize:36,animationDelay:'.4s'}}>÷</b>
        <b className="fs f1" style={{left:'94%',top:'78%',fontSize:36,animationDelay:'1.6s'}}>x²</b>
        <b className="fs f2" style={{left:'24%',top:'5%',fontSize:30,animationDelay:'.9s'}}>%</b>
        <b className="fs f1" style={{left:'60%',top:'92%',fontSize:34,animationDelay:'.2s'}}>△</b>
        <b className="fs f2" style={{left:'72%',top:'4%',fontSize:30,animationDelay:'1.8s'}}>○</b>
        <b className="fs f1" style={{left:'44%',top:'52%',fontSize:22,animationDelay:'.7s'}}>✦</b>
        <b className="fs f2" style={{left:'97%',top:'45%',fontSize:26,animationDelay:'1.4s'}}>✦</b>
        <b className="fs f1" style={{left:'60%',top:'3%',fontSize:34,animationDelay:'.9s'}}>π</b>
      </div>
      <div className="w hg">
        <div className="hl">
          <span className="bdg">
            <svg width="18" height="16"><use href="#st"/></svg>
            Platform CBT Terpercaya
          </span>
          <h1>
            <span>Tingkatkan Kompetensi Dengan </span>
            <em>Computer Based Test</em>
          </h1>
          <p className="lead">Platform ujian online modern yang dirancang untuk membantu Anda mengukur dan meningkatkan kemampuan.</p>
          <div className="cta">
            <a href="#" className="btn o lg">
              Daftar Sekarang 
              <svg width="11" height="11"><use href="#ar"/></svg>
            </a>
            <a href="#tryout" className="btn gh">Lihat Paket &amp; Harga</a>
          </div>
          <ul className="trust">
            <li><svg width="16" height="16"><use href="#ck"/></svg>Tanpa kartu kredit</li>
            <li><svg width="16" height="16"><use href="#ck"/></svg>Pembahasan lengkap</li>
            <li><svg width="16" height="16"><use href="#ck"/></svg>Bayar QRIS mulai Rp12.000</li>
          </ul>
        </div>
        <div className="hr">
          <i className="back"></i>
          <div className="mock">
            <div className="mh">
              <span>Tryout TKA SMA - Matematika</span>
              <span className="tm">
                <svg width="14" height="14"><use href="#clk"/></svg>
                <code>{formatTime(time)}</code>
              </span>
            </div>
            <div className="mb">
              <p className="meta">Soal <span>{q.n}</span> dari 40 · <i>klik untuk mencoba</i></p>
              <p className="q">{q.q}</p>
              <div className="opts">
                {q.o.map((opt, i) => (
                  <button 
                    key={i}
                    className={`op ${ans[cur] === i ? 'on' : ''}`}
                    onClick={() => setAns({...ans, [cur]: i})}
                  >
                    <b>{'ABCD'[i]}</b>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
              <div className="qn">
                <button onClick={() => setCur(c => c-1)} disabled={cur === 0}>← Sebelumnya</button>
                <button onClick={() => setCur(c => c+1)} disabled={cur === questions.length-1}>Selanjutnya →</button>
              </div>
              <div className="ng">
                {Array.from({length:20}, (_,i) => {
                  const n = i+1
                  const k = questions.findIndex(x => x.n === n)
                  let c = n <= 11 ? 'a' : ''
                  if(k >= 0) c = k === cur ? 'c' : ans[k] !== undefined ? 'a' : n === 15 ? 'm' : ''
                  return (
                    <span 
                      key={i} 
                      className={c}
                      {...(k >= 0 ? {onClick: () => setCur(k), 'data-k': k} : {})}
                    >
                      {k === cur ? '✓' : n}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="fl">
              <span className="fi"><svg width="16" height="16"><use href="#ck"/></svg></span>
              <span>
                <b>Skor langsung keluar</b>
                <small>+ pembahasan per soal</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
