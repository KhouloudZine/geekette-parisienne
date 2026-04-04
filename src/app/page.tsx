const appsInProd = [
  {
    name: "Trainify",
    fr: "Plateforme e-learning pour les méthodologies agiles et la gestion de projet",
    en: "E-learning platform for agile methodologies and project management",
    tech: ["Next.js", "Flutter", "Firebase"],
    url: "https://agile-pm-web.vercel.app",
    color: "from-indigo-500 to-blue-500",
    emoji: "🎓",
  },
  {
    name: "MaLicorne Web",
    fr: "Plateforme éducative pour enfants avec 7 apps intégrées et abonnement Stripe",
    en: "Educational platform for kids with 7 integrated apps and Stripe subscription",
    tech: ["Next.js", "Firebase", "Stripe"],
    url: "https://malicorne-web.vercel.app",
    color: "from-purple-500 to-pink-500",
    emoji: "🦄",
  },
  {
    name: "New Me By Believe",
    fr: "Application de développement personnel multi-plateforme",
    en: "Cross-platform personal development app",
    tech: ["Expo", "React Native", "Firebase"],
    color: "from-fuchsia-500 to-purple-500",
    emoji: "🦋",
  },
  {
    name: "MyMenu By Health & Co",
    fr: "Application de recettes multi-cuisine pour manger sain",
    en: "Multi-cuisine recipe app for healthy eating",
    tech: ["Flutter", "Firebase"],
    url: "https://my-menu-health-co.web.app",
    color: "from-green-500 to-emerald-500",
    emoji: "🍽️",
  },
];

const appsOnStore = [
  {
    name: "MyConjugaison By MaLicorne",
    fr: "Entraînement ludique à la conjugaison française",
    en: "Fun French verb conjugation practice",
    tech: ["Flutter"],
    color: "from-yellow-500 to-amber-500",
    emoji: "📝",
  },
  {
    name: "MyMultiplication By MaLicorne",
    fr: "Apprendre les tables de multiplication en s'amusant",
    en: "Learn multiplication tables through play",
    tech: ["Flutter"],
    color: "from-orange-500 to-red-500",
    emoji: "✖️",
  },
  {
    name: "MyDictée By MaLicorne",
    fr: "Progresser en orthographe grâce à la dictée interactive",
    en: "Improve spelling with interactive dictation",
    tech: ["Flutter"],
    color: "from-pink-500 to-rose-500",
    emoji: "📖",
  },
];

const appsPending = [
  {
    name: "Hassanet Addicted",
    fr: "Gamification des bonnes actions en Islam",
    en: "Gamification of good deeds in Islam",
    tech: ["Flutter", "Supabase"],
    color: "from-amber-500 to-orange-500",
    emoji: "✨",
  },
  {
    name: "Ramadan Spirits",
    fr: "Horaires de prière, lecteur Coran, boussole Qibla",
    en: "Prayer times, Quran reader, Qibla compass",
    tech: ["Flutter"],
    color: "from-teal-500 to-cyan-500",
    emoji: "🕌",
  },
  {
    name: "Second Chance By Re Cycle",
    fr: "Gestion de stock de vêtements d'occasion",
    en: "Second-hand clothing inventory management",
    tech: ["Flutter", "Supabase"],
    color: "from-lime-500 to-green-500",
    emoji: "♻️",
  },
  {
    name: "Carnet de Santé Familial",
    fr: "Carnet de santé numérique pour toute la famille",
    en: "Digital family health record",
    tech: ["Flutter"],
    color: "from-red-500 to-rose-500",
    emoji: "🏥",
  },
  {
    name: "Rééducation at Home",
    fr: "Gestion de programmes de rééducation à domicile",
    en: "Home rehabilitation program management",
    tech: ["Flutter", "Firebase"],
    color: "from-sky-500 to-blue-500",
    emoji: "🏋️",
  },
  {
    name: "Virtual Fountain",
    fr: "Explorez les fontaines du monde et faites un vœu",
    en: "Explore the world's fountains and make a wish",
    tech: ["Flutter"],
    color: "from-cyan-500 to-indigo-500",
    emoji: "⛲",
  },
];

const appsInDev = [
  {
    name: "Compet By Together",
    fr: "Application de gestion de compétitions sportives",
    en: "Sports competition management app",
    tech: ["Flutter", "Next.js", "Firebase"],
    color: "from-violet-500 to-indigo-500",
    emoji: "🏆",
  },
  {
    name: "DataCo",
    fr: "Projet data & analytics",
    en: "Data & analytics project",
    tech: ["Flutter", "Firebase"],
    color: "from-slate-500 to-gray-500",
    emoji: "📊",
  },
];

type App = {
  name: string;
  fr: string;
  en: string;
  tech: string[];
  url?: string;
  color: string;
  emoji: string;
};

