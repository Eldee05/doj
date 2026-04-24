// components/DOJSeal.jsx
// Renders the Department of Justice seal as an inline SVG

export default function DOJSeal() {
  const starAngles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Department of Justice Seal"
      role="img"
    >
      {/* Outer rings */}
      <circle cx="40" cy="40" r="38" fill="#002868" stroke="#BF0A30" strokeWidth="2" />
      <circle cx="40" cy="40" r="32" fill="#002868" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="26" fill="#003580" stroke="#FFD700" strokeWidth="0.8" />

      {/* Eagle body */}
      <ellipse cx="40" cy="43" rx="10" ry="8" fill="#FFD700" />

      {/* Wings */}
      <path d="M30 40 Q20 34 16 38 Q22 42 30 44Z" fill="#FFD700" />
      <path d="M50 40 Q60 34 64 38 Q58 42 50 44Z" fill="#FFD700" />

      {/* Eagle head */}
      <circle cx="40" cy="34" r="5" fill="#FFD700" />
      <circle cx="42" cy="33" r="1.2" fill="#002868" />

      {/* Shield */}
      <path d="M36 42 Q40 56 40 56 Q40 56 44 42Z" fill="#BF0A30" />
      <path d="M37 42 L40 52 L43 42Z" fill="#002868" />

      {/* Surrounding stars */}
      {starAngles.map((i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const radius = 29;
        return (
          <text
            key={i}
            x={40 + radius * Math.cos(angle)}
            y={40 + radius * Math.sin(angle)}
            fontSize="4"
            fill="#FFD700"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            ★
          </text>
        );
      })}

      {/* Bottom text */}
      <text
        x="40"
        y="72"
        fontSize="4.5"
        fill="#FFD700"
        textAnchor="middle"
        fontFamily="serif"
        letterSpacing="0.5"
      >
        DEPARTMENT OF JUSTICE
      </text>
    </svg>
  );
}
