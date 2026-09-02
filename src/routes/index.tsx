import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/logo.png.asset.json";
import workstationAsset from "@/assets/workstation.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SBC Dev — Engenharia de Software Sob Medida" },
      {
        name: "description",
        content:
          "Landing page da SBC Dev: soluções de software robustas, escaláveis e de alto desempenho. Conheça nossos serviços de desenvolvimento full stack, mobile e modernização de sistemas.",
      },
      {
        property: "og:title",
        content: "SBC Dev — Engenharia de Software Sob Medida",
      },
      {
        property: "og:description",
        content:
          "Soluções de software robustas e escaláveis para empresas que buscam performance e confiabilidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white font-outfit text-brand-navy selection:bg-brand-accent selection:text-white">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Journey />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-12">
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logoAsset.url}
          alt="SBC Dev"
          width={40}
          height={40}
          className="size-10 rounded-full object-contain"
        />
        <span className="text-xl font-extrabold tracking-tight">SBC DEV</span>
      </Link>
      <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-brand-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-12 lg:py-24 py-12">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-block rounded-full border border-brand-navy/10 bg-brand-navy/5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            Software Engineer • Full Stack
          </div>
          <h1 className="text-6xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
            CÓDIGO <br /> <span className="text-brand-accent">SÓLIDO</span>{" "}
            <br /> JOVEM EXPERIENTE.
          </h1>
          <p className="max-w-xl text-xl leading-relaxed font-light text-brand-navy/70 md:text-2xl">
            Sou engenheiro de software com 5 anos de experiência prática.
            Transformo complexidade técnica em produtos digitais de alto
            desempenho.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/5511994480107?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-navy px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-brand-accent"
            >
              SOLICITAR ORÇAMENTO
            </a>
            <a
              href="https://linkedin.com/in/pedroemerich"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-brand-navy px-8 py-4 font-bold text-brand-navy transition-all hover:bg-brand-navy hover:text-white"
            >
              VER LINKEDIN
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={workstationAsset.url}
            alt="Estação de trabalho moderna com iluminação azul suave"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-2xl bg-brand-navy/5 object-cover shadow-2xl"
            loading="eager"
            decoding="async"
          />
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-brand-navy/5 bg-white p-8 shadow-xl">
            <div className="text-4xl font-black text-brand-accent">+5</div>
            <div className="text-xs font-bold tracking-widest text-brand-navy/60 uppercase">
              Anos de Código
            </div>
          </div>
          <div className="absolute -top-6 -right-6 rounded-xl bg-brand-navy p-8 shadow-xl">
            <div className="text-4xl font-black text-white">05</div>
            <div className="text-xs font-bold tracking-widest text-white/60 uppercase">
              Anos de Carreira
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Stats() {
  const items = [
    { value: "+10", label: "Projetos Entregues" },
    { value: "Full", label: "Stack & Mobile" },
    { value: "16yo", label: "Início Profissional" },
    { value: "SBC", label: "Padrão de Qualidade" },
  ];

  return (
    <section className="mt-20 bg-brand-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="text-5xl font-bold tracking-tighter">
                {item.value}
              </div>
              <div className="text-xs tracking-[0.2em] text-white/50 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      number: "01",
      title: "Desenvolvimento Full Stack",
      description:
        "Aplicações web e mobile completas, do front-end responsivo ao back-end escalável, usando Angular, Node.js, TypeScript e APIs REST.",
    },
    {
      number: "02",
      title: "Sistemas Multiplataforma",
      description:
        "Construção e publicação de apps Android e iOS com Delphi/Pascal e Flutter, incluindo deploy nas lojas oficiais.",
    },
    {
      number: "03",
      title: "Banco de Dados & Integrações",
      description:
        "Modelagem, otimização e administração de SQL Server, MySQL e PostgreSQL, além de integrações entre sistemas e APIs de terceiros.",
    },
    {
      number: "04",
      title: "Modernização de Sistemas",
      description:
        "Manutenção evolutiva, refatoração e correção de sistemas legados, incluindo soluções TOTVS Protheus em ADVPL.",
    },
    {
      number: "05",
      title: "Metodologias Ágeis",
      description:
        "Trabalho integrado ao time do cliente com ritos ágeis, versionamento Git e foco total na qualidade e pontualidade das entregas.",
    },
    {
      number: "06",
      title: "Consultoria Técnica",
      description:
        "Análise de arquitetura, diagnóstico de performance e orientação estratégica para escolher a stack certa para cada desafio.",
    },
  ];

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tighter">
            ESPECIALIDADES
          </h2>
          <p className="font-medium text-brand-navy/60">
            O que a SBC Dev oferece ao seu negócio.
          </p>
        </div>
        <div className="mb-4 hidden h-px flex-grow bg-brand-navy/10 md:block mx-8" />
        <div className="font-jetbrains text-sm text-brand-accent">
          / expertise_catalog_2026
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.number}
            className="group rounded-2xl border border-brand-navy/10 bg-white p-8 transition-colors hover:border-brand-accent"
          >
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-brand-navy/5 transition-colors group-hover:bg-brand-accent group-hover:text-white">
              <span className="font-jetbrains font-bold">{card.number}</span>
            </div>
            <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
            <p className="leading-relaxed text-brand-navy/70">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      year: "2021",
      title: "Início Profissional",
      description:
        "Comecei cedo na SBC Soft, construindo sistemas multiplataforma com Delphi/Pascal e publicando apps nas lojas oficiais.",
    },
    {
      year: "2024",
      title: "Evolução Full Stack",
      description:
        "Transição para projetos web e APIs com Angular, Node.js e SQL Server, participando de todo o ciclo de vida do software em ambientes corporativos.",
    },
    {
      year: "2026",
      title: "SBC Dev",
      description:
        "Consolidação da SBC Dev para entregar engenharia de software sob medida a empresas que valorizam solidez e resultado.",
    },
  ];

  return (
    <section id="experiencia" className="bg-brand-navy/5 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter">
            TRAJETÓRIA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-navy/70">
            Cinco anos de código, aprendizado contínuo e entregas que geram
            valor real.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.year}
              className="rounded-2xl border border-brand-navy/10 bg-white p-8"
            >
              <span className="font-jetbrains text-sm font-bold text-brand-accent">
                {step.year}
              </span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-navy/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-brand-navy/10 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="SBC Dev"
                width={40}
                height={40}
                className="size-10 rounded-full object-contain"
              />
              <span className="text-2xl font-extrabold">SBC DEV</span>
            </div>
            <p className="max-w-md text-brand-navy/70">
              Engenharia de software sob medida para empresas que precisam de
              soluções robustas, escaláveis e entregues com rigor técnico.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-brand-navy/40 uppercase">
                Contato
              </h4>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li>
                  <a
                    href="mailto:pedroaugusto.emerich@gmail.com"
                    className="hover:text-brand-accent"
                  >
                    pedroaugusto.emerich@gmail.com
                  </a>
                </li>
                <li>(11) 9 9448-0107</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-brand-navy/40 uppercase">
                Redes
              </h4>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li>
                  <a
                    href="https://linkedin.com/in/pedroemerich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pedroemerich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-navy/10 pt-8 md:flex-row">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-jetbrains text-sm text-brand-navy/60">
              © 2026 SBC DEV — BUILD_VERSION_1.0.0
            </p>
            <p className="text-xs text-brand-navy/50">
              Por Pedro Emerich, 21 anos, com 5 anos de experiência prática em software.
            </p>
          </div>
          <p className="text-xs font-bold tracking-widest text-brand-navy/40 uppercase">
            São Bernardo do Campo, SP — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
