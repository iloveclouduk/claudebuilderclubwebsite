export default function JoinCTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FDF8F3] to-[#F5EDE4]">
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
