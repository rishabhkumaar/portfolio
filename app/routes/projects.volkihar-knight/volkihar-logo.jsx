export function VolkiharLogo(props) {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="50" r="45" stroke="var(--primary)" strokeWidth="4" fill="none" opacity="0.4" />
      <circle cx="50" cy="50" r="30" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <circle cx="50" cy="20" r="8" fill="var(--primary)" />
      <circle cx="24" cy="65" r="8" fill="var(--primary)" />
      <circle cx="76" cy="65" r="8" fill="var(--primary)" />
      <path d="M50 20 L24 65 L76 65 Z" stroke="var(--primary)" strokeWidth="3" fill="none" />
    </svg>
  );
}
