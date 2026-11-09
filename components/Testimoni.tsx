import ScrollReveal from './ScrollReveal'

export default function Testimoni() {
  const testimonials = [
    {
      text: '"[Kutipan asli peserta — minta izin tertulis sebelum dipasang]"',
      initial: 'A',
      name: '[Nama Peserta]',
      info: 'Siswa kelas 12 · [Asal Sekolah]'
    },
    {
      text: '"[Kutipan asli peserta — minta izin tertulis sebelum dipasang]"',
      initial: 'B',
      name: '[Nama Peserta]',
      info: 'Peserta AMO 2026 · [Asal Sekolah]'
    },
    {
      text: '"[Kutipan asli guru — minta izin tertulis sebelum dipasang]"',
      initial: 'C',
      name: '[Nama Guru]',
      info: 'Guru Matematika · [Asal Sekolah]'
    }
  ]

  return (
    <section id="testimoni" className="tes">
      <div className="orn">
        <b className="fs f2" style={{left:'96%',top:'28%',fontSize:30,animationDelay:'0s'}}>✦</b>
        <b className="fs f1" style={{left:'3%',top:'74%',fontSize:34,animationDelay:'1s'}}>○</b>
        <b className="fs f2" style={{left:'90%',top:'80%',fontSize:34,animationDelay:'.6s'}}>+</b>
      </div>
      <div className="w tsg">
        <ScrollReveal>
          <div>
            <small className="lb">KATA MEREKA</small>
            <h2 className="h o2 l">Dari peserta AMO &amp; tryout Ascendemy</h2>
          </div>
        </ScrollReveal>
        <div className="tgrid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <article className="tc">
                <p>{t.text}</p>
                <footer>
                  <span className="av">{t.initial}</span>
                  <div>
                    <b>{t.name}</b>
                    <small>{t.info}</small>
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
