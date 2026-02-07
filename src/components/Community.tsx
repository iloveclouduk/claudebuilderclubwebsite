const testimonials = [
  {
    quote:
      "The Builder Club completely changed how I think about AI. I went from being intimidated by AI to building production applications with Claude in just a few weeks.",
    name: "Sarah Chen",
    role: "Computer Science, Year 3",
    initials: "SC",
  },
  {
    quote:
      "The hackathons are incredible. Our team built an AI-powered accessibility tool that won first place and is now being piloted by the university's disability services.",
    name: "James Okonkwo",
    role: "Software Engineering, Year 2",
    initials: "JO",
  },
  {
    quote:
      "As a non-CS student, I was worried I wouldn't fit in. But the club is incredibly welcoming, and I've learned so much about prompt engineering and AI applications in healthcare.",
    name: "Priya Sharma",
    role: "Biomedical Sciences, Year 3",
    initials: "PS",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-[#8B6914]">Community</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#191919]">
            Hear from our members
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Students from all disciplines are building with Claude and shaping the future of AI at Northumbria.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4A574]/20 hover:shadow-md transition-all"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-[#D4A574]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
              <p className="text-gray-700 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C4956A] flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-medium text-[#191919] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners / Powered by */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">Powered by</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="font-bold text-sm text-gray-500">A</span>
              </div>
              <span className="font-semibold text-gray-500">Anthropic</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="font-bold text-sm text-gray-500">C</span>
              </div>
              <span className="font-semibold text-gray-500">Claude</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="font-bold text-sm text-gray-500">NU</span>
              </div>
              <span className="font-semibold text-gray-500">Northumbria University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
