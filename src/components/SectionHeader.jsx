export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <header
      className={`section-header ${centered ? "section-header--center" : "section-header--left"} ${className}`}
    >
      {label && (
        <div className="section-eyebrow">
          <span className="section-eyebrow-line" aria-hidden />
          <p className="section-label">{label}</p>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </header>
  );
}
