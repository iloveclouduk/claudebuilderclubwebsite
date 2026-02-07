export default function JoinCTA() {
  return (
    <section id="join" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#191919] px-8 py-20 sm:px-16 sm:py-28">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C4956A]/15 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to build the
              <br />
              <span className="bg-gradient-to-r from-[#D4A574] to-[#E8C9A8] bg-clip-text text-transparent">
                future of AI?
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Join Claude Builder Club Northumbria and be part of a community that&apos;s building
              with the most capable and safest AI in the world. All skill levels welcome.
            </p>

            {/* Sign up form */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your university email"
                className="w-full rounded-full bg-white/10 border border-white/10 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/50 focus:border-transparent text-sm"
              />
              <button className="w-full sm:w-auto whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4956A] px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#D4A574]/20">
                Join Now
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Open to all Northumbria University students. No experience required.
            </p>

            {/* Quick links */}
            <div className="mt-12 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Northumbria University, Newcastle</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Weekly meetups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
