export default function SocialIcon({ href, icon, label, className }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`social-icon ${className}`}
    >
      <div className="social-icon-inner">
        {typeof icon === "string" && icon.endsWith(".svg") ? (
          <img src={icon} alt={label} className="social-icon-img" />
        ) : (
          icon
        )}
      </div>
      <span className="social-label">{label}</span>
    </a>
  )
}
