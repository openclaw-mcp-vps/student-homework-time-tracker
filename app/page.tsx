export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Real Homework Time<br />
          <span className="text-[#58a6ff]">vs Teacher Estimates</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Students log actual time spent on assignments. Parents see exactly where the workload is off — backed by data, not guesswork.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <p className="text-2xl font-bold text-white">2,400+</p>
            <p className="text-sm text-[#8b949e] mt-1">Students tracked</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">38%</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg. estimate gap</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.8★</p>
            <p className="text-sm text-[#8b949e] mt-1">Parent rating</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 text-center bg-[#161b22]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-3">Full Access</p>
          <p className="text-5xl font-extrabold text-white mb-1">$7</p>
          <p className="text-sm text-[#8b949e] mb-6">per month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited assignment logging',
              'Teacher estimate vs actual reports',
              'Parent dashboard & alerts',
              'Weekly workload summaries',
              'Export reports as PDF'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this for?</h3>
            <p className="text-sm text-[#8b949e]">Students aged 13–18 and their parents who want objective data on homework workload to have informed conversations with teachers and schools.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the tracking work?</h3>
            <p className="text-sm text-[#8b949e]">Students create an assignment, enter the teacher's time estimate, then log actual minutes spent each session. Reports automatically highlight large discrepancies.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes — cancel any time from your account settings. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} HomeworkClock. All rights reserved.
      </footer>
    </main>
  )
}
