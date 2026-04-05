import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Me By Believe — Organisez votre vie avec la methode GTD",
  description:
    "Application de productivite GTD multi-plateforme. Capturez vos idees, clarifiez vos priorites et passez a l'action. Disponible sur Web, iOS et Android.",
  openGraph: {
    title: "New Me By Believe — GTD Productivity App",
    description:
      "Capture, clarify, organize and act. The GTD method made simple. Available on Web, iOS & Android.",
    url: "https://geekette-parisienne.vercel.app/newme",
    type: "website",
  },
};

const features = [
  {
    icon: "📥",
    title: "Capture",
    titleFr: "Capturez",
    desc: "Dump everything into your inbox. One thought = one task.",
    descFr: "Videz votre tete dans l'inbox. Une idee = une tache.",
  },
  {
    icon: "🧠",
    title: "Clarify",
    titleFr: "Clarifiez",
    desc: "Process each item: trash, someday, delegate, or do it!",
    descFr: "Traitez chaque element : poubelle, un jour, deleguer ou a faire !",
  },
  {
    icon: "📋",
    title: "Organize",
    titleFr: "Organisez",
    desc: "Group tasks into projects. Context, effort, priority: all set.",
    descFr: "Regroupez vos taches en projets. Contexte, effort, priorite : tout est clair.",
  },
  {
    icon: "⚡",
    title: "Act",
    titleFr: "Agissez",
    desc: "Your next actions sorted and ready. One at a time, no stress!",
    descFr: "Vos prochaines actions triees et pretes. Une a la fois, sans stress !",
  },
];

const highlights = [
  { icon: "🎤", text: "Voice input", textFr: "Saisie vocale" },
  { icon: "📅", text: "Google Calendar & Outlook export", textFr: "Export Google Calendar & Outlook" },
  { icon: "🔁", text: "Recurring tasks", textFr: "Taches recurrentes" },
  { icon: "👥", text: "Delegation & tracking", textFr: "Delegation et suivi" },
  { icon: "📊", text: "Projects with progress", textFr: "Projets avec avancement" },
  { icon: "🌍", text: "Bilingual FR / EN", textFr: "Bilingue FR / EN" },
  { icon: "📱", text: "Web, iOS & Android", textFr: "Web, iOS & Android" },
  { icon: "🆓", text: "14-day free trial", textFr: "Essai gratuit 14 jours" },
];

const plans = [
  {
    name: "Free / Gratuit",
    price: "0€",
    period: "",
    features: ["1 project", "5 tasks/day", "Basic features"],
    featuresFr: ["1 projet", "5 taches/jour", "Fonctions de base"],
    color: "border-gray-200",
    bg: "bg-white",
  },
  {
    name: "Standard",
    price: "1.99€",
    period: "/month",
    features: ["5 projects", "Unlimited tasks", "Voice input", "Calendar export", "Delegation"],
    featuresFr: ["5 projets", "Taches illimitees", "Saisie vocale", "Export calendrier", "Delegation"],
    color: "border-indigo-500",
    bg: "bg-indigo-50",
    popular: true,
  },
  {
    name: "Premium",
    price: "4.99€",
    period: "/month",
    features: ["Unlimited projects", "Recurring tasks", "Custom contexts", "Everything in Standard"],
    featuresFr: ["Projets illimites", "Taches recurrentes", "Contextes personnalises", "Tout le Standard"],
    color: "border-amber-500",
    bg: "bg-amber-50",
  },
];

export default function NewMePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-extrabold text-xl gradient-text">
            GP
          </a>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a
              href="https://new-me-by-believe.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Try it free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">🦋</div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            New Me By Believe
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mt-4 font-medium">
            Organize your life with the GTD method
          </p>
          <p className="text-lg text-purple-300/70 mt-1 italic">
            Organisez votre vie avec la methode GTD
          </p>
          <p className="text-purple-200/60 mt-6 max-w-2xl mx-auto text-lg">
            Capture your ideas, clarify your priorities and take action.
            Available on Web, iOS & Android.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://new-me-by-believe.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
            >
              Try it free — 14 days
            </a>
            <a
              href="#features"
              className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Discover features
            </a>
          </div>
          <div className="flex justify-center gap-10 mt-14">
            <div>
              <div className="text-3xl font-black text-white">GTD</div>
              <div className="text-purple-300 text-sm">Methodology</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">3</div>
              <div className="text-purple-300 text-sm">Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">14</div>
              <div className="text-purple-300 text-sm">Days free</div>
            </div>
          </div>
        </div>
      </section>

      {/* GTD Steps */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              The GTD Method, simplified
            </h2>
            <p className="text-gray-500 mt-3 text-lg">La methode GTD, simplifiee</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{f.icon}</div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-3">
                  Step {i + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{f.title}</h3>
                <p className="text-gray-400 text-sm italic">{f.titleFr}</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.desc}</p>
                <p className="text-gray-400 text-sm italic mt-1">{f.descFr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Everything you need
            </h2>
            <p className="text-gray-500 mt-3 text-lg">Tout ce dont vous avez besoin</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="card-hover text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{h.text}</div>
                <div className="text-gray-400 text-xs italic mt-1">{h.textFr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Simple pricing
            </h2>
            <p className="text-gray-500 mt-3 text-lg">Des tarifs simples et transparents</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 ${plan.color} ${plan.bg} p-8 ${plan.popular ? "shadow-xl scale-105" : "shadow-sm"} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full">
                    Most popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <span>
                        <span className="text-gray-700">{f}</span>
                        <span className="text-gray-400 italic text-xs block">{plan.featuresFr[i]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://new-me-by-believe.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block text-center py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to organize your life?
          </h2>
          <p className="text-purple-200 text-lg mb-2">
            Start your 14-day free trial today. No credit card required.
          </p>
          <p className="text-purple-300/70 text-base italic mb-8">
            Commencez votre essai gratuit de 14 jours. Sans carte bancaire.
          </p>
          <a
            href="https://new-me-by-believe.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 text-center">
        <p className="text-gray-500 text-sm">
          New Me By Believe &mdash; by{" "}
          <a href="/" className="text-purple-400 hover:text-purple-300">Geekette Parisienne</a>
        </p>
        <div className="flex justify-center gap-6 mt-3 text-xs text-gray-600">
          <a href="https://new-me-by-believe.vercel.app/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="mailto:geeketteparisienne@gmail.com" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
