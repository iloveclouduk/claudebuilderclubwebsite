export default function JoinCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FDF8F3] to-[#F5EDE4]">
      {/* Video */}
      <div className="relative z-10 flex justify-center px-6 mb-16">
        <video
          className="w-full max-w-4xl rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/vid1.mp4"
        />
      </div>

      {/* Decorative illustrations - left side */}
      <div className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 hidden md:block opacity-60">
        <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Notebook */}
          <rect x="10" y="30" width="80" height="110" rx="6" stroke="#C4956A" strokeWidth="2" fill="none" />
          <line x1="30" y1="30" x2="30" y2="140" stroke="#C4956A" strokeWidth="1.5" />
          {/* Notebook lines */}
          <path d="M40 55 Q55 50 70 55" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M40 70 Q60 65 75 70" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M40 85 Q50 80 65 85" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M40 100 Q58 95 72 100" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Spiral binding */}
          {[40, 55, 70, 85, 100, 115, 130].map((y) => (
            <circle key={y} cx="30" cy={y} r="3" stroke="#C4956A" strokeWidth="1.2" fill="none" />
          ))}
          {/* Leaf */}
          <path d="M105 150 Q120 120 110 90" stroke="#8B9E7E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M105 150 Q130 130 120 100" stroke="#8B9E7E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M110 130 Q115 125 118 118" stroke="#8B9E7E" strokeWidth="1" fill="none" strokeLinecap="round" />
          {/* Small squiggle */}
          <path d="M20 160 Q30 155 25 165 Q20 175 30 170" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative illustrations - right side */}
      <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 hidden md:block opacity-60">
        <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Notebook */}
          <rect x="50" y="40" width="80" height="110" rx="6" stroke="#C4956A" strokeWidth="2" fill="none" />
          <line x1="110" y1="40" x2="110" y2="150" stroke="#C4956A" strokeWidth="1.5" />
          {/* Notebook lines */}
          <path d="M60 65 Q75 60 95 65" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M60 80 Q80 75 100 80" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M60 95 Q72 90 90 95" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Spiral binding */}
          {[50, 65, 80, 95, 110, 125, 140].map((y) => (
            <circle key={y} cx="110" cy={y} r="3" stroke="#C4956A" strokeWidth="1.2" fill="none" />
          ))}
          {/* Cloud / heart shape */}
          <path d="M20 60 Q25 45 35 50 Q45 40 50 55 Q55 45 60 55 Q65 50 62 65 Q55 75 40 70 Q25 75 20 60Z" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Small leaf */}
          <path d="M30 120 Q15 100 25 80" stroke="#8B9E7E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M30 120 Q10 105 18 88" stroke="#8B9E7E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Squiggle */}
          <path d="M110 165 Q120 160 115 170 Q110 180 120 175" stroke="#D4A574" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-anthropic heading-2 text-[#191919] leading-tight">
          Ready to build?
        </h2>
        <p className="mt-4 text-lg text-[#555] leading-relaxed">
          Join our community and start building the future of AI today.
        </p>
        <div className="mt-8">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-[#191919] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#333] transition-colors"
          >
            Join the Club
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
