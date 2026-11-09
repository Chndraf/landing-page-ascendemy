export default function Footer() {
  return (
    <footer className="ft">
      <div className="orn">
        <b className="fs f3" style={{left:'2%',top:'12%',fontSize:26,animationDelay:'0s'}}>✦</b>
        <b className="fs f3" style={{left:'97%',top:'60%',fontSize:30,animationDelay:'1s'}}>✦</b>
      </div>
      <div className="w fw2">
        <div className="fg">
          <div className="fc1">
            <h3>Ascendemy.id</h3>
            <p>Platform CBT terpercaya untuk ujian<br/>dan sertifikasi online</p>
            <div className="soc">
              <a href="https://www.facebook.com/share/1CLzDDwzfW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/ascendemy?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/ascendemy.ofc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/ascendemy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.tiktok.com/@ascendemy.id" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.youtube.com/@Ascendemy_Official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="fc2">
            <h4>Menu</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#kompetisi">Kompetisi dan Olimpiade</a></li>
              <li><a href="#tryout">Tryout dan Simulasi Ujian</a></li>
              <li><a href="/latihan">Latihan Soal</a></li>
              <li><a href="/berita">Update Berita</a></li>
            </ul>
          </div>
          <div className="fc3">
            <h4>Kontak</h4>
            <ul>
              <li style={{display:'flex',alignItems:'start',gap:'8px'}}>
                <i className="fas fa-envelope" style={{marginTop:'2px',flexShrink:0}}></i>
                <a href="mailto:ascendemyofficial@gmail.com">ascendemyofficial@gmail.com</a>
              </li>
              <li style={{display:'flex',alignItems:'start',gap:'8px'}}>
                <i className="fas fa-phone" style={{marginTop:'2px',flexShrink:0}}></i>
                <a href="tel:+6285655560845">+62 856-5556-0845</a>
              </li>
              <li className="ad" style={{display:'flex',alignItems:'start',gap:'8px'}}>
                <i className="fas fa-map-marker-alt" style={{marginTop:'2px',flexShrink:0}}></i>
                <span>Pusat Inkubator Bisnis dan Teknologi (PIBT, Lantai Ground, Gedung Rektorat Unesa Kampus 2) Jl. Raya Kampus Unesa, Lidah Wetan, Kec. Lakarsantri, Surabaya, Jawa Timur 60213</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Partnerships</h4>
          <div className="pay big">
            <span className="ph un">
              <img src="/img/Unesa.png" alt="Unesa" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </span>
            <span className="ph un">
              <img src="/img/PIBT.png" alt="PIBT" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </span>
            <span className="ph un">
              <img src="/img/Datanusa.png" alt="Datanusa" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </span>
          </div>
        </div>
        <div className="vrow">
          <div>
            <h4>Metode Pembayaran</h4>
            <div className="pay" style={{display:'flex',flexWrap:'wrap',gap:'12px',padding:'12px 20px',alignItems:'center'}}>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/QRIS_Logo.svg/330px-QRIS_Logo.svg.png" alt="QRIS" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg" alt="BSI" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" alt="Mandiri" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_%282004%29.svg" alt="BNI" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg" alt="BRI" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Permata_Bank_%282024%29.svg" alt="Permata Bank" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'80px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg" alt="CIMB Niaga" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
              <div style={{width:'48px',height:'32px',background:'white',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px'}}>
                <img src="https://lelogama.go-jek.com/service_icon_text/gopay.svg" alt="GoPay" style={{maxHeight:'100%',maxWidth:'100%',objectFit:'contain'}} />
              </div>
            </div>
          </div>
          <div className="vis">
            <svg width="20" height="20"><use href="#eye"/></svg>
            <strong>2.106</strong>
            <span>Total Pengunjung</span>
          </div>
        </div>
        <div className="cp">
          <p>© 2026 Ascendemy.id. All rights reserved.</p>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Panduan</a></li>
            <li><a href="#">Syarat &amp; Ketentuan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
