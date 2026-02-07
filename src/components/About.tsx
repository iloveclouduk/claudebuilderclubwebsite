export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-[#8B6914]">Our Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#191919] leading-tight">
              Building AI that is
              <br />
              <span className="bg-gradient-to-r from-[#D4A574] to-[#B8845A] bg-clip-text text-transparent">
                safe and beneficial
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Claude Builder Club Northumbria is the official university chapter dedicated to
              exploring, building, and innovating with Anthropic&apos;s Claude AI. We believe in
              responsible AI development that puts safety first while pushing the boundaries of
              what&apos;s possible.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our members work on real projects, participate in hackathons, and contribute to
              the broader conversation around AI safety and alignment &mdash; all while building
              practical skills for the future of technology.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                "Hands-on experience building with Claude and the Anthropic API",
                "Weekly workshops on AI safety, prompt engineering, and development",
                "Direct connection to the Anthropic developer community",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#D4A574]/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4A574]" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#FDFAF6] to-[#F5EDE0] rounded-3xl p-10 border border-[#E8D5C0]/50">
              {/* Anthropic-style conversation mockup */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C4956A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">C</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md px-5 py-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Hello! I&apos;m Claude. How can I help the Builder Club today?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#191919] rounded-2xl rounded-tr-md px-5 py-3">
                    <p className="text-sm text-white">
                      Help us build an AI-powered study assistant for Northumbria students.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-bold text-xs">NU</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C4956A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">C</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md px-5 py-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Great idea! Let&apos;s start by designing the architecture. We&apos;ll use the Claude API
                      with RAG to create a context-aware assistant that understands your course materials...
                    </p>
                  </div>
                </div>
              </div>

              {/* Input mockup */}
              <div className="mt-8 flex items-center bg-white rounded-xl border border-gray-200 px-4 py-3">
                <span className="text-sm text-gray-400 flex-1">Ask Claude anything...</span>
                <div className="w-8 h-8 rounded-lg bg-[#191919] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4A574]/5 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C4956A]/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
