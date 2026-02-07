export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FDFAF6] via-[#FBF5ED] to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #191919 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C4956A]/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8D5C0]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#D4A574] animate-pulse" />
          <span className="text-sm font-medium text-[#8B6914]">Northumbria University</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-[#191919] leading-[1.05]">
          Claude Builder
          <br />
          <span className="bg-gradient-to-r from-[#D4A574] via-[#C4956A] to-[#B8845A] bg-clip-text text-transparent">
            Club Northumbria
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are a community of builders, researchers, and creators exploring the frontier of
          AI safety and capability. Building with Claude to shape the future of human-AI collaboration.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="group inline-flex items-center justify-center rounded-full bg-[#191919] px-8 py-3.5 text-base font-medium text-white hover:bg-[#333] transition-all hover:shadow-lg hover:shadow-black/10"
          >
            Join the Club
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3.5 text-base font-medium text-[#191919] hover:bg-gray-50 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#191919]">50+</div>
            <div className="text-sm text-gray-500 mt-1">Active Members</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-3xl sm:text-4xl font-bold text-[#191919]">20+</div>
            <div className="text-sm text-gray-500 mt-1">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#191919]">10+</div>
            <div className="text-sm text-gray-500 mt-1">Events Hosted</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
