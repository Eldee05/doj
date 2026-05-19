// components/DOJSeal.jsx
// Renders the Department of Justice seal as an inline SVG

export default function DOJSeal() {
  const starAngles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="logo">
      <img src="/assets/dojvns-logo.png" alt="Department of Justice Seal" />
    </div>
  );
}
