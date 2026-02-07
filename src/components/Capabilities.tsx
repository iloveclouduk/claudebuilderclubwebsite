const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI Application Development",
    description:
      "Build production-ready applications powered by Claude. From chatbots to code assistants, we build real software that solves real problems.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "AI Safety Research",
    description:
      "Explore the frontiers of AI alignment and safety. We study Constitutional AI, RLHF, and responsible deployment practices pioneered by Anthropic.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Prompt Engineering",
    description:
      "Master the art and science of communicating with AI. Learn advanced prompting techniques, chain-of-thought reasoning, and system prompt design.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "RAG & Knowledge Systems",
    description:
      "Build retrieval-augmented generation systems. Connect Claude to your own data sources, documents, and databases for powerful contextual AI.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.17 7.42M6.32 10.07l8.21 8.21m-1.67-14.35l5.1 5.1m0 0l3.15 3.15M17.57 10.07l-8.21-8.21" />
      </svg>
    ),
    title: "AI Agents & Tool Use",
    description:
      "Create autonomous AI agents that can use tools, browse the web, write code, and accomplish complex multi-step tasks with Claude's agentic capabilities.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community & Hackathons",
    description:
      "Collaborate with fellow builders in hackathons, study groups, and project sprints. Network with Anthropic engineers and the global Claude community.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-[#8B6914]">What We Build</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#191919]">
            Explore the frontier of AI
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From safety research to production applications, our members work across the full
            spectrum of AI development with Claude at the centre.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4A574]/30 transition-all hover:shadow-lg hover:shadow-[#D4A574]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] mb-5 group-hover:bg-[#D4A574]/20 transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#191919] mb-3">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
