const communities = [
  { name: 'r/programacao', members: '128 mil membros' },
  { name: 'r/tecnologia', members: '86 mil membros' },
  { name: 'r/estudos', members: '42 mil membros' },
]

const buttonStyles = {
  primary:
    'bg-orange text-white hover:bg-orange-dark',
  ghost:
    'bg-transparent text-[#f2f7f7] hover:bg-[#202124]',
  secondary:
    'bg-ink text-white',
}

function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[7px] border-0 px-[18px] py-3 text-[13px] font-semibold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="relative flex flex-wrap items-center justify-between border-b border-line px-6 py-[17px] sm:px-[5vw] sm:py-[22px] lg:px-[76px]">
        <a
          className="inline-flex items-center gap-[9px] text-[15px] font-bold tracking-[-0.03em] text-[#f2f7f7] no-underline sm:text-[17px]"
          href="/"
          aria-label="Reddit Clone - início"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-orange font-mono text-[15px] tracking-[-0.1em] text-white">
            r/
          </span>
          <span>Reddit Clone</span>
        </a>

        <form
          className="order-3 mt-4 flex w-full md:absolute md:left-1/2 md:top-1/2 md:order-none md:mt-0 md:w-[min(40vw,420px)] md:-translate-x-1/2 md:-translate-y-1/2"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="site-search">
            Pesquisar no Reddit Clone
          </label>
          <div className="relative w-full">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#a6adb1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              id="site-search"
              className="w-full rounded-lg border border-[#2d3437] bg-[#202124] py-2.5 pl-10 pr-4 text-sm text-[#f2f7f7] outline-none placeholder:text-[#8b9498] focus:border-orange focus:ring-2 focus:ring-orange/20"
              type="search"
              placeholder="Pesquisar"
            />
          </div>
        </form>

        <nav className="flex gap-2.5" aria-label="Navegação principal">
          <Button variant="ghost" className="hidden sm:inline-flex" type="button">
            Entrar
          </Button>
          <Button className="px-3 sm:px-[18px]" type="button">
            Criar conta
          </Button>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1320px] px-6 pb-[45px] pt-[63px] sm:px-[5vw] sm:pb-16 sm:pt-[88px] lg:px-[76px]">
        <section className="max-w-[760px]" aria-labelledby="page-title">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-orange">
            Uma comunidade para todas as ideias
          </p>
          <h1
            className="mb-[25px] max-w-[700px] text-[clamp(45px,7vw,88px)] font-bold leading-[0.97] tracking-[-0.075em]"
            id="page-title"
          >
            O que está acontecendo hoje?
          </h1>
          <p className="mb-7 max-w-[540px] text-[17px] leading-[1.6] text-[#a6adb1]">
            Compartilhe descobertas, participe das conversas e encontre pessoas
            interessadas nos mesmos assuntos que você.
          </p>
          <Button type="button">
            Começar uma discussão
          </Button>
        </section>

        <div className="mt-[72px] grid items-start gap-8 md:mt-[100px] md:grid-cols-[minmax(0,1fr)_340px] md:gap-[clamp(32px,6vw,96px)]">
          <section aria-labelledby="feed-title">
            <div className="flex flex-col items-start justify-between gap-2.5 md:flex-row md:items-end">
              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-orange">
                  Feed da comunidade
                </p>
                <h2 className="mb-0 text-2xl font-semibold tracking-[-0.05em]" id="feed-title">
                  Posts recentes
                </h2>
              </div>
              <button
                className="border-0 bg-transparent p-2 text-xs text-[#a6adb1]"
                type="button"
              >
                Mais recentes <span className="ml-1 text-[17px] text-orange" aria-hidden="true">⌄</span>
              </button>
            </div>

            <article className="mt-6 flex flex-col items-center rounded-[10px] border border-line bg-cream px-[30px] py-[66px] text-center">
              <div className="mb-[22px] flex size-[58px] rotate-[12deg] items-center justify-center rounded-full bg-yellow text-[25px]" aria-hidden="true">
                ✦
              </div>
              <h3 className="mb-[9px] text-xl font-semibold tracking-[-0.04em]">
                Seu feed começa aqui
              </h3>
              <p className="mb-0 max-w-[380px] text-sm leading-[1.6] text-[#77746e]">
                Os posts da API aparecerão nesta área assim que a comunidade
                começar a publicar.
              </p>
              <Button variant="secondary" className="mt-[13px]" type="button">
                Explorar comunidades
              </Button>
            </article>
          </section>

          <aside className="rounded-[10px] bg-ink px-[25px] pb-[22px] pt-[27px] text-white" aria-labelledby="communities-title">
            <div className="flex items-end justify-between">
              <h2 className="max-w-[210px] text-xl font-semibold tracking-[-0.05em]" id="communities-title">
                Comunidades em destaque
              </h2>
              <span className="mb-[3px] size-[13px] rounded-full border-4 border-[#3d3d39] bg-[#79d89c]" aria-label="Atualizado agora" />
            </div>
            <ul className="my-5 mb-5 mt-[29px] list-none p-0">
              {communities.map((community, index) => (
                <li key={community.name} className="flex items-center gap-2.5 border-b border-[#41413d] py-4 last:border-0">
                  <span className="font-mono text-[10px] text-[#8b8983]">0{index + 1}</span>
                  <span className="flex size-[31px] items-center justify-center rounded-full bg-orange text-[13px] font-bold">
                    {community.name[2]}
                  </span>
                  <span className="flex flex-1 flex-col gap-[3px]">
                    <strong className="text-[13px] font-semibold">{community.name}</strong>
                    <small className="text-[10px] text-[#8b8983]">{community.members}</small>
                  </span>
                  <span className="text-base text-[#8b8983]" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
            <button className="border-0 bg-transparent p-0 text-xs text-yellow" type="button">
              Ver todas as comunidades <span className="ml-1 text-[17px]" aria-hidden="true">→</span>
            </button>
          </aside>
        </div>
      </main>

      <footer className="mt-auto flex flex-col gap-4 border-t border-line px-6 py-[22px] font-mono text-[10px] uppercase tracking-[0.03em] text-[#a6adb1] sm:flex-row sm:items-center sm:justify-between sm:px-[5vw] lg:px-[76px]">
        <span>Reddit Clone</span>
        <span>Frontend em React + Vite</span>
      </footer>
    </div>
  )
}

export default App