function AppCard({ app }: { app: App }) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className={`h-2 bg-gradient-to-r ${app.color}`} />
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{app.emoji}</span>
          <div>
            <h3 className="font-bold text-lg text-dark">{app.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{app.en}</p>
            <p className="text-gray-400 text-sm italic">{app.fr}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {app.tech.map((tc) => (
            <span
              key={tc}
              className="px-3 py-1 bg-gray-soft text-xs font-medium text-gray-600 rounded-full"
            >
              {tc}
            </span>
          ))}
        </div>
        {app.url && (
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View / Voir &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  fr,
  en,
  subFr,
  subEn,
}: {
  fr: string;
  en: string;
  subFr: string;
  subEn: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
        {en} <span className="text-gray-300 font-light mx-2">/</span>{" "}
        <span className="text-gray-400 font-bold">{fr}</span>
      </h2>
      <p className="text-gray-500 mt-3 text-lg">{subEn}</p>
      <p className="text-gray-400 mt-1 text-base italic">{subFr}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-extrabold text-xl gradient-text">GP</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-primary transition-colors">
              About / À propos
            </a>
            <a href="#apps" className="hover:text-primary transition-colors">
              Apps / Applications
            </a>
            <a href="#stack" className="hover:text-primary transition-colors">
              Stack
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-float inline-block mb-6">
            <img
              src="/geekette.png"
              alt="Geekette Parisienne"
              className="w-28 h-28 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Geekette Parisienne
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mt-4 font-medium">
            PhD in Computer Science · Data Scientist · Engineer
          </p>
          <p className="text-lg text-indigo-300/70 mt-1 italic">
            Docteur en Informatique · Data Scientist · Ingénieure
          </p>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about data, IT and innovation. Sporty mom, leading a
            digital program within a major corporation. I live life at full speed
            and love personal development.
          </p>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-base italic leading-relaxed">
            Passionnée par la data, l{"'"}IT et l{"'"}innovation. Maman
            sportive, responsable d{"'"}un programme digital au sein d{"'"}un
            grand groupe. Je vis à 1000 à l{"'"}heure et j{"'"}adore le
            développement personnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#apps"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Discover my apps / Découvrir mes apps
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-black text-white">15+</div>
              <div className="text-indigo-300 text-sm">Apps / Applications</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">5+</div>
              <div className="text-indigo-300 text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">3</div>
              <div className="text-indigo-300 text-sm">
                Platforms / Plateformes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            fr="Qui suis-je ?"
            en="Who am I?"
            subFr="Une passionnée du digital qui transforme les idées en applications"
            subEn="A digital enthusiast who turns ideas into applications"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                titleFr: "Docteur & Ingénieure",
                titleEn: "PhD & Engineer",
                descFr:
                  "Docteur en informatique et data scientist, je combine rigueur scientifique et créativité pour concevoir des solutions innovantes.",
                descEn:
                  "PhD in Computer Science and Data Scientist, I combine scientific rigor and creativity to design innovative solutions.",
              },
              {
                icon: "💼",
                titleFr: "Leader Digital",
                titleEn: "Digital Leader",
                descFr:
                  "Je dirige un programme digital au sein d'un grand groupe, portant la transformation numérique à grande échelle.",
                descEn:
                  "I lead a digital program within a major corporation, driving large-scale digital transformation.",
              },
              {
                icon: "🚀",
                titleFr: "Créatrice d'Apps",
                titleEn: "App Creator",
                descFr:
                  "Plus de 15 applications développées — du e-learning à la santé, de l'éducation au bien-être. Chaque app est née d'un besoin réel.",
                descEn:
                  "Over 15 applications built — from e-learning to health, education to wellness. Every app was born from a real need.",
              },
            ].map((item) => (
              <div
                key={item.titleFr}
                className="text-center p-8 rounded-2xl bg-gray-soft"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-dark mb-1">
                  {item.titleEn}{" "}
                  <span className="text-gray-400 font-normal text-base">
                    / {item.titleFr}
                  </span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">
                  {item.descEn}
                </p>
                <p className="text-gray-400 text-sm italic leading-relaxed mt-1">
                  {item.descFr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="apps" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* En production */}
          <SectionTitle
            fr="En production"
            en="In Production"
            subFr="Applications déployées et accessibles"
            subEn="Deployed and available applications"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {appsInProd.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>

          {/* Disponibles sur App Store */}
          <SectionTitle
            fr="Disponibles sur l'App Store"
            en="Available on the App Store"
            subFr="Applications mobiles téléchargeables"
            subEn="Downloadable mobile applications"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {appsOnStore.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>

          {/* En cours de validation */}
          <SectionTitle
            fr="En cours de validation"
            en="Pending Review"
            subFr="Soumises sur les stores, en attente de publication"
            subEn="Submitted to stores, awaiting publication"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {appsPending.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>

          {/* En cours de développement */}
          <SectionTitle
            fr="En cours de développement"
            en="In Development"
            subFr="Projets en cours de création"
            subEn="Projects currently being built"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {appsInDev.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            fr="Stack technique"
            en="Tech Stack"
            subFr="Les technologies que j'utilise au quotidien"
            subEn="The technologies I use daily"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Flutter", desc: "Mobile cross-platform", icon: "📱" },
              { name: "Next.js", desc: "Web React framework", icon: "🌐" },
              { name: "React Native", desc: "Mobile with Expo", icon: "⚛️" },
              { name: "Firebase", desc: "Backend & Auth", icon: "🔥" },
              { name: "Supabase", desc: "Open-source backend", icon: "⚡" },
              { name: "TypeScript", desc: "Strong typing", icon: "🔷" },
              { name: "Dart", desc: "Flutter language", icon: "🎯" },
              { name: "Stripe", desc: "Online payments", icon: "💳" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="card-hover text-center p-6 rounded-2xl bg-gray-soft border border-gray-100"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="font-bold text-dark">{tech.name}</div>
                <div className="text-gray-500 text-xs mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 hero-gradient">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Want to collaborate? / Envie de collaborer ?
          </h2>
          <p className="text-indigo-200 text-lg mb-2">
            Whether it{"'"}s for a project, advice, or just a chat — feel
            free to reach out.
          </p>
          <p className="text-indigo-300/70 text-base italic mb-8">
            Que ce soit pour un projet, un conseil ou simplement échanger
            — n{"'"}hésitez pas à me contacter.
          </p>
          <a
            href="mailto:geeketteparisienne@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
          >
            Contact me / Me contacter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-8 px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Geekette Parisienne. All rights
          reserved / Tous droits réservés.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with Next.js · Tailwind CSS · Vercel
        </p>
      </footer>
    </main>
  );
}
