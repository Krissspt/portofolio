export default function Section2() {
  return (
    <section id="tentang" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Tentang Saya</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <p>
            Saya adalah pemain Mobile Legends sejak{" "}
            <span className="highlight">Season 5</span>. 
            Perjalanan saya dimulai dari rank Warrior hingga mencapai{" "}
            <span className="highlight-purple">Mythical Immortal{" "}</span> 
             dengan dedikasi dan latihan yang konsisten.
          </p>

          <p>
            Saya menyukai hero seperti{" "}
            <span className="highlight">Granger</span> dan{" "}
            <span className="highlight-purple">Natan</span> karena gameplay-nya
            yang cepat, menantang, dan membutuhkan mekanik tinggi. 
            Menguasai mekanik Granger dan Natan adalah pencapaian yang saya banggakan.
          </p>

          <p>
            Selain bermain, saya juga tertarik membuat desain dan konten bertema ML. 
            Saya percaya bahwa Mobile Legends bukan hanya game, 
            tapi juga seni strategi dan kerja tim yang luar biasa.
          </p>
        </div>

        {/* 🏆 Bagian Foto Prestasi */}
        <div className="prestasi-section">
          <h3>Prestasi & Piala</h3>
          <div className="prestasi-gallery">
            <div className="prestasi-item">
              <img src="/images/piala1.jpeg" alt="Piala Turnamen" />
              <p>Juara 1 Turnamen UNIKA</p>
            </div>

            <div className="prestasi-item">
              <img src="/images/piala2.jpeg" alt="Sertifikat Kejuaraan" />
              <p>Juara 3 STIE Total Win</p>
            </div>

            <div className="prestasi-item">
              <img src="/images/piala3.jpeg" alt="Team Achievement" />
              <p>Juara 3 Navination Kudus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
