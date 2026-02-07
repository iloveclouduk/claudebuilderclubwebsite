const events = [
  {
    date: "Feb 15, 2026",
    title: "Claude API Workshop: Build Your First AI App",
    description:
      "A hands-on workshop where you'll build a fully functional AI application using the Anthropic API and Claude. No prior AI experience needed.",
    tag: "Workshop",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    date: "Feb 28, 2026",
    title: "AI Safety Reading Group: Constitutional AI",
    description:
      "Deep dive into Anthropic's Constitutional AI paper. We'll discuss the principles behind Claude's training and implications for safe AI development.",
    tag: "Study Group",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    date: "Mar 8, 2026",
    title: "Builder Club Hackathon: AI for Education",
    description:
      "48-hour hackathon focused on building AI tools for education. Teams will compete to build the most innovative Claude-powered learning tool.",
    tag: "Hackathon",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    date: "Mar 20, 2026",
    title: "Guest Speaker: Anthropic Engineering Team",
    description:
      "Hear directly from Anthropic engineers about the latest developments in Claude, the API roadmap, and career opportunities in AI safety.",
    tag: "Talk",
    tagColor: "bg-green-50 text-green-700 border-green-100",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left - Header */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-[#8B6914]">Upcoming Events</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#191919] leading-tight">
              Learn, build,
              <br />
              and connect
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Regular workshops, hackathons, reading groups, and speaker events. There&apos;s
              always something happening at the Builder Club.
            </p>
            <a
              href="#join"
              className="mt-8 inline-flex items-center gap-2 text-[#191919] font-medium hover:gap-3 transition-all"
            >
              View all events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right - Event cards */}
          <div className="space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="group relative bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 hover:bg-white hover:border-[#D4A574]/20 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-medium text-gray-400">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#191919] group-hover:text-[#D4A574] transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${event.tagColor}`}>
                        {event.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-[#D4A574] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
