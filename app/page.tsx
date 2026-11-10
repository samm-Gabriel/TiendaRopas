const products = [
  {
    name: "Abrigo nebula",
    category: "Outerwear",
    price: "89,90 €",
    was: "149 €",
    tag: "-40%",
    gradient: "from-violet-600/40 via-fuchsia-500/30 to-transparent",
  },
  {
    name: "Set satin midi",
    category: "Vestidos",
    price: "54,50 €",
    was: "89 €",
    tag: "Destacado",
    gradient: "from-cyan-500/35 via-blue-600/25 to-transparent",
  },
  {
    name: "Denim aurora",
    category: "Casual",
    price: "62,00 €",
    was: "99 €",
    tag: "-37%",
    gradient: "from-rose-500/35 via-purple-600/30 to-transparent",
  },
  {
    name: "Knit líquido",
    category: "Jerseys",
    price: "44,90 €",
    was: "72 €",
    tag: "Nuevo",
    gradient: "from-amber-400/30 via-orange-500/25 to-transparent",
  },
];

const perks = [
  {
    title: "Envío en 48 h",
    desc: "Entrega express en península sin coste a partir de 60 €.",
    icon: "✦",
  },
  {
    title: "Devolución 30 días",
    desc: "Prueba en casa con recogida gratuita si no encaja.",
    icon: "◇",
  },
  {
    title: "Calidad certificada",
    desc: "Tejidos premium, tallaje inclusivo y producción responsable.",
    icon: "○",
  },
];

function LiquidBackground() {
  return (
    <div className="liquid-bg" aria-hidden>
      <div className="liquid-orb liquid-orb-1" />
      <div className="liquid-orb liquid-orb-2" />
      <div className="liquid-orb liquid-orb-3" />
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <LiquidBackground />
      <div className="relative mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="glass glass-refraction sticky top-4 z-50 flex items-center justify-between rounded-2xl px-5 py-3 sm:px-8">
          <span className="text-lg font-semibold tracking-tight">
            Lúmina<span className="text-gradient">.</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 sm:flex">
            <a href="#coleccion" className="transition hover:text-white">
              Colección
            </a>
            <a href="#beneficios" className="transition hover:text-white">
              Beneficios
            </a>
            <a href="#newsletter" className="transition hover:text-white">
              Ofertas
            </a>
          </nav>
          <a href="#coleccion" className="btn-glass text-xs sm:text-sm">
            Ver rebajas
          </a>
        </header>

        <main className="mt-10 sm:mt-16">
          <section className="glass-strong glass-refraction relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
                Liquid glass sale · hasta 50% off
              </p>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Moda que flota entre{" "}
                <span className="text-gradient">luz y cristal</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-zinc-400">
                Piezas de temporada con acabados premium. Transparencias,
                volumen y color en una rebaja diseñada para destacar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#coleccion" className="btn-glass">
                  Explorar colección
                </a>
                <a
                  href="#newsletter"
                  className="glass inline-flex items-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:text-white"
                >
                  Recibir aviso VIP
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
                <div>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">
                    50%
                  </dt>
                  <dd className="text-xs text-zinc-500 sm:text-sm">Máx. dto.</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">
                    120+
                  </dt>
                  <dd className="text-xs text-zinc-500 sm:text-sm">Piezas</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">
                    4.9
                  </dt>
                  <dd className="text-xs text-zinc-500 sm:text-sm">Valoración</dd>
                </div>
              </dl>
            </div>
          </section>

          <section id="coleccion" className="mt-20">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Colección en rebaja
                </h2>
                <p className="mt-2 text-zinc-400">
                  Tarjetas con efecto cristal líquido — sin imágenes externas.
                </p>
              </div>
              <span className="glass w-fit rounded-full px-4 py-2 text-xs font-medium text-zinc-300">
                Actualizado hoy
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <article
                  key={p.name}
                  className="glass glass-refraction group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-white/35"
                >
                  <div
                    className={`relative aspect-[4/5] bg-gradient-to-br ${p.gradient}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.12)_50%,transparent_75%)] opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <div className="mt-auto flex items-baseline gap-2 pt-4">
                      <span className="text-xl font-bold text-gradient">
                        {p.price}
                      </span>
                      <span className="text-sm text-zinc-500 line-through">
                        {p.was}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-xl border border-white/15 bg-white/5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="beneficios" className="mt-24">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Comprar con tranquilidad
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-zinc-400">
              Servicios envueltos en el mismo acabado cristal que la colección.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {perks.map((item) => (
                <div
                  key={item.title}
                  className="glass glass-refraction rounded-2xl p-8 text-center"
                >
                  <span
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="newsletter" className="mt-24">
            <div className="glass-strong glass-refraction rounded-3xl px-6 py-12 text-center sm:px-16 sm:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Acceso anticipado
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-zinc-400">
                Suscríbete y recibe un 10% extra en tu primera compra de rebajas.
              </p>
              <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
                <label className="sr-only" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="glass flex-1 rounded-full border border-white/15 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/35"
                />
                <button type="submit" className="btn-glass shrink-0">
                  Unirme
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <p>
            © {year} Lúmina Tienda de Ropas · Demo liquid glass
          </p>
        </footer>
      </div>
    </>
  );
}
