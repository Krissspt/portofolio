const heroes = [
  { 
    name: 'Granger', 
    role: 'Marksman', 
    image: '/images/granger.jpg',
    gradient: 'linear-gradient(to top, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6))',
    description: 'Marksman dengan fokus burst damage tinggi dan kemampuan sebagai finisher mematikan di late game.'
  },
  { 
    name: 'Natan', 
    role: 'Marksman / Mage', 
    image: '/images/natan.jpg',
    gradient: 'linear-gradient(to top, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6))',
    description: 'Marksman/Mage unik dengan serangan magic dan kemampuan menciptakan klon untuk menggandakan serangan.'
  },
  { 
    name: 'Chou', 
    role: 'Fighter', 
    image: '/images/chou.jpg',
    gradient: 'linear-gradient(to top, rgba(249, 115, 22, 0.6), rgba(239, 68, 68, 0.6))',
    description: 'Hero Fighter dengan mobilitas tinggi dan kemampuan crowd control kuat, ahli dalam mengunci target lawan.'
  },
]

export default function Section3() {
  return (
    <section id="heroes" className="heroes">
      <div className="container">
        <div className="section-header">
          <h2>Hero Favorit</h2>
          <div className="section-divider"></div>
          <p style={{ color: '#9ca3af', marginTop: '15px' }}>
            Master dalam mekanik dan strategi
          </p>
        </div>

        <div className="hero-grid">
          {heroes.map((hero, idx) => (
            <div className="hero-card" key={idx}>
              <div className="hero-card-image">
                <img src={hero.image} alt={hero.name} />
                <div 
                  className="hero-card-overlay" 
                  style={{ background: hero.gradient }}
                ></div>
                <div className="hero-card-badge">{hero.role}</div>
              </div>
              
              <div className="hero-card-content">
                <h3>{hero.name}</h3>
                <p className="description">{hero.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
