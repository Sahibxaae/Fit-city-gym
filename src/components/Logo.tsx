import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Scalable SVG Vector Matching the Business Logo */}
      <svg
        viewBox="0 0 860 320"
        className={`${heights[size]} w-auto object-contain transition-transform hover:scale-105`}
        aria-label="FIT CITY GYM UNISEX Logo"
      >
        <defs>
          <filter id="cleanShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* EMBLEM */}
        <g id="emblem" transform="translate(165, 168)" filter="url(#cleanShadow)">
          <circle cx="0" cy="4" r="56" fill="none" stroke="#FFD000" strokeWidth="2.5" strokeDasharray="14 8" opacity="0.8" />

          {/* Left Wing */}
          <g id="wing-left">
            <path d="M -25,-28 L -142,-74 L -116,-44 L -132,-38 L -102,-14 L -116,-8 L -84,12 L -30,22 Z" fill="#F59E0B" />
            <path d="M -24,-24 L -134,-66 L -108,-38 L -82,-30 L -122,-32 L -94,-10 L -70,-6 L -106,-4 L -78,12 L -56,14 L -86,20 L -54,30 L -26,26 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M -34,-18 L -102,-42 M -34,-6 L -88,-16 M -34,6 L -72,4" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Right Wing (Mirrored) */}
          <g id="wing-right" transform="scale(-1, 1)">
            <path d="M -25,-28 L -142,-74 L -116,-44 L -132,-38 L -102,-14 L -116,-8 L -84,12 L -30,22 Z" fill="#F59E0B" />
            <path d="M -24,-24 L -134,-66 L -108,-38 L -82,-30 L -122,-32 L -94,-10 L -70,-6 L -106,-4 L -78,12 L -56,14 L -86,20 L -54,30 L -26,26 Z" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M -34,-18 L -102,-42 M -34,-6 L -88,-16 M -34,6 L -72,4" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Kettlebell */}
          <g id="kettlebell">
            <path d="M -25,-14 L -29,-46 C -29,-66 29,-66 29,-46 L 25,-14 L 14,-14 L 17,-44 C 17,-54 -17,-54 -17,-44 L -14,-14 Z" fill="#334155" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="0" cy="18" r="38" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
            <path d="M -25,-7 A 34,34 0 0,1 25,-7" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <polygon points="0,4 12,18 0,32 -12,18" fill="none" stroke="#FFD000" strokeWidth="2" />
            {/* Red GYM badge */}
            <rect x="-21" y="-47" width="42" height="19" rx="9.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.8" />
            <text x="0" y="-33.5" fontFamily="'Montserrat', 'Arial Black', sans-serif" fontWeight="900" fontStyle="italic" fontSize="11" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">
              GYM
            </text>
          </g>
        </g>

        {/* TYPOGRAPHY */}
        <g id="typography" filter="url(#cleanShadow)">
          <polygon points="335,74 825,74 817,80 327,80" fill="#FFD000" />
          <text x="330" y="168" fontFamily="'Montserrat', 'Impact', sans-serif" fontWeight="900" fontStyle="italic" fontSize="74" letterSpacing="-1">
            <tspan fill="#FFFFFF">FIT CITY </tspan>
            <tspan fill="#FFD000">GYM</tspan>
          </text>
          <g transform="translate(0, 4)">
            <polygon points="325,193 645,193 640,198 320,198" fill="#FFFFFF" opacity="0.4" />
            <g transform="translate(658, 180) skewX(-14)">
              <rect x="0" y="0" width="154" height="32" rx="4" fill="#FFD000" />
              <text x="77" y="23" fontFamily="'Montserrat', 'Arial Black', sans-serif" fontWeight="900" fontSize="19" fill="#0A0C10" textAnchor="middle" letterSpacing="4">
                UNISEX
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
