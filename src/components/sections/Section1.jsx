export default function Section1() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-effect">
        <div className="hero-bg-blob"></div>
        <div className="hero-bg-blob"></div>
      </div>

      <div className="hero-content">
        {/* Avatar */}
        <div className="hero-avatar">
          <div className="hero-avatar-ring">
           <div className="hero-avatar-inner">
  <img src="/images/logo-ml.webp" alt="Logo Mobile Legends" className="hero-logo" />
</div>

          </div>
        </div>

        {/* Judul dan deskripsi */}
        <h1 className="animate-fade-in">Halo, Saya Krisna</h1>
        <p className="subtitle animate-fade-in-delay">
          Pemain & Penggemar Mobile Legends
        </p>
        <p className="description">
          Menguasai mekanik hero sejak Season 5 | Spesialisasi Marksman
        </p>

        {/* Statistik */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-value">3040</div>
            <div className="stat-label">Matches</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✨</div>
            <div className="stat-value">Mythical Immortal</div>
            <div className="stat-label">Rank</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎮</div>
            <div className="stat-value">65%</div>
            <div className="stat-label">Winrate All Season</div>
          </div>
        </div>

        {/* Gambar akun ML & hero favorit */}
        <div className="hero-images">
          <div className="hero-image-card">
            <img src="/images/akun.jpeg" alt="Akun ML Krisna" className="hero-image" />
            <p className="hero-image-label">Akun Mobile Legends</p>
          </div>

          <div className="hero-image-card">
            <img src="/images/hero.jpeg" alt="Hero Favorit Krisna" className="hero-image" />
            <p className="hero-image-label">Hero Favorit</p>
          </div>
        </div>

        <a href="#tentang" className="cta-button">
          Jelajahi Portofolio
        </a>
      </div>
    </section>
  );
}
