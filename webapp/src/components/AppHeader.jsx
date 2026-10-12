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

function AppHeader() {
  return (
    <header className="relative flex flex-wrap items-center justify-between border-b border-line bg-[#0e1113] px-6 py-2 sm:px-[5vw] sm:py-3 lg:px-[76px]">
      <a
        className="inline-flex items-center gap-[9px] text-[15px] font-bold tracking-[-0.03em] text-[#f2f7f7] no-underline sm:text-[17px]"
        href="/"
        aria-label="Reddit - início"
      >
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-orange font-mono text-[15px] tracking-[-0.1em] text-white">
          r/
        </span>
        <span>Reddit</span>
      </a>

      <form
        className="order-3 mt-4 flex w-full md:absolute md:left-1/2 md:top-1/2 md:order-none md:mt-0 md:w-[min(40vw,420px)] md:-translate-x-1/2 md:-translate-y-1/2"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="site-search">
          Pesquisar no Reddit
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
  )
}

export default AppHeader
export { Button }
