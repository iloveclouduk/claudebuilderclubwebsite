export default function Footer() {
  return (
    <footer className="bg-[#191919] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C4956A] flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">
                Builder Club
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Claude Builder Club Northumbria. Building the future of AI, responsibly.
            </p>
          </div>

          {/* Club */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Club</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#capabilities" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">What We Build</a></li>
              <li><a href="#events" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Events</a></li>
              <li><a href="#community" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-500 text-sm">Anthropic API Docs</span></li>
              <li><span className="text-gray-500 text-sm">Claude Documentation</span></li>
              <li><span className="text-gray-500 text-sm">AI Safety Research</span></li>
              <li><span className="text-gray-500 text-sm">Prompt Library</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-500 text-sm">Discord</span></li>
              <li><span className="text-gray-500 text-sm">GitHub</span></li>
              <li><span className="text-gray-500 text-sm">Twitter / X</span></li>
              <li><span className="text-gray-500 text-sm">LinkedIn</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2026 Claude Builder Club Northumbria. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with Claude &middot; Powered by Anthropic
          </p>
        </div>
      </div>
    </footer>
  );
}
