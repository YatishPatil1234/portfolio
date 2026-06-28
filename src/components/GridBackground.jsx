export default function GridBackground() {
  return (
    <div aria-hidden className="hero-bg">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow hero-bg-glow--center" />
      <div className="hero-bg-glow hero-bg-glow--right" />
      <div className="hero-bg-fade" />
    </div>
  );
}
