import SocialIcon from '@/components/SocialIcon'

export default function Section4() {
  return (
    <section id="kontak" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Hubungi Saya</h2>
          <div className="section-divider"></div>
          <p>Tertarik main bareng atau berdiskusi? Ayo hubungi saya!</p>
        </div>

        <div className="social-icons">
          <SocialIcon 
            href="https://www.instagram.com/krissspt_/"
            icon="/images/instagram.svg"
            label="Instagram"
            className="instagram"
          />
          <SocialIcon 
            href="https://discord.gg/HuhxjEf5"
            icon="/images/discord.svg"
            label="Discord"
            className="discord"
          />
          <SocialIcon 
            href="https://www.tiktok.com/@abcdkriss/"
            icon="/images/tiktok.svg"
            label="TikTok"
            className="tiktok"
          />
        </div>
      </div>
    </section>
  )
}
