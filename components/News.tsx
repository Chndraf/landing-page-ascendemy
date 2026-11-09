import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const newsItems = Array.from({length: 9}, (_, i) => ({
  id: i + 1,
  img: `/img/berita%20(${i + 1}).png`,
  title: `Berita ${i + 1}`
}))

export default function News() {
  return (
    <section id="news" className="news">
      <div className="orn">
        <b className="fs f1" style={{left:'3%',top:'14%',fontSize:30,animationDelay:'0s'}}>✦</b>
        <b className="fs f2" style={{left:'96%',top:'24%',fontSize:36,animationDelay:'.7s'}}>○</b>
        <b className="fs f1" style={{left:'92%',top:'80%',fontSize:30,animationDelay:'1.3s'}}>△</b>
        <b className="fs f2" style={{left:'4%',top:'76%',fontSize:36,animationDelay:'.4s'}}>+</b>
      </div>
      <div className="w ng2">
        <ScrollReveal>
          <span className="bdg nb2">
            <svg width="16" height="16"><use href="#np"/></svg>
            News &amp; Update
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="h b">Informasi Terbaru</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="ns">Ikuti perkembangan berita dan pembaruan sistem terbaru dari Ascendemy.</p>
        </ScrollReveal>
        <div className="mq">
          <div className="track">
            {[...newsItems, ...newsItems].map((item, i) => (
              <a key={i} className="nw ph" href="/berita">
                <Image src={item.img} alt={item.title} fill style={{objectFit:'cover'}} />
              </a>
            ))}
          </div>
        </div>
        <a href="/berita" className="btn b all">
          Lihat Selengkapnya 
          <svg width="32" height="20"><use href="#ar"/></svg>
        </a>
      </div>
    </section>
  )
}
