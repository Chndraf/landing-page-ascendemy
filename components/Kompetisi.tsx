import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const events = [
  {c:'o',t:'ASCENDEMY MATH OLYMPIAD (AMO) 2026 - SMA',y:2026},
  {c:'bl',t:'ASCENDEMY MATH OLYMPIAD (AMO) 2027 - SMA',y:2027}
]

export default function Kompetisi() {
  return (
    <section id="kompetisi" className="komp">
      <div className="orn">
        <b className="fs f3" style={{left:'8%',top:'20%',fontSize:26,animationDelay:'0s'}}>✦</b>
        <b className="fs f3" style={{left:'90%',top:'14%',fontSize:34,animationDelay:'1s'}}>✦</b>
        <b className="fs f3" style={{left:'14%',top:'74%',fontSize:22,animationDelay:'.5s'}}>✦</b>
        <b className="fs f3" style={{left:'86%',top:'70%',fontSize:28,animationDelay:'1.5s'}}>✦</b>
        <b className="fs f1" style={{left:'4%',top:'46%',fontSize:30,animationDelay:'.8s'}}>★</b>
        <b className="fs f2" style={{left:'95%',top:'50%',fontSize:30,animationDelay:'1.2s'}}>★</b>
        <b className="fs f3" style={{left:'22%',top:'8%',fontSize:34,animationDelay:'.3s'}}>π</b>
        <b className="fs f3" style={{left:'77%',top:'8%',fontSize:34,animationDelay:'.9s'}}>∑</b>
      </div>
      <div className="w kg">
        <ScrollReveal>
          <div className="kh">
            <h2 className="h o2">Kompetisi dan Olimpiade</h2>
            <p>Event kompetisi dan ujian khusus sesuai target</p>
          </div>
        </ScrollReveal>
        <div className="kc" id="kc">
          {events.map((e, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <article className={`kd ${e.c}`}>
                <div className="ki">
                  <span className="ph kp">
                    <Image src="/img/olimpiade.png" alt={e.t} fill style={{objectFit:'cover'}} />
                  </span>
                  <h3>{e.t}</h3>
                  <div className="dt">
                    <div>Buka Daftar<br/>1 Agustus {e.y}, 07:00</div>
                    <div>Tutup Daftar<br/>14 Oktober {e.y}, 23:59</div>
                    <div>Mulai Ujian<br/>24 Oktober {e.y}, 12:30</div>
                    <div>Ujian Ditutup<br/>24 Oktober {e.y}, 14:00</div>
                  </div>
                  <div className="gr">GRATIS</div>
                  <a className="pl" href="#">Pilih Paket Ini</a>
                </div>
                <span className="et">EVENT TERBATAS</span>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
