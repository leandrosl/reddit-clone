import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AppHeader, { Button } from './components/AppHeader'
import CommunityPage from './pages/CommunityPage'

const communities = [
  { name: 'r/programacao', members: '128 mil membros' },
  { name: 'r/tecnologia', members: '86 mil membros' },
  { name: 'r/estudos', members: '42 mil membros' },
]

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <AppHeader />

      <main className="mx-auto w-full max-w-[1320px] px-6 pb-[45px] pt-10 sm:px-[5vw] sm:pb-16 sm:pt-14 lg:px-[76px]">
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_340px] md:gap-[clamp(32px,6vw,96px)] lg:grid-cols-[180px_minmax(0,1fr)_320px] lg:gap-8">
          <div className="hidden lg:block" aria-hidden="true" />

          <section className="lg:col-start-2" aria-labelledby="feed-title">
            <div className="flex flex-col items-start justify-between gap-2.5 md:flex-row md:items-end">
              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-orange">
                  Feed da comunidade
                </p>
                <h2 className="mb-0 text-2xl font-semibold tracking-[-0.05em]" id="feed-title">
                  Posts recentes
                </h2>
              </div>
              <button className="border-0 bg-transparent p-2 text-xs text-[#a6adb1]" type="button">
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

          <aside className="rounded-[10px] bg-ink px-[25px] pb-[22px] pt-[27px] text-white lg:col-start-3" aria-labelledby="communities-title">
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
                    <Link className="text-[13px] font-semibold no-underline hover:text-white" to={`/r/${community.name.slice(2)}`}>
                      {community.name}
                    </Link>
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
        <span>Reddit</span>
        <span>Frontend em React + Vite</span>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/r/:communityName" element={<CommunityPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
